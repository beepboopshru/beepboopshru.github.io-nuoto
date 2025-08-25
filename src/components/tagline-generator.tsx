"use client";

import React, { useState, useEffect } from 'react';

const STATIC_TAGLINES = [
  "Engineering Tomorrow's Web.",
  "Where Ideas Meet Intelligence.",
  "Creative Code, Intelligent Design.",
];

const TaglineGenerator: React.FC = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (STATIC_TAGLINES.length > 1) {
      const intervalId = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setCurrentTaglineIndex((prevIndex) => (prevIndex + 1) % STATIC_TAGLINES.length);
          setIsFading(false);
        }, 500); // match fade-out duration
      }, 5000); // Change tagline every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, []);
  
  return (
    <p 
      className={`text-xl md:text-2xl text-muted-foreground transition-opacity duration-500 ${isFading ? 'animate-fade-out' : 'animate-fade-in'}`}
      key={currentTaglineIndex}
    >
      {STATIC_TAGLINES[currentTaglineIndex]}
    </p>
  );
};

export default TaglineGenerator;
