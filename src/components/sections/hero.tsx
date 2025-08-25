import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600">
          nuoto
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          AI-powered solutions, modern web development, and creative services that drive innovation.
        </p>
        <div className="mt-10 flex gap-4">
          <Button size="lg" className="font-bold text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="font-bold text-lg border-2">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
