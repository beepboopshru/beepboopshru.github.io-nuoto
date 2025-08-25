import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, CodeXml, Paintbrush } from 'lucide-react';

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'AI Solutions',
    description: 'We build intelligent systems that learn and adapt. From natural language processing to predictive analytics, we unlock the power of AI for your business.',
  },
  {
    icon: <CodeXml className="h-10 w-10 text-primary" />,
    title: 'Web Development',
    description: 'Crafting bespoke, high-performance websites and web applications. Our solutions are secure, scalable, and designed to deliver an exceptional user experience.',
  },
  {
    icon: <Paintbrush className="h-10 w-10 text-primary" />,
    title: 'Creative Services',
    description: 'From branding and identity to UI/UX design, our creative team delivers visually stunning and strategically sound designs that captivate your audience.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Expertise</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We blend technology and creativity to deliver solutions that drive growth and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border/60 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
