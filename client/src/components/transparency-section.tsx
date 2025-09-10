import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export function TransparencySection() {
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
    <section className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow" data-testid="transparency-title">
            Operação Transparência Total
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center fade-in">
            <div>
              <img 
                src="https://i.imgur.com/95eoYXl.png" 
                alt="Operação Transparência Total"
                className="rounded-xl shadow-2xl w-full"
                data-testid="transparency-image"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6 glow-green">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://i.imgur.com/rOXPza8.png" 
                    alt="RME Token Logo"
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid="token-logo"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-primary" data-testid="token-name">
                      Token RME
                    </h3>
                    <p className="text-muted-foreground" data-testid="token-network">
                      Rede Solana
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Contrato do Token:</label>
                    <a 
                      href="https://solscan.io/token/HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors font-mono text-sm break-all group"
                      data-testid="token-contract-link"
                    >
                      <span className="mr-1">HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump</span>
                      <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                    </a>
                  </div>
                  
                  <div>
                    <label className="text-sm text-muted-foreground">Carteira de Transparência:</label>
                    <p className="text-primary font-mono text-sm break-all" data-testid="transparency-wallet">
                      Cr5uiv9AiEb77EhHYRCZAJBDk2C56dEuR8D5hoeKqXDx
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
