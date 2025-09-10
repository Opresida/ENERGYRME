
import React, { useEffect, useRef, useState } from 'react';
import { Twitter, Instagram, Users, Zap, Globe, MessageCircle, Heart, Share2, TrendingUp } from 'lucide-react';

export function CommunitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeNetwork, setActiveNetwork] = useState(0);
  const [communityStats, setCommunityStats] = useState([
    { value: 5420, label: "Community Members", icon: <Users className="w-6 h-6" />, color: "text-blue-400" },
    { value: 2341, label: "Active Holders", icon: <Zap className="w-6 h-6" />, color: "text-emerald-400" },
    { value: 876, label: "Daily Interactions", icon: <MessageCircle className="w-6 h-6" />, color: "text-purple-400" },
    { value: 98.7, label: "Engagement Rate", icon: <TrendingUp className="w-6 h-6" />, color: "text-cyan-400", suffix: "%" }
  ]);

  const socialNetworks = [
    {
      name: "X (Twitter)",
      icon: <Twitter className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      members: "2.5K",
      activity: "Active",
      link: "#",
      gradient: "from-blue-400/20 to-cyan-400/20"
    },
    {
      name: "Instagram", 
      icon: <Instagram className="w-8 h-8" />,
      color: "from-pink-500/20 to-purple-500/20",
      borderColor: "border-pink-500/30",
      members: "1.8K", 
      activity: "Growing",
      link: "#",
      gradient: "from-pink-400/20 to-purple-400/20"
    },
    {
      name: "Telegram",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      members: "3.2K",
      activity: "24/7 Active",
      link: "#",
      gradient: "from-emerald-400/20 to-teal-400/20"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate community stats
            setTimeout(() => {
              setCommunityStats(prev => prev.map(stat => ({
                ...stat,
                animated: true
              })));
            }, 500);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in');
    elements?.forEach((el) => observer.observe(el));

    // Auto-rotate active network
    const interval = setInterval(() => {
      setActiveNetwork((prev) => (prev + 1) % socialNetworks.length);
    }, 4000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="comunidade" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-blue-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        ></div>
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}

        {/* Energy Pulse Lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400 to-transparent opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Title */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-2 mb-4 border border-blue-500/30">
            <span className="text-blue-400 font-mono text-sm">GLOBAL COMMUNITY</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Revolução Energética
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Junte-se à nossa <span className="text-blue-400">comunidade global</span> de inovadores em energia sustentável
          </p>
        </div>

        {/* Community Stats Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 fade-in">
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/60 rounded-2xl border border-gray-700/50 p-6 text-center backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className={`${stat.color} p-2 rounded-lg bg-black/40`}>
                  {stat.icon}
                </div>
              </div>
              <div className={`text-3xl font-mono font-bold mb-2 ${stat.color}`}>
                {typeof stat.value === 'number' ? (
                  <span>
                    {stat.value.toLocaleString()}{stat.suffix || ''}
                  </span>
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              
              {/* Animated Progress Bar */}
              <div className="mt-3 h-1 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${stat.color.includes('blue') ? 'from-blue-500 to-cyan-500' : 
                    stat.color.includes('emerald') ? 'from-emerald-500 to-teal-500' :
                    stat.color.includes('purple') ? 'from-purple-500 to-pink-500' : 'from-cyan-500 to-blue-500'} 
                    rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: '75%', animationDelay: `${index * 0.2}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center fade-in">
            {/* Interactive Social Networks */}
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Globe className="w-8 h-8 text-blue-400 mr-3" />
                  Conecte-se Conosco
                </h3>
                
                {socialNetworks.map((network, index) => (
                  <div
                    key={index}
                    className={`relative bg-black/60 rounded-2xl border ${network.borderColor} p-6 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-105 hover:border-opacity-100 group ${
                      activeNetwork === index ? 'border-opacity-100 shadow-2xl' : 'border-opacity-50'
                    }`}
                    onClick={() => setActiveNetwork(index)}
                  >
                    {/* Holographic Overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${network.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${network.color} border ${network.borderColor}`}>
                          {network.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{network.name}</h4>
                          <p className="text-gray-400">{network.members} membros</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          network.activity === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                          network.activity === 'Growing' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            network.activity === 'Active' ? 'bg-emerald-400' :
                            network.activity === 'Growing' ? 'bg-yellow-400' :
                            'bg-blue-400'
                          } animate-pulse`}></div>
                          {network.activity}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Elements */}
                    {activeNetwork === index && (
                      <div className="mt-4 pt-4 border-t border-gray-700/50">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex space-x-4 text-gray-400">
                            <span className="flex items-center"><Heart className="w-4 h-4 mr-1" /> 1.2K</span>
                            <span className="flex items-center"><Share2 className="w-4 h-4 mr-1" /> 856</span>
                          </div>
                          <a 
                            href={network.link}
                            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                          >
                            Participar <MessageCircle className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Display */}
            <div className="order-1 lg:order-2">
              <div className="relative bg-black/60 rounded-2xl border border-blue-400/30 p-8 backdrop-blur-sm group hover:border-blue-400/50 transition-all duration-500">
                {/* Holographic Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Image with Tech Frame */}
                  <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-400/20 overflow-hidden relative mb-6 group-hover:border-blue-400/40 transition-colors">
                    <img 
                      src="https://i.imgur.com/FQVSCFA.png" 
                      alt="Revolução Energética - Comunidade Global"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-testid="community-image"
                    />
                    
                    {/* Tech Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute top-4 right-4 bg-black/60 rounded-lg border border-blue-400/30 p-2 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 text-xs text-blue-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span>LIVE</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center">
                    <a 
                      href="https://raydium.io/swap/?inputMint=sol&outputMint=HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group shadow-2xl hover:shadow-blue-500/25"
                      data-testid="buy-rme-raydium-button"
                    >
                      <Zap className="w-6 h-6 mr-2 group-hover:animate-pulse" />
                      Compre RME na Raydium
                      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </a>
                    
                    {/* Tech Specs */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-black/40 rounded-xl border border-emerald-400/20 p-4 text-center">
                        <div className="text-emerald-400 font-mono text-lg font-bold">24/7</div>
                        <div className="text-gray-400 text-sm">Community Support</div>
                      </div>
                      <div className="bg-black/40 rounded-xl border border-blue-400/20 p-4 text-center">
                        <div className="text-blue-400 font-mono text-lg font-bold">Real-Time</div>
                        <div className="text-gray-400 text-sm">Updates & News</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
