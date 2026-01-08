import React, { useEffect, useRef } from 'react';

const SEQUENCE = [
    { hj: '福', en: 'FU', color: '#FFD700' }, // Gold
    { hj: '祿', en: 'LU', color: '#50C878' }, // Emerald
    { hj: '壽', en: 'SHOU', color: '#E0115F' } // Ruby
];

class Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    size: number;
    vx: number;
    vy: number;
    force: number;
    angle: number;
    distance: number;
    friction: number;
    ease: number;

    constructor(x: number, y: number, color: string) {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 2 + 1;
        this.vx = 0;
        this.vy = 0;
        this.force = 0;
        this.angle = 0;
        this.distance = 0;
        this.friction = 0.95;
        this.ease = 0.1;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.x += (this.originX - this.x) * this.ease;
        this.y += (this.originY - this.y) * this.ease;
    }

    scatter() {
        this.originX = Math.random() * window.innerWidth;
        this.originY = Math.random() * window.innerHeight;
    }

    move(newX: number, newY: number) {
        this.originX = newX;
        this.originY = newY;
    }
}

const HanjaParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationFrame = useRef<number>();
    const currentIndex = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const fetchPixels = (text: string) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            const fontSize = Math.min(canvas.width, canvas.height) * 0.5;
            ctx.font = `900 ${fontSize}px "Noto Serif KR", serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            const points = [];
            const gap = 8;

            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    const index = (y * canvas.width + x) * 4;
                    const alpha = data[index + 3];
                    if (alpha > 128) {
                        points.push({ x, y });
                    }
                }
            }
            return points;
        };

        const initParticles = () => {
            const points = fetchPixels(SEQUENCE[0].hj);
            particles.current = points.map(p => new Particle(p.x, p.y, SEQUENCE[0].color));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Global Glow Effect
            ctx.shadowBlur = 15;
            ctx.shadowColor = SEQUENCE[currentIndex.current].color;

            particles.current.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            animationFrame.current = requestAnimationFrame(animate);
        };

        const cycle = async () => {
            // Wait at current state
            await new Promise(r => setTimeout(r, 2000));

            // Scatter
            particles.current.forEach(p => p.scatter());
            await new Promise(r => setTimeout(r, 1000));

            // Move to next
            currentIndex.current = (currentIndex.current + 1) % SEQUENCE.length;
            const nextPoints = fetchPixels(SEQUENCE[currentIndex.current].hj);

            const pCount = particles.current.length;
            const nextCount = nextPoints.length;

            // Adjust particle count to match next shape
            if (nextCount > pCount) {
                for (let i = 0; i < nextCount - pCount; i++) {
                    const p = new Particle(Math.random() * canvas.width, Math.random() * canvas.height, SEQUENCE[currentIndex.current].color);
                    particles.current.push(p);
                }
            }

            nextPoints.forEach((p, i) => {
                if (particles.current[i]) {
                    particles.current[i].move(p.x, p.y);
                    particles.current[i].color = SEQUENCE[currentIndex.current].color;
                }
            });

            // Remove excess particles
            if (pCount > nextCount) {
                particles.current.splice(nextCount);
            }

            cycle();
        };

        initParticles();
        animate();
        cycle();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrame.current !== undefined) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            <canvas ref={canvasRef} className="w-full h-full opacity-60" />
        </div>
    );
};

export default HanjaParticles;
