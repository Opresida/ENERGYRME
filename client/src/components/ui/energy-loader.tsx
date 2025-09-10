
import React from 'react';

export function EnergyLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-black to-blue-950 opacity-80" />
        
        {/* Energy Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'grid-pulse 3s ease-in-out infinite'
            }}
          />
        </div>

        {/* Floating Energy Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Central Energy Core */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-32 h-32 border-2 border-emerald-500/30 rounded-full animate-spin-slow">
            <div className="absolute inset-2 border-2 border-blue-500/30 rounded-full animate-spin-reverse" />
            <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full animate-spin" />
          </div>
          
          {/* Energy Core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full animate-pulse-energy shadow-2xl shadow-emerald-400/50">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
            </div>
          </div>

          {/* Energy Bolts */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-gradient-to-t from-transparent via-emerald-400 to-transparent opacity-80"
                style={{
                  transform: `rotate(${i * 45}deg) translateY(-24px)`,
                  animation: `energy-pulse ${1.5 + (i * 0.2)}s ease-in-out infinite`
                }}
              />
            ))}
          </div>
        </div>

        {/* Logo Text */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-text-glow">
            RME ENERGY
          </h1>
          <p className="text-emerald-300/80 text-sm font-mono mt-2 tracking-wider">
            CLEAN ENERGY REVOLUTION
          </p>
        </div>

        {/* Loading Progress */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-loading-bar shadow-lg shadow-emerald-400/50" />
        </div>

        {/* Loading Text */}
        <p className="text-gray-400 text-xs font-mono mt-4 animate-pulse">
          Iniciando sistema de energia limpa...
        </p>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-energy {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.8);
          }
        }
        
        @keyframes energy-pulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.5); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
        
        @keyframes text-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.2) drop-shadow(0 0 10px rgba(16, 185, 129, 0.5)); }
        }
        
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        
        .animate-pulse-energy {
          animation: pulse-energy 2s ease-in-out infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        
        .animate-loading-bar {
          animation: loading-bar 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
}
