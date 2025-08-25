import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const portfolioItems = [
  {
    title: 'AI-Powered Analytics Dashboard',
    category: 'AI Solutions',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    hint: 'data visualization'
  },
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    hint: 'online shopping'
  },
  {
    title: 'Corporate Rebranding',
    category: 'Creative Services',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    hint: 'brand identity'
  },
  {
    title: 'Mobile App UI/UX',
    category: 'Creative Services',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    hint: 'mobile interface'
  },
  {
    title: 'SaaS Application',
    category: 'Web Development',
    imageUrl: 'https://picsum.photos/600/400?random=5',
    hint: 'software application'
  },
  {
    title: 'Predictive Maintenance AI',
    category: 'AI Solutions',
    imageUrl: 'https://picsum.photos/600/400?random=6',
    hint: 'industrial tech'
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-card/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the innovative solutions we've crafted for our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-card border-none">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                data-ai-hint={item.hint}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-base text-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
