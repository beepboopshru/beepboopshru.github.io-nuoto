"use client";

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Nuoto transformed our online presence. Their AI-driven insights and stunning design doubled our engagement in just three months.",
    author: "Alex Johnson, CEO of InnovateCorp",
  },
  {
    quote: "The web application they built for us is not only beautiful but also incredibly fast and scalable. A true testament to their expertise.",
    author: "Sarah Lee, CTO of TechSolutions",
  },
  {
    quote: "Working with Nuoto's creative team was a dream. They understood our brand immediately and delivered a stunning new identity.",
    author: "Michael Chen, Founder of Creative Co.",
  },
];

const TestimonialRotator: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsFading(false);
      }, 500); // match fade-out duration
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(intervalId);
  }, []);
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <blockquote 
      className={`mt-2 border-l-2 border-primary pl-4 italic text-foreground/80 transition-opacity duration-500 ${isFading ? 'animate-fade-out' : 'animate-fade-in'}`}
      key={currentIndex}
    >
      "{currentTestimonial.quote}"
      <cite className="block not-italic mt-2 font-semibold">- {currentTestimonial.author}</cite>
    </blockquote>
  );
};

export default TestimonialRotator;
