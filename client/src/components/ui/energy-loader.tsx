
import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

interface EnergyLoaderProps {
  isLoading: boolean;
  onComplete?: () => void;
}

export function EnergyLoader({ isLoading, onComplete }: EnergyLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState<'initializing' | 'loading' | 'complete'>('initializing');

  useEffect(() => {
    if (!isLoading) return;

    let progressInterval: NodeJS.Timeout;
    
    const startLoading = () => {
      setLoadingPhase('loading');
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setLoadingPhase('complete');
            setTimeout(() => {
              onComplete?.();
            }, 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
    };

    const initTimeout = setTimeout(startLoading, 800);

    return () => {
      clearTimeout(initTimeout);
      clearInterval(progressInterval);
    };
  }, [isLoading, onComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Energy Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Energy Pulses */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-400 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Section */}
        <div className="mb-8">
          {/* Rotating Energy Ring */}
          <div className="relative flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-emerald-400/30 animate-spin" style={{
              borderTopColor: '#10B981',
              animation: 'spin 2s linear infinite'
            }}></div>
            <div className="absolute w-16 h-16 rounded-full border-2 border-cyan-400/50 animate-spin" style={{
              borderRightColor: '#06B6D4',
              animation: 'spin 1.5s linear infinite reverse'
            }}></div>
            
            {/* Central Logo */}
            <div className="absolute flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-400/50 animate-pulse">
                <Zap className="w-6 h-6 text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
            RME ENERGY
          </h1>
          <p className="text-emerald-400/70 font-mono text-sm mt-2 tracking-wider">
            FUTURE • ENERGY • REVOLUTION
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-80 mx-auto">
          {/* Progress Bar */}
          <div className="relative h-2 bg-gray-800/50 rounded-full mb-4 overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-300 ease-out"
              style={{ 
                width: `${Math.min(progress, 100)}%`,
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
              }}
            >
              {/* Moving highlight */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400 font-mono">
              {loadingPhase === 'initializing' && 'Iniciando Sistema...'}
              {loadingPhase === 'loading' && 'Carregando Revolução Energética...'}
              {loadingPhase === 'complete' && 'Sistema Pronto!'}
            </span>
            <span className="text-emerald-400 font-mono font-bold">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* Loading Messages */}
        <div className="mt-6 text-gray-400 text-xs font-mono">
          {progress < 30 && "Inicializando Rotor Magnético..."}
          {progress >= 30 && progress < 60 && "Calibrando Sistema Híbrido..."}
          {progress >= 60 && progress < 90 && "Conectando à Blockchain Solana..."}
          {progress >= 90 && "Ativando Revolução Energética..."}
        </div>

        {/* Energy Indicators */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
            <span className="text-emerald-400 text-xs font-mono">98.7% EFFICIENCY</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-cyan-400 text-xs font-mono">SOLANA POWERED</span>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(0.8); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
