
import React from 'react';
import { Zap, Twitter, Github, MessageCircle, Mail, Globe, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-emerald-400/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              {/* Enhanced Logo with Futuristic Design */}
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-400/50 group-hover:shadow-emerald-400/80 transition-all duration-500 transform group-hover:scale-110">
                  <Zap className="w-6 h-6 text-white animate-pulse" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-cyan-400/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
              </div>
              
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent" data-testid="footer-logo">
                  RME Energy
                </span>
                <div className="text-xs text-emerald-400/70 font-mono tracking-wider">
                  FUTURE • ENERGY • REVOLUTION
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md" data-testid="footer-tagline">
              Revolucionando o futuro da energia limpa através de tecnologia blockchain e inovação sustentável.
            </p>

            {/* Tech Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg p-4 border border-emerald-400/20 backdrop-blur-sm">
                <div className="text-emerald-400 text-xl font-bold">98.7%</div>
                <div className="text-gray-400 text-sm">Eficiência</div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-400/20 backdrop-blur-sm">
                <div className="text-cyan-400 text-xl font-bold">100+</div>
                <div className="text-gray-400 text-sm">Holders</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-emerald-400 font-semibold text-lg mb-4 flex items-center">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
              Navegação
            </h3>
            <ul className="space-y-3">
              {['Roadmap', 'Tecnologia', 'Equipe', 'Transparência', 'Comunidade'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors duration-300"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h3 className="text-cyan-400 font-semibold text-lg mb-4 flex items-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
              Conecte-se
            </h3>
            
            <div className="space-y-4 mb-6">
              {[
                { icon: Twitter, label: 'Twitter', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: MessageCircle, label: 'Discord', href: '#' },
                { icon: Mail, label: 'Email', href: 'mailto:contact@rmeenergy.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center text-gray-400 hover:text-cyan-400 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center mr-3 group-hover:bg-cyan-400/20 group-hover:scale-110 transition-all duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  {social.label}
                </a>
              ))}
            </div>

            {/* Powered by Solana Badge */}
            <div className="bg-gradient-to-r from-purple-500/10 to-green-500/10 rounded-lg p-3 border border-purple-400/20 backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-mono">Powered by Solana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with Animation */}
        <div className="relative mb-8">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400/20 rounded-full border border-emerald-400/50 animate-pulse"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <p className="text-sm text-gray-500 font-mono" data-testid="footer-copyright">
              © 2024 RME Energy. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-600">
              <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Whitepaper</a>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 rounded-lg px-4 py-2 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-sm text-emerald-400 font-mono">Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4 text-emerald-400 group-hover:animate-bounce" />
          </button>
        </div>

        {/* Floating Energy Particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent"></div>
    </footer>
  );
}
