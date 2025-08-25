"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import TaglineGenerator from '../tagline-generator';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40 bg-grid-pattern">
      <div className="container mx-auto text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 animate-shine">
          nuoto
        </h1>
        <div className="mt-6 max-w-2xl mx-auto">
          <TaglineGenerator />
        </div>
        <div className="mt-10 flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="font-bold text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] bg-background/80 backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">Start Your Journey with Nuoto</DialogTitle>
                <DialogDescription className="pt-4 text-left text-base text-foreground/80">
                  At Nuoto, we make it simple to dive into the future. Whether you’re looking to harness the power of AI, build a high-impact digital presence, or craft standout creative assets, our team has you covered. Explore our tailored service packages designed to meet you where you are—scalable, efficient, and built for growth. Let’s turn your ideas into reality, starting today.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button size="lg" variant="outline" className="font-bold text-lg border-2">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
