import React, { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Cpu, Target, Globe, TrendingUp, ChevronRight, Play } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export function TechnologySection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeMetric, setActiveMetric] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const metrics = [
    { value: "200%", label: "Eficiência Solar", icon: <Zap className="w-6 h-6" />, color: "text-yellow-400" },
    { value: "300%", label: "Alcance EV", icon: <Target className="w-6 h-6" />, color: "text-blue-400" },
    { value: "98.7%", label: "Uptime Sistema", icon: <Shield className="w-6 h-6" />, color: "text-emerald-400" },
    { value: "TRL 4-5", label: "Prontidão Tech", icon: <Cpu className="w-6 h-6" />, color: "text-purple-400" },
    { value: "24/7", label: "Operação", icon: <Globe className="w-6 h-6" />, color: "text-cyan-400" },
    { value: "100%", label: "Energia Limpa", icon: <TrendingUp className="w-6 h-6" />, color: "text-green-400" }
  ];

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

    // Auto-rotate metrics
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="tecnologia" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
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
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Energy Pulse Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Title with Holographic Effect */}
        <div className="text-center mb-20 fade-in">
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Rotor Magnético Híbrido
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 via-cyan-400/20 to-purple-400/20 blur-xl rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Tecnologia revolucionária que combina <span className="text-emerald-400 font-semibold">pulso eletromagnético</span>, 
            <span className="text-cyan-400 font-semibold"> repulsão magnética</span> e 
            <span className="text-purple-400 font-semibold"> inércia</span> para criar usinas híbridas de alta eficiência.
          </p>
        </div>

        {/* Interactive Metrics Dashboard */}
        <div className="mb-20 fade-in">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-2xl font-semibold text-white">Sistema de Métricas em Tempo Real</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer group ${
                    activeMetric === index 
                      ? 'border-emerald-400/50 bg-emerald-400/10' 
                      : 'border-gray-700/50 bg-black/30 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveMetric(index)}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className={`${metric.color} transition-transform group-hover:scale-110`}>
                      {metric.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-mono font-bold ${metric.color} transition-all duration-300 ${
                      activeMetric === index ? 'scale-110' : ''
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{metric.label}</div>
                  </div>

                  {activeMetric === index && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Technology Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 fade-in">
          {/* Interactive 3D Model Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900/50 to-black/80 rounded-2xl border border-emerald-400/30 p-8 backdrop-blur-sm">
              <div className="aspect-square bg-black/50 rounded-xl border border-gray-700/50 relative overflow-hidden group">
                <img 
                  src="https://i.imgur.com/cYJtIB6.png" 
                  alt="Rotor Magnético Híbrido - Visualização 3D"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Energy Flow Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 border-2 border-emerald-400/50 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-cyan-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Play Button for 3D Demo */}
                <div className="absolute bottom-4 right-4">
                  <button className="bg-emerald-400/20 hover:bg-emerald-400/30 border border-emerald-400/50 rounded-full p-3 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-emerald-400" />
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-semibold text-white mb-2">Visualização Interativa 3D</h4>
                <p className="text-gray-400 text-sm">Explore o rotor magnético em detalhes com nossa simulação interativa</p>
              </div>
            </div>
          </div>

          {/* Technical Specifications Cards */}
          <div className="space-y-6">
            {[
              {
                title: "Eficiência Revolucionária",
                description: "Pelo menos o dobro da eficiência para Usinas Solares",
                icon: <Zap className="w-8 h-8" />,
                color: "from-yellow-400/20 to-orange-400/20",
                borderColor: "border-yellow-400/30",
                metrics: ["200% vs Solar Convencional", "98.7% Uptime Garantido"]
              },
              {
                title: "Autonomia Expandida",
                description: "O triplo da autonomia para Veículos Elétricos",
                icon: <Target className="w-8 h-8" />,
                color: "from-blue-400/20 to-cyan-400/20",
                borderColor: "border-blue-400/30",
                metrics: ["300% Range Extension", "Charging Ultra-Rápido"]
              },
              {
                title: "Tecnologia Híbrida",
                description: "Inovação que combina múltiplas fontes de energia",
                icon: <Cpu className="w-8 h-8" />,
                color: "from-purple-400/20 to-pink-400/20",
                borderColor: "border-purple-400/30",
                metrics: ["TRL 4-5 Validado", "Patentes em Processo"]
              }
            ].map((card, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${card.color} rounded-xl border ${card.borderColor} p-6 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer group`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-yellow-400 transition-transform group-hover:scale-110 group-hover:rotate-12`}>
                    {card.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{card.description}</p>

                    <div className="space-y-2">
                      {card.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm">
                          <ChevronRight className="w-4 h-4 text-emerald-400 mr-2" />
                          <span className="text-gray-400">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {hoveredCard === index && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scientific Validation Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-sm fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Validação Científica</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Nossa tecnologia respeita rigorosamente as leis da física, utilizando energia solar como fonte primária
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-xl border border-emerald-400/30 p-6 text-center">
              <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Lei de Conservação</h4>
              <p className="text-gray-400 text-sm">Energia total do sistema sempre conservada</p>
            </div>

            <div className="bg-black/40 rounded-xl border border-cyan-400/30 p-6 text-center">
              <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">TRL 4-5</h4>
              <p className="text-gray-400 text-sm">Protótipo validado em ambiente laboratorial</p>
            </div>

            <div className="bg-black/40 rounded-xl border border-purple-400/30 p-6 text-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">Fonte Solar</h4>
              <p className="text-gray-400 text-sm">100% energia limpa e renovável</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
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