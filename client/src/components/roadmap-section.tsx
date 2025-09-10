import React, { useEffect, useRef } from 'react';

interface RoadmapPhase {
  phase: string;
  title: string;
  period: string;
  highlight?: string;
  items: string[];
  image?: string;
  isReverse?: boolean;
}

const roadmapPhases: RoadmapPhase[] = [
  {
    phase: "Fase 1",
    title: "Fundação",
    period: "Q3 2025",
    items: [
      "Whitepaper v1.0",
      "Estrutura de Governança", 
      "Auditoria de Segurança",
      "Protótipos 1KVA e 330KVA"
    ],
    image: "https://i.imgur.com/j9c2xZJ.png"
  },
  {
    phase: "Fase 2",
    title: "Validação Global",
    period: "Q4 2025",
    highlight: "Destaque: COP 30 em Belém",
    items: [
      "Apresentação na COP 30",
      "Proteção de Patentes",
      "Lançamento do dApp de Staking"
    ],
    image: "https://i.imgur.com/VdI2Ynm.png",
    isReverse: true
  },
  {
    phase: "Fase 3",
    title: "Infraestrutura",
    period: "Q1-Q2 2026",
    highlight: "Destaque: Construção em Manaus",
    items: [
      "Início da linha de montagem",
      "Lançamento do Staking dApp",
      "Início das vendas comerciais"
    ]
  },
  {
    phase: "Fase 4", 
    title: "Geração de Valor",
    period: "Q3-Q4 2026",
    items: [
      "Ativação da Partilha de Receitas",
      "Recompra/Queima de tokens",
      "Distribuição de dividendos"
    ],
    image: "https://i.imgur.com/PcYe0tg.png",
    isReverse: true
  },
  {
    phase: "Fase 5",
    title: "Ecossistema Futuro", 
    period: "2027+",
    items: [
      "Governança da Comunidade",
      "Expansão Internacional",
      "P&D Aeroespacial"
    ],
    image: "https://i.imgur.com/HlJKjI7.png"
  }
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="roadmap" className="py-20 bg-card" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow" data-testid="roadmap-title">
            Roadmap
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="roadmap-subtitle">
            Nosso cronograma estratégico rumo ao futuro da energia limpa
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {roadmapPhases.map((phase, index) => (
            <div 
              key={index}
              className={`flex flex-col ${phase.isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-16 fade-in`}
              data-testid={`roadmap-phase-${index + 1}`}
            >
              <div className={`lg:w-1/2 mb-8 lg:mb-0 ${phase.isReverse ? 'lg:pl-8' : 'lg:pr-8'}`}>
                <div className="bg-background border border-border rounded-xl p-6 glow-green">
                  <div className="flex items-center mb-4">
                    <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                    <h3 className="text-2xl font-bold text-primary">
                      {phase.phase}: {phase.title}
                    </h3>
                    <span className="ml-auto text-muted-foreground">{phase.period}</span>
                  </div>
                  
                  {phase.highlight && (
                    <div className="mb-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {phase.highlight}
                      </span>
                    </div>
                  )}
                  
                  <ul className="space-y-2 text-muted-foreground">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                {phase.image ? (
                  <img 
                    src={phase.image} 
                    alt={`${phase.phase} - ${phase.title}`}
                    className="rounded-xl shadow-2xl w-full"
                    data-testid={`roadmap-image-${index + 1}`}
                  />
                ) : (
                  <div className="rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 text-center">
                    <div className="text-6xl mb-4">🏭</div>
                    <h4 className="text-xl font-semibold text-primary mb-2">Infraestrutura de Produção</h4>
                    <p className="text-muted-foreground">Linha de montagem em Manaus</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
