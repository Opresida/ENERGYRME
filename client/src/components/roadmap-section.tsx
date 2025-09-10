
import React, { useEffect, useRef } from 'react';
import { Timeline, type TimelineItem } from '@/components/ui/timeline';
import { Briefcase, Award, MapPin, Calendar, GraduationCap } from 'lucide-react';

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

  const roadmapItems: TimelineItem[] = [
    {
      id: "fase-1",
      title: "Fase 1: Fundação",
      description: "Estabelecimento da base técnica e estrutural do projeto",
      timestamp: "Q3 2025",
      status: "pending",
      icon: <Briefcase className="h-3 w-3" />,
      content: (
        <div className="space-y-3">
          <div className="rounded-lg bg-background border border-border p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Whitepaper v1.0
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Estrutura de Governança
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Auditoria de Segurança
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Protótipos 1KVA e 330KVA
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://i.imgur.com/j9c2xZJ.png" 
              alt="Fase 1 - Fundação"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "fase-2",
      title: "Fase 2: Validação Global",
      description: "Apresentação internacional e proteção intelectual",
      timestamp: "Q4 2025",
      status: "pending",
      icon: <Award className="h-3 w-3" />,
      content: (
        <div className="space-y-3">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-3">
            <span className="text-primary font-medium text-sm">
              🌟 Destaque: COP 30 em Belém
            </span>
          </div>
          <div className="rounded-lg bg-background border border-border p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Apresentação na COP 30
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Proteção de Patentes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Lançamento do dApp de Staking
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://i.imgur.com/VdI2Ynm.png" 
              alt="Fase 2 - Validação Global"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "fase-3",
      title: "Fase 3: Infraestrutura",
      description: "Desenvolvimento da capacidade produtiva",
      timestamp: "Q1-Q2 2026",
      status: "pending",
      icon: <MapPin className="h-3 w-3" />,
      content: (
        <div className="space-y-3">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-3">
            <span className="text-primary font-medium text-sm">
              🏭 Destaque: Construção em Manaus
            </span>
          </div>
          <div className="rounded-lg bg-background border border-border p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Início da linha de montagem
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Lançamento do Staking dApp
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Início das vendas comerciais
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-8 text-center">
            <div className="text-6xl mb-4">🏭</div>
            <h4 className="text-xl font-semibold text-primary mb-2">Infraestrutura de Produção</h4>
            <p className="text-muted-foreground">Linha de montagem em Manaus</p>
          </div>
        </div>
      ),
    },
    {
      id: "fase-4",
      title: "Fase 4: Geração de Valor",
      description: "Início da monetização e retorno aos investidores",
      timestamp: "Q3-Q4 2026",
      status: "pending",
      icon: <Calendar className="h-3 w-3" />,
      content: (
        <div className="space-y-3">
          <div className="rounded-lg bg-background border border-border p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Ativação da Partilha de Receitas
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Recompra/Queima de tokens
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Distribuição de dividendos
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://i.imgur.com/PcYe0tg.png" 
              alt="Fase 4 - Geração de Valor"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      id: "fase-5",
      title: "Fase 5: Ecossistema Futuro",
      description: "Expansão e inovação contínua",
      timestamp: "2027+",
      status: "pending",
      icon: <GraduationCap className="h-3 w-3" />,
      content: (
        <div className="space-y-3">
          <div className="rounded-lg bg-background border border-border p-4">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Governança da Comunidade
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                Expansão Internacional
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                P&D Aeroespacial
              </li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://i.imgur.com/HlJKjI7.png" 
              alt="Fase 5 - Ecossistema Futuro"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

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
        
        <div className="max-w-4xl mx-auto fade-in">
          <Timeline 
            items={roadmapItems}
            variant="spacious"
            showTimestamps={true}
            timestampPosition="inline"
            className="w-full"
            data-testid="roadmap-timeline"
          />
        </div>
      </div>
    </section>
  );
}
