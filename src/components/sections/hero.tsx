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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { ScrollArea } from '../ui/scroll-area';

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
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

          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" variant="outline" className="font-bold text-lg border-2">
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px] bg-background/80 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-primary">Discover the Nuoto Difference</DialogTitle>
                  <DialogDescription className="pt-4 text-left text-base text-foreground/80">
                    Dive deeper into our mission, our process, and what makes us the right partner to bring your vision to life.
                  </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[60vh] w-full rounded-md p-4">
                  <div className="grid gap-6 py-4 text-left pr-4">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">Our Mission & Vision</h3>
                      <p className="text-foreground/80 mt-2">
                        We believe innovation should be accessible to everyone. Our mission is to bridge creativity and technology with seamless solutions that empower businesses to thrive in the digital age.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary">Detailed Services</h3>
                      <Accordion type="single" collapsible className="w-full mt-2">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>AI Solutions</AccordionTrigger>
                          <AccordionContent>
                            Harness the power of machine learning with custom AI models, predictive analytics, and automation that give you a competitive edge.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Web Development</AccordionTrigger>
                          <AccordionContent>
                            From sleek landing pages to complex web applications, we build fast, secure, and scalable sites that deliver exceptional user experiences.
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Creative Services</AccordionTrigger>
                          <AccordionContent>
                            Our design team crafts compelling brand identities, intuitive UI/UX, and stunning visuals that captivate your audience and tell your story.
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary">How It Works</h3>
                      <ol className="list-decimal list-inside mt-2 space-y-2 text-foreground/80">
                        <li><span className="font-semibold">Discover:</span> We start by understanding your vision, goals, and challenges.</li>
                        <li><span className="font-semibold">Design:</span> We create a strategic blueprint and visual design that aligns with your objectives.</li>
                        <li><span className="font-semibold">Develop:</span> Our team brings the vision to life with clean, efficient code and robust infrastructure.</li>
                        <li><span className="font-semibold">Deliver:</span> We launch, iterate, and support your project to ensure continued success.</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary">Why Choose Us?</h3>
                      <p className="text-foreground/80 mt-2">
                        We combine cutting-edge technology with creative excellence. Our agile process ensures speed and flexibility, while our client-centric approach guarantees a solution tailored perfectly to you.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-primary">Success Stories</h3>
                      <blockquote className="mt-2 border-l-2 border-primary pl-4 italic text-foreground/80">
                        "Nuoto transformed our online presence. Their AI-driven insights and stunning design doubled our engagement in just three months."
                        <cite className="block not-italic mt-2 font-semibold">- Alex Johnson, CEO of InnovateCorp</cite>
                      </blockquote>
                    </div>
                  </div>
                </ScrollArea>
              </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
