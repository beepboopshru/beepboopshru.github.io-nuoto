import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center space-x-4">
          <a href="#" className="font-bold text-2xl text-primary">
            nuoto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
