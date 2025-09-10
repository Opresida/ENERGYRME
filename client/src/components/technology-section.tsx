import React, { useEffect, useRef } from 'react';

export function TechnologySection() {
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
    <section id="tecnologia" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow" data-testid="technology-title">
            Nossa Tecnologia: O Rotor Magnético Híbrido
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto" data-testid="technology-subtitle">
            Uma inovação que combina pulso eletromagnético, repulsão magnética e inércia para criar usinas híbridas de alta eficiência.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 fade-in">
            <div>
              <img 
                src="https://i.imgur.com/cYJtIB6.png" 
                alt="Rotor Magnético Híbrido - Tecnologia Inovadora"
                className="rounded-xl shadow-2xl w-full glow-green"
                data-testid="technology-diagram"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-3" data-testid="competitive-advantages-title">
                  Vantagens Competitivas
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center" data-testid="advantage-solar">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Pelo menos o dobro da eficiência para Usinas Solares
                  </li>
                  <li className="flex items-center" data-testid="advantage-vehicles">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    O triplo da autonomia para Veículos Elétricos
                  </li>
                  <li className="flex items-center" data-testid="advantage-hybrid">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Tecnologia híbrida revolucionária
                  </li>
                </ul>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-secondary mb-3" data-testid="current-status-title">
                  Status Atual
                </h3>
                <p className="text-muted-foreground" data-testid="current-status-description">
                  TRL 4-5: Protótipo validado em ambiente laboratorial
                </p>
              </div>
              
              <div className="bg-accent/10 border border-accent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-accent mb-3" data-testid="important-note-title">
                  Importante
                </h3>
                <p className="text-muted-foreground" data-testid="important-note-description">
                  O sistema respeita a lei de conservação de energia. A fonte primária é a energia solar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
