import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-noir/90 backdrop-blur-sm z-50 border-b border-sage/10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-heading text-2xl font-bold text-ivory hover:text-sage transition-colors duration-300"
        >
          Azin Rezaeian
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-sage hover:text-moss transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-sage hover:text-moss transition-colors duration-300">About</Link>
          <Link to="/portfolio" className="text-sage hover:text-moss transition-colors duration-300">Portfolio</Link>
          <Link to="/blog" className="text-sage hover:text-moss transition-colors duration-300">Blog</Link>
          <Link to="/services" className="text-sage hover:text-moss transition-colors duration-300">Services</Link>
          <Link to="/contact" className="text-sage hover:text-moss transition-colors duration-300">Contact</Link>
          <Link to="/resume" className="text-sage hover:text-moss transition-colors duration-300">Resume</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;