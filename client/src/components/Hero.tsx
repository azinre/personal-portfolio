import React from 'react';
import CircularText from './CircularText';
import styles from './CircularText.module.css';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="text-center">
        <div className="mb-16">
          <CircularText 
            text="Oh my! Portfolio 2017" 
            radius={100}
            className={styles.circularText}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mt-8 mb-4">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors">
            View My Work
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-full transition-colors">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 