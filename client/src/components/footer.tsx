import React from 'react';

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">R</span>
          </div>
          <span className="text-xl font-bold text-primary" data-testid="footer-logo">
            RME Energy
          </span>
        </div>
        <p className="text-muted-foreground mb-4" data-testid="footer-tagline">
          Construindo o futuro da energia limpa com tecnologia blockchain
        </p>
        <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
          © 2024 RME Energy. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
