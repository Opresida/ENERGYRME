
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

      // Calcular tamanho da fonte otimizado para legibilidade
      const fontSize = Math.min(width / (text.length * 0.4), height * 0.4, 80);
      
      // Criar canvas temporário para renderizar o texto
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      if (!tempCtx) return;

      // Usar resolução maior para melhor detecção
      const resolution = 2;
      tempCanvas.width = width * resolution;
      tempCanvas.height = height * resolution;

      // Configurar fonte e estilo com melhor qualidade
      tempCtx.font = `bold ${fontSize * resolution}px Arial, sans-serif`;
      tempCtx.textAlign = 'center';
      tempCtx.textBaseline = 'middle';
      tempCtx.fillStyle = '#ffffff';
      
      // Melhorar qualidade do texto
      tempCtx.textRenderingOptimization = 'optimizeQuality';
      tempCtx.imageSmoothingEnabled = false;

      // Desenhar texto no canvas temporário
      const centerX = (width * resolution) / 2;
      const centerY = (height * resolution) / 2;
      tempCtx.fillText(text, centerX, centerY);

      // Extrair dados de pixel com sampling mais denso
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
      const data = imageData.data;
      const pixels: { x: number; y: number }[] = [];

      // Sampling mais denso para capturar mais detalhes do texto
      for (let y = 0; y < tempCanvas.height; y += 2) {
        for (let x = 0; x < tempCanvas.width; x += 2) {
          const index = (y * tempCanvas.width + x) * 4;
          const alpha = data[index + 3];
          
          if (alpha > 30) { // Threshold mais baixo para capturar mais pixels
            pixels.push({ 
              x: x / resolution, 
              y: y / resolution 
            });
          }
        }
      }

      console.log(`Texto: "${text}" - Pixels encontrados: ${pixels.length}`);

      // Criar mais partículas para melhor cobertura
      const newParticles: Particle[] = [];
      const maxParticles = Math.min(particleCount * 1.5, pixels.length);

      // Distribuir partículas de forma mais uniforme
      for (let i = 0; i < maxParticles; i++) {
        let pixel;
        
        if (pixels.length > 0) {
          // Usar distribuição mais uniforme em vez de totalmente aleatória
          const pixelIndex = Math.floor((i / maxParticles) * pixels.length);
          pixel = pixels[pixelIndex] || pixels[Math.floor(Math.random() * pixels.length)];
        }
        
        if (pixel) {
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: pixel.x,
            targetY: pixel.y,
            char: text[Math.floor(Math.random() * text.length)],
            opacity: 0,
            size: Math.random() * 1.5 + 1.5, // Partículas um pouco maiores
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

        // Velocidade adaptativa mais agressiva para convergência rápida
        const baseSpeed = animationSpeed * 2;
        const speed = baseSpeed * (1 + distance * 0.02);
        
        particle.x += dx * speed;
        particle.y += dy * speed;

        // Calcular opacidade com melhor transição
        if (distance < 50) {
          particle.opacity = Math.min(1, particle.opacity + 0.05);
        } else if (distance < 150) {
          particle.opacity = Math.min(0.8, particle.opacity + 0.02);
        } else {
          particle.opacity = Math.max(0, 0.6 - distance / 300);
        }

        // Desenhar partícula se visível
        if (particle.opacity > 0.01) {
          ctx.save();
          
          // Aplicar opacidade
          ctx.globalAlpha = particle.opacity;
          
          // Desenhar caracter com tamanho melhor
          ctx.fillStyle = particle.color;
          ctx.font = `bold ${particle.size * 8}px Arial, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Glow effect mais intenso quando próximo do alvo
          const glowIntensity = Math.max(0, 1 - distance / 100);
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 12 * glowIntensity;
          ctx.fillText(particle.char, particle.x, particle.y);
          
          // Layer adicional para texto mais sólido
          ctx.shadowBlur = 6 * glowIntensity;
          ctx.fillText(particle.char, particle.x, particle.y);
          
          // Terceiro layer sem glow para solidez
          ctx.shadowBlur = 0;
          ctx.globalAlpha = particle.opacity * 0.8;
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
