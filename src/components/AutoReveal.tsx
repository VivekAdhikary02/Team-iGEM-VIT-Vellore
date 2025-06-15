
import React, { useEffect, useRef, useState } from 'react';
import './AutoReveal.css';

interface AutoRevealProps {
  onComplete: () => void;
}

export const AutoReveal: React.FC<AutoRevealProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out to complete
    }, 3000); // Show animation for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className={`auto-reveal-container ${!isVisible ? 'fade-out' : ''}`}
    >
      <div className="reveal-content">
        <div className="animated-elements">
          <div className="spiral-container">
            <div className="spiral-line"></div>
          </div>
          <div className="floating-particles">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="particle" style={{ animationDelay: `${i * 0.3}s` }}></div>
            ))}
          </div>
          <div className="central-logo">
            <h1 className="reveal-title">VIT iGEM 2024</h1>
            <div className="subtitle">Ambergris Synthesis</div>
          </div>
        </div>
      </div>
    </div>
  );
};
