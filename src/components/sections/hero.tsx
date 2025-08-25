import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import TaglineGenerator from '../tagline-generator';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
      </div>
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-accent">
          nuoto
        </h1>
        <div className="mt-6 mb-10 max-w-3xl mx-auto h-16 flex items-center justify-center">
           <TaglineGenerator />
        </div>

        <Button size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg">
          Explore Our Work
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
