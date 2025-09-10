import React from 'react';
import { HeroSection } from '@/components/hero-section';
import { RoadmapSection } from '@/components/roadmap-section';
import { TechnologySection } from '@/components/technology-section';
import { TeamSection } from '@/components/team-section';
import { TransparencySection } from '@/components/transparency-section';
import { CommunitySection } from '@/components/community-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { LiveChat } from '@/components/ui/live-chat';

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <main>
        <HeroSection />
        <RoadmapSection />
        <TechnologySection />
        <TeamSection />
        <TransparencySection />
        <CommunitySection />
        <FAQSection />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}
