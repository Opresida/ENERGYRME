
import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, HelpCircle, Zap, Shield, Globe, DollarSign } from 'lucide-react';

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      id: 1,
      question: "O que é o Rotor Magnético Híbrido da RME Energy?",
      answer: "O Rotor Magnético Híbrido é uma tecnologia revolucionária que combina campos magnéticos permanentes com eletromagnetismo para gerar energia limpa com 98.7% de eficiência. Esta inovação representa um avanço significativo na geração de energia sustentável.",
      icon: <Zap className="w-5 h-5" />,
      color: "from-emerald-400/20 to-cyan-400/20"
    },
    {
      id: 2,
      question: "Como o token $RME funciona na blockchain Solana?",
      answer: "O token $RME é implementado na blockchain Solana, aproveitando sua velocidade e baixas taxas. Holders do token têm acesso a benefícios exclusivos, participação em governança e compartilhamento dos lucros da empresa através de staking e recompensas.",
      icon: <Shield className="w-5 h-5" />,
      color: "from-blue-400/20 to-purple-400/20"
    },
    {
      id: 3,
      question: "Qual é o potencial de mercado da tecnologia RME?",
      answer: "Com o mercado global de energia renovável projetado para alcançar $1.9 trilhão até 2030, nossa tecnologia está posicionada para capturar uma parcela significativa, especialmente em mercados emergentes como China, Índia e América Latina.",
      icon: <Globe className="w-5 h-5" />,
      color: "from-purple-400/20 to-pink-400/20"
    },
    {
      id: 4,
      question: "Como posso investir no projeto RME Energy?",
      answer: "Você pode adquirir tokens $RME através de exchanges descentralizadas na Solana. O token está disponível no endereço HrSUCXgwQNVr4fhKbZxokLEdPskVJ2swwGXZkM4Hpump. Sempre verifique o endereço oficial antes de investir.",
      icon: <DollarSign className="w-5 h-5" />,
      color: "from-green-400/20 to-emerald-400/20"
    },
    {
      id: 5,
      question: "Quais são os marcos do roadmap para 2024-2025?",
      answer: "Nosso roadmap inclui: Q4 2024 - Conclusão do protótipo e testes; Q1 2025 - Início da produção piloto; Q2 2025 - Partnerships internacionais; Q3 2025 - Expansão para mercados asiáticos; Q4 2025 - IPO e scale global.",
      icon: <HelpCircle className="w-5 h-5" />,
      color: "from-cyan-400/20 to-blue-400/20"
    }
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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="py-20 bg-black relative overflow-hidden" ref={sectionRef}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-emerald-900/20"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'grid-move 25s linear infinite'
          }}
        ></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full px-6 py-2 mb-4 border border-emerald-500/30">
            <span className="text-emerald-400 font-mono text-sm">PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-cyan-200 bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Tire todas suas dúvidas sobre a <span className="text-emerald-400">tecnologia RME</span> e 
            o <span className="text-cyan-400">token $RME</span>
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4 fade-in">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`group bg-gradient-to-r ${faq.color} backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-emerald-400/50 cursor-hover`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div className={`transition-all duration-300 overflow-hidden ${
                openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
