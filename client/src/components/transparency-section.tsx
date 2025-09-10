
import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Shield, Eye, Lock, Database, Check, Copy, QrCode, Zap } from 'lucide-react';

export function TransparencySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const transparencyFeatures = [
    { 
      icon: <Shield className="w-6 h-6" />, 
      label: "Smart Contract", 
      value: "Verified", 
      color: "text-emerald-400",
      description: "Código auditado e verificado"
    },
    { 
      icon: <Eye className="w-6 h-6" />, 
      label: "Public Ledger", 
      value: "100%", 
      color: "text-blue-400",
      description: "Todas transações públicas"
    },
    { 
      icon: <Database className="w-6 h-6" />, 
      label: "On-Chain Data", 
      value: "Real-time", 
      color: "text-purple-400",
      description: "Dados atualizados em tempo real"
    },
    { 
      icon: <Lock className="w-6 h-6" />, 
      label: "Decentralized", 
      value: "Solana", 
      color: "text-cyan-400",
      description: "Totalmente descentralizado"
    }
  ];

  const contractAddress = "HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump";
  const transparencyWallet = "Cr5uiv9AiEb77EhHYRCZAJBDk2C56dEuR8D5hoeKqXDx";

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAddress(type);
      setTimeout(() => setCopiedAddress(null), 2000);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % transparencyFeatures.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="transparencia" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }}
        ></div>
        
        {/* Security Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Scanning Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Title */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-4 border border-emerald-500/30">
            <span className="text-emerald-400 font-mono text-sm">BLOCKCHAIN TRANSPARENCY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-blue-200 bg-clip-text text-transparent">
            Operação Transparência Total
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Transparência total através da <span className="text-emerald-400">blockchain Solana</span> - 
            Cada transação é <span className="text-blue-400">verificável e pública</span>
          </p>
        </div>

        {/* Transparency Features Dashboard */}
        <div className="mb-16 fade-in">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-xl font-semibold text-white">Security Metrics</h3>
              <div className="ml-auto flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">VERIFIED</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {transparencyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer group ${
                    activeFeature === index 
                      ? 'border-emerald-400/50 bg-emerald-400/10' 
                      : 'border-gray-700/50 bg-black/30 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className={`${feature.color} transition-transform group-hover:scale-110`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-mono font-bold ${feature.color} transition-all duration-300 ${
                      activeFeature === index ? 'scale-110' : ''
                    }`}>
                      {feature.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{feature.label}</div>
                    <div className="text-gray-500 text-xs mt-1">{feature.description}</div>
                  </div>
                  
                  {activeFeature === index && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 to-blue-400/20 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
            {/* Visual Display */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-black/60 rounded-2xl border border-emerald-400/30 p-8 backdrop-blur-sm group hover:border-emerald-400/50 transition-all duration-500">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Image with Tech Frame */}
                  <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-blue-900/20 rounded-xl border border-emerald-400/20 overflow-hidden relative mb-6 group-hover:border-emerald-400/40 transition-colors">
                    <img 
                      src="https://i.imgur.com/95eoYXl.png" 
                      alt="Operação Transparência Total"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-testid="transparency-image"
                    />
                    
                    {/* Tech Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Scanning Effect */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  {/* Status Indicators */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-black/40 rounded-lg p-3 border border-green-400/30 text-center">
                      <Check className="w-5 h-5 text-green-400 mx-auto mb-1" />
                      <div className="text-green-400 text-sm font-mono">VERIFIED</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 border border-blue-400/30 text-center">
                      <Eye className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                      <div className="text-blue-400 text-sm font-mono">PUBLIC</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3 border border-purple-400/30 text-center">
                      <Zap className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                      <div className="text-purple-400 text-sm font-mono">LIVE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Token & Wallet Info */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Token Card */}
              <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl border border-emerald-400/30 p-6 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-500 group">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src="https://i.imgur.com/rOXPza8.png" 
                      alt="RME Token Logo"
                      className="w-16 h-16 rounded-full border-2 border-emerald-400/50 group-hover:border-emerald-400 transition-colors"
                      data-testid="token-logo"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors" data-testid="token-name">
                      Token RME
                    </h3>
                    <p className="text-emerald-400 font-mono" data-testid="token-network">
                      Solana Network
                    </p>
                  </div>
                  <div className="ml-auto">
                    <QrCode className="w-8 h-8 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                {/* Contract Address */}
                <div className="bg-black/40 rounded-xl border border-emerald-400/20 p-4 mb-4">
                  <label className="text-emerald-400 text-sm font-semibold mb-2 block">Smart Contract Address:</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-mono text-sm break-all flex-1">
                      {contractAddress}
                    </span>
                    <button
                      onClick={() => copyToClipboard(contractAddress, 'contract')}
                      className="bg-emerald-400/20 hover:bg-emerald-400/30 border border-emerald-400/50 rounded-lg p-2 transition-all duration-300 hover:scale-110"
                    >
                      {copiedAddress === 'contract' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                    <a 
                      href={`https://solscan.io/token/${contractAddress}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/50 rounded-lg p-2 transition-all duration-300 hover:scale-110 group"
                      data-testid="token-contract-link"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-400" />
                    </a>
                  </div>
                </div>

                {/* Transparency Wallet */}
                <div className="bg-black/40 rounded-xl border border-blue-400/20 p-4">
                  <label className="text-blue-400 text-sm font-semibold mb-2 block">Carteira de Transparência:</label>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-mono text-sm break-all flex-1" data-testid="transparency-wallet">
                      {transparencyWallet}
                    </span>
                    <button
                      onClick={() => copyToClipboard(transparencyWallet, 'wallet')}
                      className="bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/50 rounded-lg p-2 transition-all duration-300 hover:scale-110"
                    >
                      {copiedAddress === 'wallet' ? (
                        <Check className="w-4 h-4 text-blue-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-blue-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 rounded-xl border border-gray-700/50 p-4 hover:border-emerald-400/30 transition-colors">
                  <Shield className="w-6 h-6 text-emerald-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">Auditoria Completa</h4>
                  <p className="text-gray-400 text-sm">Smart contract verificado e auditado</p>
                </div>
                
                <div className="bg-black/40 rounded-xl border border-gray-700/50 p-4 hover:border-blue-400/30 transition-colors">
                  <Database className="w-6 h-6 text-blue-400 mb-2" />
                  <h4 className="text-white font-semibold mb-1">Dados Públicos</h4>
                  <p className="text-gray-400 text-sm">Todas as transações são públicas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Statement */}
        <div className="mt-16 fade-in">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-sm text-center">
            <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-6 py-2 mb-6 border border-green-500/30">
              <span className="text-green-400 font-mono text-sm">100% TRANSPARENCY</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Transparência Blockchain Nativa
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Utilizando a <span className="text-blue-400">blockchain Solana</span>, cada transação do token RME é 
              <span className="text-emerald-400"> verificável publicamente</span>. Nossa carteira de transparência permite 
              <span className="text-purple-400"> acompanhamento em tempo real</span> de todos os fundos e operações do projeto.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(180deg); }
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
