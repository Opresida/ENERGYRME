import React, { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://i.imgur.com/6NMTxce.png')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow" data-testid="hero-title">
          RME: Construindo o Futuro da <span className="text-primary">Energia Limpa</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed" data-testid="hero-subtitle">
          Uma jornada estratégica que levará a RME da base sólida à liderança global em energia limpa, 
          combinando inovação tecnológica, transparência e crescimento sustentável.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://raydium.io/swap/?inputMint=sol&outputMint=HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all glow-green pulse-glow"
            data-testid="buy-rme-button"
          >
            Compre RME Agora
          </a>
          <button 
            onClick={() => scrollToSection('roadmap')}
            className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
            data-testid="view-roadmap-button"
          >
            Veja o Roadmap
          </button>
        </div>
      </div>
    </section>
  );
}
