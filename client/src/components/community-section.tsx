import React, { useEffect, useRef } from 'react';
import { Twitter, Instagram } from 'lucide-react';

export function CommunitySection() {
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
    <section id="comunidade" className="py-20 bg-card" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow" data-testid="community-title">
            Junte-se à Revolução Energética
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center fade-in">
            <div>
              <img 
                src="https://i.imgur.com/FQVSCFA.png" 
                alt="Junte-se à Revolução Energética"
                className="rounded-xl shadow-2xl w-full"
                data-testid="community-image"
              />
            </div>
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-primary mb-4" data-testid="connect-title">
                  Conecte-se Conosco
                </h3>
                <p className="text-muted-foreground mb-6" data-testid="connect-description">
                  Faça parte da nossa comunidade e acompanhe todas as novidades do projeto RME Energy.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center bg-background border border-border rounded-lg p-4 hover:border-primary transition-all glow-green"
                  data-testid="twitter-link"
                >
                  <Twitter className="w-6 h-6 mr-3 text-primary" />
                  <span className="font-medium">Comunidade no X (Twitter)</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center justify-center bg-background border border-border rounded-lg p-4 hover:border-primary transition-all glow-green"
                  data-testid="instagram-link"
                >
                  <Instagram className="w-6 h-6 mr-3 text-primary" />
                  <span className="font-medium">Siga no Instagram</span>
                </a>
              </div>
              
              <div className="pt-4">
                <a 
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all glow-green pulse-glow"
                  data-testid="buy-rme-raydium-button"
                >
                  Compre RME na Raydium
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
