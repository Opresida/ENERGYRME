import React from 'react';
import { HeroSection } from '@/components/hero-section';
import { RoadmapSection } from '@/components/roadmap-section';
import { TechnologySection } from '@/components/technology-section';
import { TeamSection } from '@/components/team-section';
import { TransparencySection } from '@/components/transparency-section';
import { CommunitySection } from '@/components/community-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <RoadmapSection />
        <TechnologySection />
        <TeamSection />
        <TransparencySection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
