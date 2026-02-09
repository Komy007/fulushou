import React, { useEffect, useRef } from 'react';
import { Language } from '../types';
import { Sparkles, ArrowDown } from 'lucide-react';

interface HeroProps {
  lang: Language;
  scrollToSection: (id: string) => void;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  acceleration: number;
  angle: number;
  angularVelocity: number;
  type: 'core' | 'flare' | 'dust';
}

const Hero: React.FC<HeroProps> = ({ lang, scrollToSection }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create particles with different behaviors
    const createParticles = () => {
      particles = [];
      const centerX = canvas.width * 0.6;
      const centerY = canvas.height * 0.5;

      // Core particles - dense center
      for (let i = 0; i < 300; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 80; // Close to center
        particles.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          baseX: centerX,
          baseY: centerY,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.6 + 0.4,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          life: Math.random() * 100,
          maxLife: 100 + Math.random() * 100,
          acceleration: 0.01,
          angle: angle,
          angularVelocity: (Math.random() - 0.5) * 0.02,
          type: 'core'
        });
      }

      // Flare particles - erupting outward irregularly
      for (let i = 0; i < 150; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 50 + Math.random() * 200;
        const speed = 0.5 + Math.random() * 2;
        particles.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          baseX: centerX,
          baseY: centerY,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          speedX: Math.cos(angle) * speed * 0.1,
          speedY: Math.sin(angle) * speed * 0.1,
          life: Math.random() * 200,
          maxLife: 200 + Math.random() * 200,
          acceleration: 0.005 + Math.random() * 0.01,
          angle: angle,
          angularVelocity: (Math.random() - 0.5) * 0.01,
          type: 'flare'
        });
      }

      // Dust particles - scattered widely with drift
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.4 + 0.1,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          life: Math.random() * 300,
          maxLife: 300 + Math.random() * 300,
          acceleration: 0,
          angle: Math.random() * Math.PI * 2,
          angularVelocity: (Math.random() - 0.5) * 0.005,
          type: 'dust'
        });
      }
    };

    // Noise function for organic movement
    const noise = (x: number, y: number, t: number) => {
      return Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.7) * 0.5;
    };

    const animate = () => {
      time += 0.01;

      // Create gradient background
      ctx.fillStyle = 'rgba(12, 10, 9, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width * 0.6;
      const centerY = canvas.height * 0.5;

      // Draw central glow
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, canvas.height * 0.6
      );
      gradient.addColorStop(0, 'rgba(255, 200, 100, 0.15)');
      gradient.addColorStop(0.2, 'rgba(255, 150, 50, 0.08)');
      gradient.addColorStop(0.5, 'rgba(200, 100, 50, 0.03)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, index) => {
        // Organic noise-based movement
        const noiseValue = noise(p.x, p.y, time);

        if (p.type === 'core') {
          // Core particles swirl and pulse
          p.angle += p.angularVelocity;
          const pulseDistance = 60 + Math.sin(time * 2 + index * 0.1) * 20;
          const targetX = centerX + Math.cos(p.angle) * pulseDistance * (0.5 + noiseValue);
          const targetY = centerY + Math.sin(p.angle) * pulseDistance * (0.5 + noiseValue);
          p.x += (targetX - p.x) * 0.02;
          p.y += (targetY - p.y) * 0.02;
          p.opacity = 0.4 + Math.sin(time * 3 + index) * 0.3;

        } else if (p.type === 'flare') {
          // Flare particles erupt outward irregularly
          const dx = p.x - centerX;
          const dy = p.y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Irregular eruption patterns
          const eruptionForce = Math.sin(time * 0.5 + p.angle * 3) * 0.5 + 0.5;
          p.speedX += (dx / dist) * p.acceleration * eruptionForce;
          p.speedY += (dy / dist) * p.acceleration * eruptionForce;

          // Add turbulence
          p.speedX += noiseValue * 0.1;
          p.speedY += noise(p.y, p.x, time) * 0.1;

          // Apply velocity with damping
          p.x += p.speedX;
          p.y += p.speedY;
          p.speedX *= 0.98;
          p.speedY *= 0.98;

          // Fade based on distance
          p.opacity = Math.max(0, 0.6 - dist / 400);

          // Reset if too far
          if (dist > 500 || p.opacity < 0.05) {
            const angle = Math.random() * Math.PI * 2;
            const startDist = 30 + Math.random() * 50;
            p.x = centerX + Math.cos(angle) * startDist;
            p.y = centerY + Math.sin(angle) * startDist;
            p.speedX = Math.cos(angle) * 0.5;
            p.speedY = Math.sin(angle) * 0.5;
            p.angle = angle;
            p.opacity = 0.5;
          }

        } else {
          // Dust particles drift gently
          p.x += p.speedX + noiseValue * 0.3;
          p.y += p.speedY + noise(p.y, p.x, time) * 0.3;

          // Wrap around screen
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          // Subtle pulsing
          p.opacity = p.opacity * 0.99 + 0.15 * Math.sin(time + index * 0.01) * 0.01 + 0.1;
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        if (p.type === 'core') {
          // Warm orange-white glow for core
          ctx.fillStyle = `rgba(255, ${200 + Math.random() * 55}, ${150 + Math.random() * 50}, ${p.opacity})`;
          ctx.shadowColor = 'rgba(255, 180, 100, 0.5)';
          ctx.shadowBlur = 8;
        } else if (p.type === 'flare') {
          // Golden flare particles
          ctx.fillStyle = `rgba(255, ${180 + Math.random() * 40}, ${80 + Math.random() * 40}, ${p.opacity})`;
          ctx.shadowColor = 'rgba(255, 150, 50, 0.3)';
          ctx.shadowBlur = 4;
        } else {
          // White-ish dust
          ctx.fillStyle = `rgba(255, 255, ${230 + Math.random() * 25}, ${p.opacity})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw subtle connection lines for nearby flare particles
      ctx.save();
      ctx.globalAlpha = 0.1;
      particles.filter(p => p.type === 'flare').forEach((p1, i, arr) => {
        arr.slice(i + 1, i + 4).forEach(p2 => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 50) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 180, 100, ${0.2 * (1 - dist / 50)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();

    // Clear canvas completely first
    ctx.fillStyle = '#0c0a09';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      ctx.fillStyle = '#0c0a09';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const content = {
    badge: {
      ko: '캄보디아 시장의 마켓 아키텍트',
      en: "Cambodia's Market Architect",
      zh: '柬埔寨市场架构师',
      kh: 'ស្ថាបត្យករទីផ្សារកម្ពុជា'
    },
    title1: {
      ko: '불가능을 가능으로,',
      en: 'Turning the',
      zh: '化不可能',
      kh: 'បំប្លែងអសាធ្យ'
    },
    title2: {
      ko: '신화를 현실로.',
      en: 'Impossible into Legend.',
      zh: '为传奇。',
      kh: 'ទៅជារឿងព្រេង។'
    },
    desc: {
      ko: 'Fu Lu Shou는 단순한 유통을 넘어, 현지화 전략과 강력한 네트워크로 귀사의 브랜드를 캄보디아의 \'국민 브랜드\'로 설계합니다.',
      en: "Beyond simple logistics, we architect your brand into a 'National Brand' through hyper-localization strategies and an unrivaled network.",
      zh: '福禄寿超越简单物流，通过超本地化战略和强大网络，将您的品牌打造成柬埔寨的"国民品牌"。',
      kh: 'ហួសពីការដឹកជញ្ជូន យើងរចនាម៉ាកយីហោរបស់អ្នកទៅជា \'ម៉ាកយីហោជាតិ\' តាមរយៈយុទ្ធសាស្រ្តមូលដ្ឋាន។'
    },
    cta1: {
      ko: '성공 사례 분석',
      en: 'Case Study',
      zh: '案例研究',
      kh: 'ករណីសិក្សា'
    },
    cta2: {
      ko: '파트너십 문의',
      en: 'Partnership Inquiry',
      zh: '合作咨询',
      kh: 'ការសាកសួរភាពជាដៃគូ'
    }
  };

  return (
    <section id="home" className="relative bg-stone-950 min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Solar Magma Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/40 to-transparent z-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-12 md:py-0">
        <div className="lg:w-4/5 xl:w-3/5">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 animate-fade-in-up backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 mr-2" />
            {content.badge[lang]}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8 animate-fade-in-up delay-100 leading-[0.95]">
            {content.title1[lang]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 animate-gradient-x drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]">
              {content.title2[lang]}
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-stone-400 max-w-2xl animate-fade-in-up delay-200 leading-relaxed font-light">
            {content.desc[lang]}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-5 animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('strategy')}
              className="group px-6 md:px-10 py-3 md:py-5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-base md:text-lg font-bold text-stone-900 hover:from-yellow-400 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center justify-center gap-2"
            >
              {content.cta1[lang]}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 md:px-10 py-3 md:py-5 rounded-full border border-amber-500/50 text-base md:text-lg font-bold text-amber-400 hover:bg-amber-500/10 hover:text-amber-300 transition-all hover:border-amber-400"
            >
              {content.cta2[lang]}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-amber-400">
          {lang === 'ko' ? '스크롤' : lang === 'zh' ? '滚动' : lang === 'kh' ? 'រំកិល' : 'Scroll'}
        </span>
        <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </section>
  );
};

export default Hero;
