import React, { useEffect, useRef } from 'react';

const SEQUENCE = [
    { hj: '福', en: 'FU', color: '#FFD700' }, // Gold
    { hj: '祿', en: 'LU', color: '#50C878' }, // Emerald
    { hj: '壽', en: 'SHOU', color: '#E0115F' } // Ruby
];

// Background Layer Particles (Large, slow, grey)
class BackgroundParticle {
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    canvasWidth: number;
    canvasHeight: number;

    constructor(w: number, h: number) {
        this.canvasWidth = w;
        this.canvasHeight = h;
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 80 + 30; // Large, soft spheres
        this.vx = (Math.random() - 0.5) * 0.15; // Extremely slow
        this.vy = (Math.random() - 0.5) * 0.15;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = this.canvasWidth;
        if (this.x > this.canvasWidth) this.x = 0;
        if (this.y < 0) this.y = this.canvasHeight;
        if (this.y > this.canvasHeight) this.y = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, 'rgba(100, 100, 100, 0.1)');
        gradient.addColorStop(1, 'rgba(100, 100, 100, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Foreground Layer Particles (Converging into Hanja)
class Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    color: string;
    size: number;
    ease: number;

    constructor(x: number, y: number, color: string) {
        // Start from a wide circle
        const radius = Math.max(window.innerWidth, window.innerHeight) * 1.5;
        const angle = Math.random() * Math.PI * 2;
        this.x = window.innerWidth / 2 + Math.cos(angle) * radius;
        this.y = window.innerHeight / 2 + Math.sin(angle) * radius;

        this.originX = x;
        this.originY = y;
        this.color = color;
        this.size = Math.random() * 2.0 + 1.2; // Bolder particles
        this.ease = 0.04;
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
        const radius = Math.max(window.innerWidth, window.innerHeight) * 1.5;
        const angle = Math.random() * Math.PI * 2;
        this.originX = window.innerWidth / 2 + Math.cos(angle) * radius;
        this.originY = window.innerHeight / 2 + Math.sin(angle) * radius;
    }

    move(newX: number, newY: number) {
        this.originX = newX;
        this.originY = newY;
    }
}

const HanjaParticles: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const foregroundParticles = useRef<Particle[]>([]);
    const backgroundParticles = useRef<BackgroundParticle[]>([]);
    const animationFrame = useRef<number>();
    const currentIndex = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-init bg particles on resize to fit new dimensions
            backgroundParticles.current = Array.from({ length: 80 }, () => new BackgroundParticle(canvas.width, canvas.height));
        };
        window.addEventListener('resize', resize);
        resize();

        const fetchPixels = (text: string) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white';
            const fontSize = Math.min(canvas.width, canvas.height) * 0.45;
            ctx.font = `900 ${fontSize}px "Noto Serif KR", serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(text, canvas.width / 2, canvas.height / 2);

            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            const points = [];
            const gap = 4; // Higher density

            for (let y = 0; y < canvas.height; y += gap) {
                for (let x = 0; x < canvas.width; x += gap) {
                    const index = (y * canvas.width + x) * 4;
                    const alpha = data[index + 3];
                    if (alpha > 150) { // Sharper threshold
                        points.push({ x, y });
                    }
                }
            }
            return points;
        };

        const initParticles = () => {
            const points = fetchPixels(SEQUENCE[0].hj);
            foregroundParticles.current = points.map(p => new Particle(p.x, p.y, SEQUENCE[0].color));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Background Layer
            backgroundParticles.current.forEach(p => {
                p.update();
                p.draw(ctx);
            });

            // Draw Foreground Layer (Hanja)
            ctx.shadowBlur = 10;
            ctx.shadowColor = SEQUENCE[currentIndex.current].color;
            foregroundParticles.current.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            ctx.shadowBlur = 0;

            animationFrame.current = requestAnimationFrame(animate);
        };

        const cycle = async () => {
            // Show character for exactly 2 seconds as requested
            await new Promise(r => setTimeout(r, 2000));

            // Scatter to wide circle
            foregroundParticles.current.forEach(p => p.scatter());
            await new Promise(r => setTimeout(r, 2500));

            // Load next character
            currentIndex.current = (currentIndex.current + 1) % SEQUENCE.length;
            const nextPoints = fetchPixels(SEQUENCE[currentIndex.current].hj);

            const pCount = foregroundParticles.current.length;
            const nextCount = nextPoints.length;

            if (nextCount > pCount) {
                for (let i = 0; i < nextCount - pCount; i++) {
                    const p = new Particle(window.innerWidth / 2, window.innerHeight / 2, SEQUENCE[currentIndex.current].color);
                    foregroundParticles.current.push(p);
                }
            }

            nextPoints.forEach((p, i) => {
                if (foregroundParticles.current[i]) {
                    foregroundParticles.current[i].move(p.x, p.y);
                    foregroundParticles.current[i].color = SEQUENCE[currentIndex.current].color;
                }
            });

            if (pCount > nextCount) {
                foregroundParticles.current.splice(nextCount);
            }

            cycle();
        };

        initParticles();
        animate();
        cycle();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationFrame.current !== undefined) {
                cancelAnimationFrame(animationFrame.current as number);
            }
        };
    }, []);

    return (
        <div className="absolute inset-x-0 inset-y-0 pointer-events-none z-0">
            <canvas ref={canvasRef} className="w-full h-full opacity-90" />
        </div>
    );
};

export default HanjaParticles;
