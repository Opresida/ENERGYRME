import React, { useState } from 'react';
import { useWalletConnection } from './wallet-provider';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { connected, connecting, publicKey, handleConnect, formatAddress } = useWalletConnection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">R</span>
          </div>
          <span className="text-xl font-bold text-primary">RME Energy</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('roadmap')}
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-roadmap"
          >
            Roadmap
          </button>
          <button 
            onClick={() => scrollToSection('tecnologia')}
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-tecnologia"
          >
            Tecnologia
          </button>
          <button 
            onClick={() => scrollToSection('equipe')}
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-equipe"
          >
            Equipe
          </button>
          <button 
            onClick={() => scrollToSection('comunidade')}
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="nav-comunidade"
          >
            Comunidade
          </button>
        </div>
        
        {/* Connect Wallet Button */}
        <div className="hidden md:block">
          <Button 
            onClick={handleConnect}
            disabled={connecting}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all glow-green"
            data-testid="wallet-connect-button"
          >
            {connecting ? 'Conectando...' : connected ? (publicKey ? formatAddress(publicKey) : 'Desconectar') : 'Conectar Carteira'}
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
          data-testid="mobile-menu-button"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              data-testid="mobile-nav-roadmap"
            >
              Roadmap
            </button>
            <button 
              onClick={() => scrollToSection('tecnologia')}
              className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              data-testid="mobile-nav-tecnologia"
            >
              Tecnologia
            </button>
            <button 
              onClick={() => scrollToSection('equipe')}
              className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              data-testid="mobile-nav-equipe"
            >
              Equipe
            </button>
            <button 
              onClick={() => scrollToSection('comunidade')}
              className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
              data-testid="mobile-nav-comunidade"
            >
              Comunidade
            </button>
            <div className="pt-2">
              <Button 
                onClick={handleConnect}
                disabled={connecting}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all glow-green w-full"
                data-testid="mobile-wallet-connect-button"
              >
                {connecting ? 'Conectando...' : connected ? (publicKey ? formatAddress(publicKey) : 'Desconectar') : 'Conectar Carteira'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
