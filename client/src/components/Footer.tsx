import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-noir/90 backdrop-blur-sm border-t border-sage/10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Name */}
          {/* <Link 
            to="/" 
            className="font-heading text-xl font-bold text-ivory hover:text-sage transition-colors duration-300 mb-4 md:mb-0"
          >
            Azin Rezaeian
          </Link> */}

          {/* Center - Navigation */}
          <nav className="flex gap-4 mb-4 md:mb-0">
            <Link to="/" className="text-sage hover:text-moss transition-colors duration-300">Home</Link>
            <Link to="/about" className="text-sage hover:text-moss transition-colors duration-300">About</Link>
            <Link to="/portfolio" className="text-sage hover:text-moss transition-colors duration-300">Portfolio</Link>
            <Link to="/contact" className="text-sage hover:text-moss transition-colors duration-300">Contact</Link>
          </nav>

          {/* Right side - Social Media Icons */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/azinre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sage hover:text-moss transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/azinre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sage hover:text-moss transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a 
              href="https://instagram.com/azinre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sage hover:text-moss transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/AzinRg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sage hover:text-moss transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sage/60 text-sm">
          © {new Date().getFullYear()} Azin Rezaeian. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 