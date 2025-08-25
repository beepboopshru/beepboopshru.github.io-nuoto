import { Github, Linkedin, Twitter } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-transparent border-t border-border/40">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Nuoto Digital Showcase. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="#" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
