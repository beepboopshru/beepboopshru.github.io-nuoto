"use client";

import { generateTaglines } from '@/ai/flows/generate-taglines';
import React, { useState, useEffect } from 'react';

const TaglineGenerator: React.FC = () => {
  const [taglines, setTaglines] = useState<string[]>([]);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    async function fetchTaglines() {
      try {
        const result = await generateTaglines({
          agencyName: 'nuoto',
          keywords: 'AI, Web Development, Creative, futuristic, modern',
          numberOfTaglines: 3,
        });
        if (result.taglines && result.taglines.length > 0) {
          setTaglines(result.taglines);
        } else {
          setTaglines(["Innovating the Future of Digital."]);
        }
      } catch (error) {
        console.error('Failed to generate taglines:', error);
        // Fallback taglines
        setTaglines([
          "Engineering Tomorrow's Web.",
          "Where Ideas Meet Intelligence.",
          "Creative Code, Intelligent Design.",
        ]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTaglines();
  }, []);

  useEffect(() => {
    if (taglines.length > 1) {
      const intervalId = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
          setIsFading(false);
        }, 500); // match fade-out duration
      }, 5000); // Change tagline every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [taglines]);

  if (isLoading) {
    return <div className="h-8 w-3/4 bg-muted/50 animate-pulse rounded-md" />;
  }
  
  return (
    <p 
      className={`text-xl md:text-2xl text-muted-foreground transition-opacity duration-500 ${isFading ? 'animate-fade-out' : 'animate-fade-in'}`}
      key={currentTaglineIndex}
    >
      {taglines[currentTaglineIndex]}
    </p>
  );
};

export default TaglineGenerator;
