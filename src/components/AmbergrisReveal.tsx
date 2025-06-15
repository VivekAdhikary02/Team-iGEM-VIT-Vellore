
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

    // Start the domino effect animation - faster
    timeouts.push(setTimeout(() => {
      const molecules = document.querySelectorAll('.molecule');
      if (molecules.length > 0) {
        molecules.forEach((molecule, index) => {
          timeouts.push(setTimeout(() => {
            molecule.classList.add('fall');
          }, index * 80)); // Reduced from 150ms to 80ms
        });
      }
    }, 300)); // Reduced from 500ms to 300ms

    // Start the perfume bottle spray effect - faster
    timeouts.push(setTimeout(() => {
      const spray = document.querySelector('.spray-effect');
      if (spray) {
        spray.classList.add('active');
      }
    }, 1200)); // Reduced from 2000ms to 1200ms

    // Reveal the main content - curtains open faster
    timeouts.push(setTimeout(() => {
      const curtain = document.querySelector('.reveal-curtain');
      if (curtain) {
        curtain.classList.add('open');
      }
    }, 2200)); // Curtains start opening at 2200ms

    // Start fade out AFTER project title is visible for a while
    timeouts.push(setTimeout(() => {
      setFadingOut(true);
      // Complete the reveal after fade out finishes
      setTimeout(() => {
        onRevealComplete();
      }, 1000); // 1 second fade out
    }, 6000)); // Allow 2.8 seconds for project title to be visible (3200ms curtain + 2800ms display time)

    // Cleanup function - only clear if component unmounts, not on re-renders
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [animationStarted]);

  const startReveal = () => {
    setShowTrigger(false);
    setAnimationStarted(true);
  };

  return (
    <div className={`ambergris-reveal-container ${fadingOut ? 'fade-out' : ''}`}>
      {showTrigger && (
        <div className="trigger-section">
          <h1 className="reveal-title">Are you ready for the reveal?</h1>
          <button className="reveal-trigger-btn" onClick={startReveal}>
            Begin the Journey
          </button>
        </div>
      )}
      
      {animationStarted && (
        <div className="animation-container">
          {/* Molecular domino effect */}
          <div className="molecules-container">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`molecule molecule-${i + 1}`}>
                <div className="molecule-core"></div>
                <div className="molecule-bonds"></div>
              </div>
            ))}
          </div>

          {/* Perfume bottle and spray */}
          <div className="perfume-bottle">
            <div className="bottle-body"></div>
            <div className="bottle-cap"></div>
            <div className="spray-nozzle"></div>
          </div>

          <div className="spray-effect">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`spray-particle particle-${i + 1}`}></div>
            ))}
          </div>

          {/* Ambergris formation animation */}
          <div className="ambergris-formation">
            <div className="whale-silhouette"></div>
            <div className="ambergris-chunks">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`chunk chunk-${i + 1}`}></div>
              ))}
            </div>
          </div>

          {/* Reveal curtain */}
          <div className="reveal-curtain">
            <div className="curtain-left"></div>
            <div className="curtain-right"></div>
          </div>

          {/* Project title reveal */}
          <div className="project-reveal">
            <h2 className="project-title">Synthesis of Ambergris</h2>
            <p className="project-subtitle">The Future of Sustainable Perfumery</p>
          </div>
        </div>
      )}
    </div>
  );
}
