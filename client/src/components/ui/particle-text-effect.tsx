
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  char: string;
  opacity: number;
  size: number;
}

interface ParticleTextEffectProps {
  words: string[];
  className?: string;
  particleColor?: string;
  animationSpeed?: number;
  particleCount?: number;
}

export function ParticleTextEffect({
  words,
  className = '',
  particleColor = '#22c55e',
  animationSpeed = 0.02,
  particleCount = 200
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Função para criar partículas baseadas no texto
    const createTextParticles = (text: string) => {
      const fontSize = Math.max(24, canvas.width / text.length * 0.8);
      ctx.font = `bold ${fontSize}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Criar bitmap do texto
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;
      ctx.fillText(text, centerX, centerY);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const textPixels: { x: number; y: number }[] = [];

      // Extrair pixels do texto
      for (let y = 0; y < canvas.height; y += 2) {
        for (let x = 0; x < canvas.width; x += 2) {
          const index = (y * canvas.width + x) * 4;
          if (imageData.data[index + 3] > 128) {
            textPixels.push({ x, y });
          }
        }
      }

      // Criar partículas
      const newParticles: Particle[] = [];
      for (let i = 0; i < Math.min(particleCount, textPixels.length); i++) {
        const pixel = textPixels[Math.floor(Math.random() * textPixels.length)];
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          targetX: pixel.x,
          targetY: pixel.y,
          char: text[Math.floor(Math.random() * text.length)],
          opacity: 0,
          size: Math.random() * 3 + 1
        });
      }

      setParticles(newParticles);
    };

    // Função de animação
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Mover partícula em direção ao alvo
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        
        particle.x += dx * animationSpeed;
        particle.y += dy * animationSpeed;

        // Aumentar opacidade conforme se aproxima do alvo
        const distance = Math.sqrt(dx * dx + dy * dy);
        particle.opacity = Math.max(0, Math.min(1, 1 - distance / 100));

        // Desenhar partícula
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particleColor;
        ctx.font = `${particle.size * 8}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(particle.char, particle.x, particle.y);
        
        // Adicionar glow effect
        ctx.shadowColor = particleColor;
        ctx.shadowBlur = 10;
        ctx.fillText(particle.char, particle.x, particle.y);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Inicializar com primeira palavra
    if (words.length > 0) {
      createTextParticles(words[0]);
      animate();
    }

    // Trocar palavras a cada 3 segundos
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prev => {
        const newIndex = (prev + 1) % words.length;
        createTextParticles(words[newIndex]);
        return newIndex;
      });
    }, 3000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(wordInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [words, particleColor, animationSpeed, particleCount]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      {/* Indicador da palavra atual */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {words.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentWordIndex
                  ? 'bg-green-500 shadow-lg shadow-green-500/50'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
