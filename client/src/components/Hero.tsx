import React from 'react';
import CircularText from './CircularText';
import styles from './CircularText.module.css';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-noir to-[#2A2A2A] text-ivory">
      <div className="text-center">
        <div className="mb-16">
          <CircularText 
            text="Oh my! Portfolio 2017" 
            radius={100}
            className={styles.circularText}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-4">
          Hi, I'm <span className="text-moss hover:text-sage transition-colors duration-300">Azin Rezaeian</span>
        </h1>
        <p className="text-xl md:text-2xl text-sage mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-sage hover:bg-moss text-noir hover:text-ivory px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="border-2 border-sage hover:bg-sage text-sage hover:text-noir px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 