
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Tipos para as traduções
export interface Translations {
  // Header
  home: string;
  roadmap: string;
  technology: string;
  team: string;
  transparency: string;
  community: string;
  faq: string;
  connectWallet: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  getStarted: string;
  learnMore: string;
  
  // Technology Section
  technologyTitle: string;
  technologySubtitle: string;
  efficiency: string;
  solanaPowered: string;
  cop30Ready: string;
  greenFuture: string;
  
  // Roadmap Section
  roadmapTitle: string;
  roadmapSubtitle: string;
  phase1: string;
  phase2: string;
  phase3: string;
  phase4: string;
  
  // Team Section
  teamTitle: string;
  teamSubtitle: string;
  ceo: string;
  cto: string;
  blockchain: string;
  sustainability: string;
  
  // Transparency Section
  transparencyTitle: string;
  transparencySubtitle: string;
  smartContract: string;
  auditReport: string;
  tokenDistribution: string;
  financialReports: string;
  
  // Community Section
  communityTitle: string;
  communitySubtitle: string;
  discord: string;
  telegram: string;
  twitter: string;
  updates: string;
  
  // FAQ Section
  faqTitle: string;
  faqSubtitle: string;
  
  // Footer
  footerDescription: string;
  quickLinks: string;
  social: string;
  contact: string;
  allRightsReserved: string;
  
  // Live Data
  holders: string;
  price: string;
  volume: string;
  online: string;
  offline: string;
  
  // Common
  loading: string;
  error: string;
  comingSoon: string;
}

// Traduções em português
const ptTranslations: Translations = {
  // Header
  home: 'Início',
  roadmap: 'Roadmap',
  technology: 'Tecnologia',
  team: 'Equipe',
  transparency: 'Transparência',
  community: 'Comunidade',
  faq: 'FAQ',
  connectWallet: 'Conectar Carteira',
  
  // Hero Section
  heroTitle: 'RME ENERGY',
  heroSubtitle: 'Revolucionando a Energia Limpa',
  heroDescription: 'Rotor Magnético Híbrido: A próxima geração de energia sustentável alimentada pela blockchain Solana',
  getStarted: 'Começar',
  learnMore: 'Saiba Mais',
  
  // Technology Section
  technologyTitle: 'Tecnologia Revolucionária',
  technologySubtitle: 'Inovação em Energia Sustentável',
  efficiency: 'EFICIÊNCIA',
  solanaPowered: 'SOLANA POWERED',
  cop30Ready: 'COP 30 READY',
  greenFuture: 'FUTURO VERDE',
  
  // Roadmap Section
  roadmapTitle: 'Roadmap do Projeto',
  roadmapSubtitle: 'Nossa Jornada para o Futuro',
  phase1: 'Fase 1: Fundação',
  phase2: 'Fase 2: Desenvolvimento',
  phase3: 'Fase 3: Implementação',
  phase4: 'Fase 4: Expansão Global',
  
  // Team Section
  teamTitle: 'Nossa Equipe',
  teamSubtitle: 'Especialistas em Tecnologia e Sustentabilidade',
  ceo: 'CEO & Fundador',
  cto: 'CTO',
  blockchain: 'Especialista Blockchain',
  sustainability: 'Especialista em Sustentabilidade',
  
  // Transparency Section
  transparencyTitle: 'Transparência Total',
  transparencySubtitle: 'Construindo Confiança através da Transparência',
  smartContract: 'Smart Contract',
  auditReport: 'Relatório de Auditoria',
  tokenDistribution: 'Distribuição de Tokens',
  financialReports: 'Relatórios Financeiros',
  
  // Community Section
  communityTitle: 'Junte-se à Nossa Comunidade',
  communitySubtitle: 'Conecte-se com Milhares de Membros',
  discord: 'Discord',
  telegram: 'Telegram',
  twitter: 'Twitter',
  updates: 'Atualizações & Notícias',
  
  // FAQ Section
  faqTitle: 'Perguntas Frequentes',
  faqSubtitle: 'Tudo que você precisa saber sobre RME Energy',
  
  // Footer
  footerDescription: 'Revolucionando a energia limpa com tecnologia blockchain e sustentabilidade.',
  quickLinks: 'Links Rápidos',
  social: 'Redes Sociais',
  contact: 'Contato',
  allRightsReserved: 'Todos os direitos reservados.',
  
  // Live Data
  holders: 'DETENTORES',
  price: 'PREÇO',
  volume: 'VOLUME',
  online: 'Online',
  offline: 'Offline',
  
  // Common
  loading: 'Carregando...',
  error: 'Erro',
  comingSoon: 'Em Breve'
};

// Traduções em inglês
const enTranslations: Translations = {
  // Header
  home: 'Home',
  roadmap: 'Roadmap',
  technology: 'Technology',
  team: 'Team',
  transparency: 'Transparency',
  community: 'Community',
  faq: 'FAQ',
  connectWallet: 'Connect Wallet',
  
  // Hero Section
  heroTitle: 'RME ENERGY',
  heroSubtitle: 'Revolutionizing Clean Energy',
  heroDescription: 'Hybrid Magnetic Rotor: The next generation of sustainable energy powered by Solana blockchain',
  getStarted: 'Get Started',
  learnMore: 'Learn More',
  
  // Technology Section
  technologyTitle: 'Revolutionary Technology',
  technologySubtitle: 'Innovation in Sustainable Energy',
  efficiency: 'EFFICIENCY',
  solanaPowered: 'SOLANA POWERED',
  cop30Ready: 'COP 30 READY',
  greenFuture: 'GREEN FUTURE',
  
  // Roadmap Section
  roadmapTitle: 'Project Roadmap',
  roadmapSubtitle: 'Our Journey to the Future',
  phase1: 'Phase 1: Foundation',
  phase2: 'Phase 2: Development',
  phase3: 'Phase 3: Implementation',
  phase4: 'Phase 4: Global Expansion',
  
  // Team Section
  teamTitle: 'Our Team',
  teamSubtitle: 'Technology and Sustainability Experts',
  ceo: 'CEO & Founder',
  cto: 'CTO',
  blockchain: 'Blockchain Specialist',
  sustainability: 'Sustainability Expert',
  
  // Transparency Section
  transparencyTitle: 'Full Transparency',
  transparencySubtitle: 'Building Trust through Transparency',
  smartContract: 'Smart Contract',
  auditReport: 'Audit Report',
  tokenDistribution: 'Token Distribution',
  financialReports: 'Financial Reports',
  
  // Community Section
  communityTitle: 'Join Our Community',
  communitySubtitle: 'Connect with Thousands of Members',
  discord: 'Discord',
  telegram: 'Telegram',
  twitter: 'Twitter',
  updates: 'Updates & News',
  
  // FAQ Section
  faqTitle: 'Frequently Asked Questions',
  faqSubtitle: 'Everything you need to know about RME Energy',
  
  // Footer
  footerDescription: 'Revolutionizing clean energy with blockchain technology and sustainability.',
  quickLinks: 'Quick Links',
  social: 'Social Media',
  contact: 'Contact',
  allRightsReserved: 'All rights reserved.',
  
  // Live Data
  holders: 'HOLDERS',
  price: 'PRICE',
  volume: 'VOLUME',
  online: 'Online',
  offline: 'Offline',
  
  // Common
  loading: 'Loading...',
  error: 'Error',
  comingSoon: 'Coming Soon'
};

// Traduções em espanhol
const esTranslations: Translations = {
  // Header
  home: 'Inicio',
  roadmap: 'Hoja de Ruta',
  technology: 'Tecnología',
  team: 'Equipo',
  transparency: 'Transparencia',
  community: 'Comunidad',
  faq: 'FAQ',
  connectWallet: 'Conectar Billetera',
  
  // Hero Section
  heroTitle: 'RME ENERGY',
  heroSubtitle: 'Revolucionando la Energía Limpia',
  heroDescription: 'Rotor Magnético Híbrido: La próxima generación de energía sostenible impulsada por blockchain Solana',
  getStarted: 'Comenzar',
  learnMore: 'Saber Más',
  
  // Technology Section
  technologyTitle: 'Tecnología Revolucionaria',
  technologySubtitle: 'Innovación en Energía Sostenible',
  efficiency: 'EFICIENCIA',
  solanaPowered: 'SOLANA POWERED',
  cop30Ready: 'COP 30 READY',
  greenFuture: 'FUTURO VERDE',
  
  // Roadmap Section
  roadmapTitle: 'Hoja de Ruta del Proyecto',
  roadmapSubtitle: 'Nuestro Viaje hacia el Futuro',
  phase1: 'Fase 1: Fundación',
  phase2: 'Fase 2: Desarrollo',
  phase3: 'Fase 3: Implementación',
  phase4: 'Fase 4: Expansión Global',
  
  // Team Section
  teamTitle: 'Nuestro Equipo',
  teamSubtitle: 'Expertos en Tecnología y Sostenibilidad',
  ceo: 'CEO y Fundador',
  cto: 'CTO',
  blockchain: 'Especialista Blockchain',
  sustainability: 'Experto en Sostenibilidad',
  
  // Transparency Section
  transparencyTitle: 'Transparencia Total',
  transparencySubtitle: 'Construyendo Confianza a través de la Transparencia',
  smartContract: 'Contrato Inteligente',
  auditReport: 'Informe de Auditoría',
  tokenDistribution: 'Distribución de Tokens',
  financialReports: 'Informes Financieros',
  
  // Community Section
  communityTitle: 'Únete a Nuestra Comunidad',
  communitySubtitle: 'Conéctate con Miles de Miembros',
  discord: 'Discord',
  telegram: 'Telegram',
  twitter: 'Twitter',
  updates: 'Actualizaciones y Noticias',
  
  // FAQ Section
  faqTitle: 'Preguntas Frecuentes',
  faqSubtitle: 'Todo lo que necesitas saber sobre RME Energy',
  
  // Footer
  footerDescription: 'Revolucionando la energía limpia con tecnología blockchain y sostenibilidad.',
  quickLinks: 'Enlaces Rápidos',
  social: 'Redes Sociales',
  contact: 'Contacto',
  allRightsReserved: 'Todos los derechos reservados.',
  
  // Live Data
  holders: 'TENEDORES',
  price: 'PRECIO',
  volume: 'VOLUMEN',
  online: 'En Línea',
  offline: 'Fuera de Línea',
  
  // Common
  loading: 'Cargando...',
  error: 'Error',
  comingSoon: 'Próximamente'
};

// Mapeamento de idiomas
const translations = {
  pt: ptTranslations,
  en: enTranslations,
  es: esTranslations
};

export type Language = keyof typeof translations;

// Context do i18n
interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider do i18n
export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('rme-language');
    return (saved as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('rme-language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook para usar o i18n
export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

// Lista de idiomas disponíveis
export const availableLanguages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
] as const;
