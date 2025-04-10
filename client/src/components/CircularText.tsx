import React from 'react';
import styles from './CircularText.module.css';

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({ 
  text, 
  radius = 70,
  className = ''
}) => {
  const characters = text.split('');
  const angleStep = (2 * Math.PI) / characters.length;

  return (
    <div 
      className={`${styles.circularContainer} ${className}`}
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {characters.map((char, index) => {
        const angle = angleStep * index;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const rotation = (angle * 180) / Math.PI;

        return (
          <span
            key={index}
            className={`${styles.circleLetter} ${char === ' ' ? styles.space : ''}`}
            style={{
              position: 'absolute',
              left: `${radius + x}px`,
              top: `${radius + y}px`,
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '0 0'
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText; 