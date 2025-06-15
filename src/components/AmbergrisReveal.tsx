
import { useState, useEffect } from 'react';
import './AmbergrisReveal.css';

interface AmbergrisRevealProps {
  onRevealComplete: () => void;
}

export function AmbergrisReveal({ onRevealComplete }: AmbergrisRevealProps) {
  const [showTrigger, setShowTrigger] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!animationStarted) return;

    const timeouts: NodeJS.Timeout[] = [];

    // Start the EPIC domino chain reaction
    timeouts.push(setTimeout(() => {
      const dominoes = document.querySelectorAll('.domino');
      
      dominoes.forEach((domino, index) => {
        timeouts.push(setTimeout(() => {
          // Add energy wave effect
          const energyWave = document.createElement('div');
          energyWave.className = 'energy-wave active';
          energyWave.style.left = `${domino.getBoundingClientRect().left + 40}px`;
          energyWave.style.top = `${domino.getBoundingClientRect().top + 60}px`;
          document.body.appendChild(energyWave);
          
          // Make domino fall
          domino.classList.add('fall');
          
          // Remove energy wave after animation
          setTimeout(() => {
            if (document.body.contains(energyWave)) {
              document.body.removeChild(energyWave);
            }
          }, 600);
          
        }, index * 120); // Faster chain reaction
      });
    }, 500));

    // Start molecular reactions after dominoes
    timeouts.push(setTimeout(() => {
      const molecules = document.querySelectorAll('.molecule-structure');
      molecules.forEach((molecule, index) => {
        timeouts.push(setTimeout(() => {
          (molecule as HTMLElement).style.opacity = '1';
          (molecule as HTMLElement).style.animation = `moleculeFloat 2s ease-in-out infinite ${index * 0.5}s`;
        }, index * 200));
      });
    }, 3000));

    // Trigger explosion effect
    timeouts.push(setTimeout(() => {
      const explosion = document.querySelector('.explosion-container');
      if (explosion) {
        explosion.classList.add('active');
      }
    }, 4500));

    // Reveal the 3D chamber
    timeouts.push(setTimeout(() => {
      const chamber = document.querySelector('.reveal-chamber');
      if (chamber) {
        chamber.classList.add('active');
      }
    }, 6000));

    // Final title reveal
    timeouts.push(setTimeout(() => {
      const projectReveal = document.querySelector('.project-reveal');
      if (projectReveal) {
        projectReveal.classList.add('active');
      }
    }, 7000));

    // Start fade out after everything is done
    timeouts.push(setTimeout(() => {
      setFadingOut(true);
      setTimeout(() => {
        onRevealComplete();
      }, 1000);
    }, 10000));

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [animationStarted, onRevealComplete]);

  const startReveal = () => {
    setShowTrigger(false);
    setAnimationStarted(true);
  };

  return (
    <div className={`ambergris-reveal-container ${fadingOut ? 'fade-out' : ''}`}>
      {showTrigger && (
        <div className="trigger-section">
          <h1 className="reveal-title">Ready for the Ultimate Chain Reaction?</h1>
          <button className="reveal-trigger-btn" onClick={startReveal}>
            Trigger the Domino Effect
          </button>
        </div>
      )}
      
      {animationStarted && (
        <div className="animation-container">
          {/* Epic Domino Chain */}
          <div className="domino-chain">
            {[...Array(18)].map((_, i) => (
              <div key={i} className={`domino domino-${i + 1}`}></div>
            ))}
          </div>

          {/* Chemical Reaction Molecules */}
          <div className="reaction-container">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`molecule-structure molecule-${i + 1}`}>
                <div className="atom" style={{top: '0px', left: '0px'}}></div>
                <div className="atom" style={{top: '20px', left: '40px'}}></div>
                <div className="bond" style={{top: '10px', left: '15px', transform: 'rotate(45deg)'}}></div>
              </div>
            ))}
          </div>

          {/* Explosion Effect */}
          <div className="explosion-container">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`explosion-particle particle-${i + 1}`}></div>
            ))}
          </div>

          {/* 3D Reveal Chamber */}
          <div className="reveal-chamber">
            <div className="project-reveal">
              <h2 className="project-title">Synthesis of Ambergris</h2>
              <p className="project-subtitle">The Future of Sustainable Perfumery</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
