import React, { useEffect, useRef } from 'react';

export function TeamSection() {
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
    <section id="equipe" className="py-20 bg-card" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow" data-testid="team-title">
            Liderança em Negócios Internacionais e Inovação
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-xl p-8 glow-green fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img 
                  src="https://i.imgur.com/uENhjVo.jpeg" 
                  alt="João Matos - Diretor de Relações Institucionais"
                  className="rounded-xl w-full max-w-xs mx-auto shadow-2xl"
                  data-testid="team-member-photo"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-2" data-testid="team-member-name">
                  João Matos
                </h3>
                <p className="text-secondary text-lg mb-4" data-testid="team-member-position">
                  Diretor de Relações Institucionais & Co-Founder
                </p>
                <p className="text-muted-foreground leading-relaxed" data-testid="team-member-bio">
                  Com trajetória dedicada à sustentabilidade, João é a força intelectual por trás da visão da RME. 
                  Sua experiência abrange desde a pesquisa científica na Embrapa até a implementação de políticas 
                  públicas como Secretário Adjunto de Estado de Meio Ambiente do Amazonas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
