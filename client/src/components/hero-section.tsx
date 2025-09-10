import React from 'react';
import { Component as ArtificialHero } from '@/components/ui/artificial-hero';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/hooks/use-i18n';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section className="min-h-screen relative overflow-hidden">
      <ArtificialHero />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x leading-tight">
              {t.heroTitle}
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-200">
              {t.heroSubtitle}
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                {t.getStarted} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105">
                <Play className="mr-2 h-5 w-5" /> {t.learnMore}
              </Button>
            </div>
      </div>
    </section>
  );
}