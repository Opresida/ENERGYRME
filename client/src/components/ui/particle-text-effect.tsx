
import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  char: string;
  opacity: number;
  size: number;
  color: string;
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
  particleCount = 300
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationRef = useRef<number>();
  const isAnimating = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    // Configurar canvas
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();

    // Função para criar partículas baseadas no texto
    const createTextParticles = (text: string) => {
      if (!text || text.length === 0) return;

      const width = canvas.width;
      const height = canvas.height;
      
      if (width === 0 || height === 0) return;

      // Calcular tamanho da fonte baseado no tamanho do canvas e texto
      const fontSize = Math.min(width / (text.length * 0.6), height * 0.3, 60);
      
      // Criar canvas temporário para renderizar o texto
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      tempCanvas.width = width;
      tempCanvas.height = height;

      // Configurar fonte e estilo
      tempCtx.font = `bold ${fontSize}px Arial, sans-serif`;
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillStyle = '#ffffff';

      // Desenhar texto no canvas temporário
      const centerX = width / 2;
      const centerY = height / 2;
      tempCtx.fillText(text, centerX, centerY);

      // Extrair dados de pixel
      const imageData = tempCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      const pixels: { x: number; y: number }[] = [];

      // Encontrar pixels do texto (sampling mais eficiente)
      for (let y = 0; y < height; y += 3) {
        for (let x = 0; x < width; x += 3) {
          const index = (y * width + x) * 4;
          const alpha = data[index + 3];
          
          if (alpha > 50) { // Threshold para detectar texto
            pixels.push({ x, y });
          }
        }
      }

      console.log(`Texto: "${text}" - Pixels encontrados: ${pixels.length}`);

      // Criar partículas
      const newParticles: Particle[] = [];
      const maxParticles = Math.min(particleCount, pixels.length);

      for (let i = 0; i < maxParticles; i++) {
        // Selecionar pixel aleatório
        const pixelIndex = Math.floor(Math.random() * pixels.length);
        const pixel = pixels[pixelIndex];
        
        if (pixel) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: pixel.x,
            targetY: pixel.y,
            char: text[Math.floor(Math.random() * text.length)],
            opacity: 0,
            size: Math.random() * 2 + 1,
            color: particleColor
          });
        }
      }

      setParticles(newParticles);
      console.log(`Partículas criadas: ${newParticles.length}`);
    };

    // Função de animação
    const animate = () => {
      if (!isAnimating.current) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar background semi-transparente para efeito de trilha
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Mover partícula em direção ao alvo
        const dx = particle.targetX - particle.x;
        const dy = particle.targetY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Velocidade adaptativa
        const speed = animationSpeed * (1 + distance * 0.01);
        
        particle.x += dx * speed;
        particle.y += dy * speed;

        // Calcular opacidade baseada na distância
        if (distance < 100) {
          particle.opacity = Math.min(1, particle.opacity + 0.03);
        } else {
          particle.opacity = Math.max(0, 1 - distance / 200);
        }

        // Desenhar partícula se visível
        if (particle.opacity > 0.01) {
          ctx.save();
          
          // Aplicar opacidade
          ctx.globalAlpha = particle.opacity;
          
          // Desenhar caracter
          ctx.fillStyle = particle.color;
          ctx.font = `${particle.size * 6}px Arial, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Adicionar glow effect
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 8;
          ctx.fillText(particle.char, particle.x, particle.y);
          
          // Desenhar segundo layer para intensificar o brilho
          ctx.shadowBlur = 4;
          ctx.fillText(particle.char, particle.x, particle.y);
          
          ctx.restore();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    // Inicializar
    if (words.length > 0) {
      isAnimating.current = true;
      createTextParticles(words[0]);
      animate();
    }

    // Trocar palavras periodicamente
    const wordInterval = setInterval(() => {
      setCurrentWordIndex(prev => {
        const newIndex = (prev + 1) % words.length;
        if (words[newIndex]) {
          createTextParticles(words[newIndex]);
        }
        return newIndex;
      });
    }, 4000);

    // Resize listener
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
      if (words[currentWordIndex]) {
        createTextParticles(words[currentWordIndex]);
      }
    });

    resizeObserver.observe(container);

    // Cleanup
    return () => {
      isAnimating.current = false;
      clearInterval(wordInterval);
      resizeObserver.disconnect();
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [words, particleColor, animationSpeed, particleCount]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'transparent',
          display: 'block'
        }}
      />
      
      {/* Debug info */}
      <div className="absolute top-4 left-4 text-xs text-green-400/60">
        Particles: {particles.length}
      </div>
      
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
