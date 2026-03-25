import React, { useEffect, useMemo, useState } from 'react';

const Background3D = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        size: `${6 + ((index * 7) % 14)}px`,
        duration: `${10 + ((index * 5) % 12)}s`,
        delay: `${(index * 1.3) % 8}s`,
        opacity: 0.18 + ((index * 9) % 32) / 100
      })),
    []
  );

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const doc = document.documentElement;
      const maxScroll = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const nextProgress = Math.min(window.scrollY / maxScroll, 1);
      setScrollProgress(nextProgress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollProgress);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const cyanOrbShift = -(scrollProgress * 80);
  const purpleOrbShift = scrollProgress * 65;
  const gridDrift = scrollProgress * 90;
  const ambientOpacity = 0.12 + scrollProgress * 0.2;
  const particleOpacityBoost = scrollProgress * 0.25;
  const hueRotation = scrollProgress * 30;
  const ambientScale = 1 + scrollProgress * 0.08;
  const gridSize = 80 - scrollProgress * 28;
  const gridOpacity = 0.3 + scrollProgress * 0.35;
  const scanlineOpacity = 0.04 + scrollProgress * 0.12;
  const cyanOrbScale = 1 + scrollProgress * 0.22;
  const purpleOrbScale = 1 + scrollProgress * 0.18;

  return (
    <div
      className="bg-ambient"
      aria-hidden="true"
      style={{
        background: `radial-gradient(circle at ${80 - scrollProgress * 30}% ${10 + scrollProgress * 30}%, rgba(112, 0, 255, ${ambientOpacity.toFixed(2)}), transparent 45%)`,
        filter: `hue-rotate(${hueRotation.toFixed(2)}deg)`,
        transform: `scale(${ambientScale.toFixed(3)})`
      }}
    >
      <div
        className="bg-orb bg-orb-cyan"
        style={{
          transform: `translateY(${cyanOrbShift.toFixed(2)}px) scale(${cyanOrbScale.toFixed(3)}) rotate(${(scrollProgress * 12).toFixed(2)}deg)`
        }}
      />
      <div
        className="bg-orb bg-orb-purple"
        style={{
          transform: `translateY(${purpleOrbShift.toFixed(2)}px) scale(${purpleOrbScale.toFixed(3)}) rotate(${(-scrollProgress * 10).toFixed(2)}deg)`
        }}
      />
      <div
        className="bg-grid"
        style={{
          transform: `translateY(${gridDrift.toFixed(2)}px) perspective(800px) rotateX(${(scrollProgress * 7).toFixed(2)}deg)`,
          backgroundSize: `${gridSize.toFixed(1)}px ${gridSize.toFixed(1)}px`,
          opacity: Math.min(gridOpacity, 0.85)
        }}
      />
      <div
        className="bg-scanlines"
        style={{
          opacity: scanlineOpacity,
          transform: `translateY(${(scrollProgress * 120).toFixed(2)}px)`
        }}
      />
      <div className="bg-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="bg-particle"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDuration: `${Math.max(parseFloat(particle.duration) - scrollProgress * 6, 4).toFixed(2)}s`,
              animationDelay: particle.delay,
              opacity: Math.min(particle.opacity + particleOpacityBoost, 0.95)
            }}
          />
        ))}
      </div>
      <style>{`
        .bg-ambient {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          overflow: hidden;
          background: radial-gradient(circle at top right, rgba(112, 0, 255, 0.10), transparent 45%);
          transition: filter 0.25s linear, transform 0.25s linear, background 0.25s linear;
          transform-origin: center center;
        }
        .bg-orb {
          position: absolute;
          filter: blur(50px);
          border-radius: 999px;
          animation: drift 14s ease-in-out infinite alternate;
        }
        .bg-orb-cyan {
          width: 40vw;
          height: 40vw;
          min-width: 280px;
          min-height: 280px;
          top: -10%;
          left: -8%;
          background: rgba(0, 240, 255, 0.22);
        }
        .bg-orb-purple {
          width: 34vw;
          height: 34vw;
          min-width: 220px;
          min-height: 220px;
          right: -6%;
          bottom: -8%;
          background: rgba(112, 0, 255, 0.24);
          animation-duration: 18s;
        }
        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 240, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.06) 1px, transparent 1px);
          background-size: 70px 70px;
          mask-image: radial-gradient(circle at center, black 35%, transparent 80%);
          opacity: 0.45;
          animation: grid-pan 24s linear infinite;
        }
        .bg-particles {
          position: absolute;
          inset: 0;
        }
        .bg-scanlines {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(0, 240, 255, 0.16) 0px,
            rgba(0, 240, 255, 0.16) 1px,
            transparent 2px,
            transparent 6px
          );
          mix-blend-mode: screen;
          animation: scan 8s linear infinite;
        }
        .bg-particle {
          position: absolute;
          bottom: -30px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(0, 240, 255, 0.8), rgba(0, 240, 255, 0.1));
          animation-name: float-up;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes float-up {
          from {
            transform: translateY(0) scale(1);
          }
          to {
            transform: translateY(-110vh) scale(0.55);
          }
        }
        @keyframes drift {
          from {
            transform: translate(0, 0);
          }
          to {
            transform: translate(25px, 30px);
          }
        }
        @keyframes grid-pan {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(70px);
          }
        }
        @keyframes scan {
          from {
            background-position-y: 0;
          }
          to {
            background-position-y: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default Background3D;
