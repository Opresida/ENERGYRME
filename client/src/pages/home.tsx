import React from 'react';
import { HeroSection } from '@/components/hero-section';
import { ParticleShowcaseSection } from "@/components/particle-showcase-section";
import { RoadmapSection } from '@/components/roadmap-section';
import { TechnologySection } from '@/components/technology-section';
import { TeamSection } from '@/components/team-section';
import { TransparencySection } from '@/components/transparency-section';
import { CommunitySection } from '@/components/community-section';
import { Footer } from '@/components/footer';
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <ParticleShowcaseSection />
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