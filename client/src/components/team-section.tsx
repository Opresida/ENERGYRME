
import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Github, Mail, Users, Award, Briefcase, GraduationCap, Globe, ChevronRight, Zap, Instagram } from 'lucide-react';

export function TeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      id: 1,
      name: "João Matos",
      role: "Diretor de Relações Institucionais",
      subtitle: "Co-Founder & Strategic Visionary",
      image: "https://i.imgur.com/uENhjVo.jpeg",
      bio: "Força intelectual por trás da visão da RME Energy. Trajetória dedicada à sustentabilidade desde a pesquisa científica na Embrapa até políticas públicas como Secretário Adjunto de Estado de Meio Ambiente do Amazonas.",
      expertise: ["Sustentabilidade", "Políticas Públicas", "Pesquisa Científica", "Relações Institucionais"],
      achievements: ["Ex-Embrapa Research", "Sec. Adjunto Amazonas", "20+ Anos Experiência", "Especialista em ESG"],
      social: {
        linkedin: "#",
        email: "joao@rmeenergy.com"
      },
      color: "from-emerald-400/20 to-cyan-400/20",
      borderColor: "border-emerald-400/30"
    },
    {
      id: 2,
      name: "César Limyah",
      role: "Chefe de Desenvolvimento e Tokenização",
      subtitle: "Dev Solidity & Blockchain Architect",
      image: "https://i.imgur.com/CbDk1tD.jpeg",
      bio: "Um líder em tecnologia, fintechs e inovação digital. Com mais de 10 anos de experiência em tecnologia, publicidade e negócios digitais, fundador da Vallion Holding, K2Pay e KaisarBank. Especialista em transformar ideias em produtos de alto impacto no ecossistema blockchain.",
      expertise: ["Blockchain & DeFi", "Desenvolvimento Solidity", "Sistemas Bancários", "Fintechs & Startups"],
      achievements: ["Founder KaisarBank", "CEO Valleycorn", "10+ Anos Tech", "Mentor Criptoeconomia"],
      social: {
        linkedin: "#",
        email: "cesar.limyah@rmenergytoken.com",
        instagram: "https://www.instagram.com/csar.limyah?igsh=MW83bjNrZTFuMXFlNQ=="
      },
      color: "from-blue-400/20 to-purple-400/20",
      borderColor: "border-blue-400/30"
    }
  ];

  const stats = [
    { value: "30+", label: "Anos Experiência", icon: <Award className="w-5 h-5" />, color: "text-emerald-400" },
    { value: "2", label: "Co-Founders", icon: <Users className="w-5 h-5" />, color: "text-cyan-400" },
    { value: "100%", label: "Dedicação", icon: <Zap className="w-5 h-5" />, color: "text-purple-400" },
    { value: "Global", label: "Visão", icon: <Globe className="w-5 h-5" />, color: "text-blue-400" }
  ];

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

    // Auto-rotate stats
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % stats.length);
    }, 2500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="equipe" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50"></div>
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
        {[...Array(15)].map((_, i) => (
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
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Title */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-full px-6 py-2 mb-4 border border-blue-500/30">
            <span className="text-blue-400 font-mono text-sm">LEADERSHIP TEAM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-emerald-200 bg-clip-text text-transparent">
            Visionary Leadership
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Liderança em <span className="text-blue-400">Negócios Internacionais</span> e <span className="text-emerald-400">Inovação Sustentável</span>
          </p>
        </div>

        {/* Team Stats Dashboard */}
        <div className="mb-16 fade-in">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              <h3 className="text-xl font-semibold text-white">Team Metrics</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer group ${
                    activeCard === index 
                      ? 'border-blue-400/50 bg-blue-400/10' 
                      : 'border-gray-700/50 bg-black/30 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className={`${stat.color} transition-transform group-hover:scale-110`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-mono font-bold ${stat.color} transition-all duration-300 ${
                      activeCard === index ? 'scale-110' : ''
                    }`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                  
                  {activeCard === index && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-emerald-400/20 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="max-w-7xl mx-auto fade-in space-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`relative bg-gradient-to-br ${member.color} rounded-2xl border ${member.borderColor} p-8 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] group`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Holographic Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 via-transparent to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
                {/* Profile Image with Tech Frame */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <div className="aspect-square bg-black/50 rounded-2xl border border-blue-400/30 overflow-hidden relative group-hover:border-emerald-400/50 transition-colors duration-500">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Tech Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Scanning Effect */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
                      <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="absolute -bottom-4 -right-4 flex space-x-2">
                      <a 
                        href={member.social.linkedin}
                        className="bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400/50 rounded-full p-3 transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5 text-blue-400" />
                      </a>
                      <a 
                        href={`mailto:${member.social.email}`}
                        className="bg-emerald-400/20 hover:bg-emerald-400/30 border border-emerald-400/50 rounded-full p-3 transition-all duration-300 hover:scale-110"
                      >
                        <Mail className="w-5 h-5 text-emerald-400" />
                      </a>
                      {member.social.instagram && (
                        <a 
                          href={member.social.instagram}
                          className="bg-purple-400/20 hover:bg-purple-400/30 border border-purple-400/50 rounded-full p-3 transition-all duration-300 hover:scale-110"
                        >
                          <Instagram className="w-5 h-5 text-purple-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-emerald-400 text-lg font-semibold mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm font-mono">
                      {member.subtitle}
                    </p>
                  </div>

                  {/* Bio */}
                  <div className="bg-black/40 rounded-xl border border-gray-700/50 p-6">
                    <p className="text-gray-300 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Expertise & Achievements */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Expertise */}
                    <div className="bg-black/40 rounded-xl border border-blue-400/30 p-6">
                      <div className="flex items-center mb-4">
                        <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">Expertise</h4>
                      </div>
                      <div className="space-y-2">
                        {member.expertise.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center text-sm">
                            <ChevronRight className="w-4 h-4 text-blue-400 mr-2" />
                            <span className="text-gray-300">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-black/40 rounded-xl border border-emerald-400/30 p-6">
                      <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-emerald-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">Conquistas</h4>
                      </div>
                      <div className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-center text-sm">
                            <ChevronRight className="w-4 h-4 text-emerald-400 mr-2" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {hoveredMember === index && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/10 to-emerald-400/10 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 fade-in">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 rounded-2xl border border-gray-700/50 p-8 backdrop-blur-sm text-center">
            <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full px-6 py-2 mb-6 border border-emerald-500/30">
              <span className="text-emerald-400 font-mono text-sm">NOSSA MISSÃO</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Revolucionando o Futuro Energético
            </h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Com uma combinação única de <span className="text-blue-400">experiência institucional</span>, 
              <span className="text-emerald-400"> inovação tecnológica</span> e 
              <span className="text-purple-400"> visão sustentável</span>, nossa equipe está preparada para 
              liderar a transformação energética global através da tecnologia blockchain e do Rotor Magnético Híbrido.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
