import React, { useEffect, useRef, useState } from 'react';
import { Timeline, type TimelineItem } from '@/components/ui/timeline';
import { Briefcase, Award, MapPin, Calendar, GraduationCap, Zap, Shield, Cpu, Rocket, Globe } from 'lucide-react';

export function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate progress bar
            setTimeout(() => setProgressValue(20), 500);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const roadmapItems: TimelineItem[] = [
    {
      id: "fase-1",
      title: "Fase 1: Genesis Protocol",
      description: "Estabelecimento da infraestrutura blockchain e validação técnica",
      timestamp: "Q3 2025",
      status: "active",
      icon: <Rocket className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            <div className="relative z-10 flex items-center justify-between mb-3">
              <span className="text-emerald-400 font-mono text-xs tracking-wider">Whitepaper v1.0</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-xs">ACTIVE</span>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-white mb-2">Foundational Infrastructure</h4>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-black/30 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center mb-2">
                  <Shield className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 font-mono">Security</span>
                </div>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• Smart Contract Audit</li>
                  <li>• Multi-sig Governance</li>
                  <li>• Bug Bounty Program</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center mb-2">
                  <Cpu className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-purple-400 font-mono">Tech Stack</span>
                </div>
                <ul className="space-y-1 text-gray-300 text-xs">
                  <li>• Solana Protocol</li>
                  <li>• Rust Smart Contracts</li>
                  <li>• IPFS Documentation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-400 text-sm font-mono">Hash: HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump</span>
              <span className="text-emerald-400 text-xs">VERIFIED</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">Prototypes:</span>
                <p className="text-white font-mono">1KVA • 330KVA</p>
              </div>
              <div>
                <span className="text-gray-400">Efficiency:</span>
                <p className="text-emerald-400 font-mono">98.7%</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "fase-2",
      title: "Fase 2: Global Validation",
      description: "Apresentação internacional e proteção da propriedade intelectual",
      timestamp: "Q4 2025",
      status: "pending",
      icon: <Globe className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4 relative">
            <div className="absolute top-2 right-2">
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-mono">COP 30</span>
            </div>
            <h4 className="text-lg font-semibold text-white mb-3">International Showcase</h4>

            <div className="space-y-3">
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-400 font-mono text-sm">Patent Portfolio</span>
                  <span className="text-yellow-400 text-xs">EM PROCESSO</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-white font-mono font-bold">Em Processo</div>
                    <div className="text-gray-400">Patentes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-mono font-bold">Global</div>
                    <div className="text-gray-400">Países Alvo</div>
                  </div>
                  <div className="text-center">
                    <div className="text-white font-mono font-bold">Confidencial</div>
                    <div className="text-gray-400">IP Value</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-3 border border-purple-500/30">
                <div className="flex items-center mb-2">
                  <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-yellow-400 font-mono">Marco Principal</span>
                </div>
                <p className="text-gray-300 text-sm">Apresentação na COP 30 - Demonstração tecnológica global</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "fase-3",
      title: "Fase 3: Manufacturing Matrix",
      description: "Implementação da capacidade produtiva e automação avançada",
      timestamp: "Q1-Q2 2026",
      status: "pending",
      icon: <Cpu className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 border border-orange-500/20 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-white">Smart Factory</h4>
              <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs font-mono">MANAUS</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700/30">
                <div className="text-center mb-2">
                  <div className="text-lg font-mono text-orange-400 font-bold">10.000+</div>
                  <div className="text-white text-xs font-bold">Meta de Produção</div>
                  <div className="text-gray-200 text-xs font-semibold">Unidades/Ano</div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full w-0 animate-pulse"></div>
                </div>
              </div>

              <div className="bg-black/40 rounded-lg p-3 border border-gray-700/30">
                <div className="text-center mb-2">
                  <div className="text-lg font-mono text-emerald-400 font-bold">6.75M</div>
                  <div className="text-white text-xs font-bold">Potencial Staking</div>
                  <div className="text-gray-200 text-xs font-semibold">USD/Ano</div>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-emerald-400 text-xs font-mono">RECOMPENSA</span>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg p-3 border border-cyan-500/30">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-cyan-400 font-mono">IoT Integration</span>
              </div>
              <p className="text-gray-300 text-sm">Real-time production monitoring via blockchain oracles</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "fase-4",
      title: "Fase 4: Revenue Engine",
      description: "Ativação dos mecanismos de geração de valor e distribuição de rewards",
      timestamp: "Q3-Q4 2026",
      status: "pending",
      icon: <Zap className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-4">
            <h4 className="text-lg font-semibold text-white mb-3">Tokenomics Activation</h4>

            <div className="space-y-3">
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-400 font-mono">Alocação de Lucro</span>
                  <span className="text-yellow-400 text-xs">Q3 2026</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div>
                    <div className="text-white font-mono font-bold">30%</div>
                    <div className="text-gray-300 font-semibold">Staking</div>
                  </div>
                  <div>
                    <div className="text-white font-mono font-bold">10%</div>
                    <div className="text-gray-300 font-semibold">Burn</div>
                  </div>
                  <div>
                    <div className="text-white font-mono font-bold">60%</div>
                    <div className="text-gray-300 font-semibold">Reinvestimento</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gold-500/20 to-yellow-500/20 rounded-lg p-3 border border-yellow-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-mono text-sm">Deflationary Mechanism</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-1 animate-pulse"></div>
                    <span className="text-red-400 text-xs">BURNING</span>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-1">Automated quarterly token burns based on revenue</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "fase-5",
      title: "Fase 5: Ecosystem Expansion",
      description: "Governança descentralizada e expansão para novos mercados",
      timestamp: "2027+",
      status: "pending",
      icon: <GraduationCap className="h-3 w-3" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-4">
            <h4 className="text-lg font-semibold text-white mb-3">Decentralized Future</h4>

            <div className="grid grid-cols-1 gap-3">
              <div className="bg-black/40 rounded-lg p-3 border border-gray-700/30">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                  <span className="text-purple-400 font-mono">DAO Governance</span>
                </div>
                <p className="text-white text-sm font-medium">Community-driven decisions via on-chain voting</p>
              </div>

              <div className="bg-black/40 rounded-lg p-3 border border-gray-700/30">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
                  <span className="text-blue-400 font-mono">Mercados-Alvo</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-center mt-2">
                  <div className="text-blue-300 font-semibold">China • Índia</div>
                  <div className="text-green-300 font-semibold">EUA • Alemanha</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-lg p-3 border border-cyan-500/30">
                <div className="flex items-center mb-1">
                  <Rocket className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 font-mono">Space Tech R&D</span>
                </div>
                <p className="text-gray-300 text-xs">Zero-gravity energy systems for aerospace applications</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-4 border border-cyan-500/30">
            <span className="text-cyan-400 font-mono text-sm">DEVELOPMENT ROADMAP</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent" data-testid="roadmap-title">
            Protocol Timeline
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8" data-testid="roadmap-subtitle">
            Nossa jornada tecnológica rumo à descentralização energética global
          </p>

          {/* Progress Indicator */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm font-mono">Overall Progress</span>
              <span className="text-cyan-400 text-sm font-mono">{progressValue}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-2000 ease-out relative"
                style={{ width: `${progressValue}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Genesis</span>
              <span>Expansion</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto fade-in">
          <Timeline 
            items={roadmapItems}
            variant="spacious"
            showTimestamps={true}
            timestampPosition="inline"
            className="w-full"
            data-testid="roadmap-timeline"
          />
        </div>

        {/* Technical Metrics Panel */}
        <div className="mt-16 fade-in">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              System Metrics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="text-2xl font-mono text-cyan-400">98.7%</div>
                <div className="text-gray-400 text-sm">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-emerald-400">24/7</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-purple-400">70</div>
                <div className="text-gray-400 text-sm">Holders Atuais</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-orange-400">US$ 0</div>
                <div className="text-gray-400 text-sm">TVL</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-red-400">0</div>
                <div className="text-gray-400 text-sm">Tokens Queimados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-mono text-yellow-400">Dinâmico</div>
                <div className="text-gray-400 text-sm">Staking APY</div>
              </div>
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
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}