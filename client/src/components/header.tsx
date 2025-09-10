import React, { useState } from 'react';
import { useWalletConnection } from './wallet-provider';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSelector } from '@/components/ui/language-selector';
import { useI18n } from '@/hooks/use-i18n';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { connected, connecting, publicKey, handleConnect, formatAddress } = useWalletConnection();
  const { t } = useI18n();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: t.roadmap, href: '#roadmap' },
    { name: t.technology, href: '#technology' },
    { name: t.team, href: '#team' },
    { name: t.community, href: '#community' }
  ];

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

        {/* Desktop Navigation & Connect Wallet Button */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid={`nav-${item.href.substring(1)}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Selector & Connect Wallet */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button
              onClick={handleConnect}
              disabled={connecting}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all glow-green"
              data-testid="wallet-connect-button"
            >
              {connecting ? 'Conectando...' : connected ? (publicKey ? formatAddress(publicKey) : 'Desconectar') : t.connectWallet}
            </Button>
          </div>
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
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="block text-muted-foreground hover:text-primary transition-colors w-full text-left"
                data-testid={`mobile-nav-${item.href.substring(1)}`}
              >
                {item.name}
              </button>
            ))}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
              <LanguageSelector />
              <Button
                onClick={handleConnect}
                disabled={connecting}
                className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all glow-green"
                data-testid="mobile-wallet-connect-button"
              >
                {connecting ? 'Conectando...' : connected ? (publicKey ? formatAddress(publicKey) : 'Desconectar') : t.connectWallet}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}