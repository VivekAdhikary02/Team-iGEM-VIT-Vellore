
import { useState, useEffect, useRef } from 'react';
import './AmbergrisReveal.css';

interface AmbergrisRevealProps {
  onRevealComplete: () => void;
}

export function AmbergrisReveal({ onRevealComplete }: AmbergrisRevealProps) {
  const [showTrigger, setShowTrigger] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationStarted || !containerRef.current) return;

    // Import GSAP dynamically for better performance
    import('gsap').then(({ gsap }) => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            onRevealComplete();
          }, 1000);
        }
      });

      // Phase 1: Domino Setup and Initial Push
      tl.set('.domino', { 
        transformOrigin: 'bottom center',
        rotationZ: 0,
        opacity: 1
      })
      .set('.energy-wave', { scale: 0, opacity: 0 })
      .set('.spark', { scale: 0, opacity: 0 })
      .set('.reaction-container', { opacity: 0 })
      .set('.explosion-container', { opacity: 0 })
      .set('.reveal-chamber', { opacity: 0, scale: 0.5, rotationY: 90 });

      // Phase 2: The Epic Domino Chain Reaction
      const dominoes = containerRef.current.querySelectorAll('.domino');
      
      dominoes.forEach((domino, index) => {
        const delay = index * 0.15; // Perfectly timed cascade
        
        // Energy pulse before fall
        tl.to(`.energy-wave-${index}`, {
          duration: 0.3,
          scale: 3,
          opacity: 0.8,
          ease: "power2.out"
        }, delay)
        .to(`.energy-wave-${index}`, {
          duration: 0.2,
          scale: 5,
          opacity: 0,
          ease: "power2.out"
        }, delay + 0.1)
        
        // Domino fall with realistic physics
        .to(domino, {
          duration: 0.6,
          rotationZ: 85 + (index % 2 === 0 ? 5 : -5), // Slight variation
          ease: "power3.out"
        }, delay + 0.1)
        
        // Impact sparks
        .to(`.spark-${index}`, {
          duration: 0.2,
          scale: 2,
          opacity: 1,
          ease: "back.out(1.7)"
        }, delay + 0.3)
        .to(`.spark-${index}`, {
          duration: 0.3,
          scale: 0,
          opacity: 0,
          ease: "power2.in"
        }, delay + 0.5);
      });

      // Phase 3: Chemical Reaction Chain
      tl.to('.reaction-container', {
        duration: 0.8,
        opacity: 1,
        ease: "power2.out"
      }, 3.5)
      .to('.molecule', {
        duration: 2,
        rotation: 360,
        scale: 1.2,
        ease: "power1.inOut",
        stagger: 0.2
      }, 3.8)
      .to('.bond', {
        duration: 1.5,
        scaleX: 1.5,
        transformOrigin: "center",
        ease: "elastic.out(1, 0.3)",
        stagger: 0.1
      }, 4);

      // Phase 4: Explosive Transformation
      tl.to('.explosion-container', {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        ease: "back.out(1.7)"
      }, 5.5)
      .to('.explosion-particle', {
        duration: 2,
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        rotation: () => gsap.utils.random(0, 360),
        scale: () => gsap.utils.random(0.5, 2),
        opacity: 0,
        ease: "power2.out",
        stagger: 0.05
      }, 6);

      // Phase 5: Grand Reveal with 3D Chamber
      tl.to('.reveal-chamber', {
        duration: 1.5,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        ease: "power3.out"
      }, 7)
      .to('.project-title', {
        duration: 1,
        scale: 1.1,
        color: '#ffd700',
        textShadow: '0 0 30px rgba(255,215,0,0.8)',
        ease: "elastic.out(1, 0.3)"
      }, 8)
      .to('.project-subtitle', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "back.out(1.7)"
      }, 8.5)
      
      // Final fade out
      .to('.ambergris-reveal-container', {
        duration: 1,
        opacity: 0,
        ease: "power2.inOut"
      }, 11);

      return () => {
        tl.kill();
      };
    });
  }, [animationStarted, onRevealComplete]);

  const startReveal = () => {
    setShowTrigger(false);
    setAnimationStarted(true);
  };

  return (
    <div ref={containerRef} className="ambergris-reveal-container">
      {showTrigger && (
        <div className="trigger-section">
          <h1 className="reveal-title">Ready for the Ultimate Chain Reaction?</h1>
          <button className="reveal-trigger-btn" onClick={startReveal}>
            Trigger the Molecular Cascade
          </button>
        </div>
      )}
      
      {animationStarted && (
        <div className="animation-container">
          {/* Perfect Domino Chain */}
          <div className="domino-field">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="domino-group">
                <div className={`domino domino-${i + 1}`}>
                  <div className="domino-face"></div>
                  <div className="domino-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className={`energy-wave energy-wave-${i}`}></div>
                <div className={`spark spark-${i}`}></div>
              </div>
            ))}
          </div>

          {/* Chemical Reaction Visualization */}
          <div className="reaction-container">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`molecule-group molecule-group-${i + 1}`}>
                <div className="molecule">
                  <div className="atom atom-center"></div>
                  <div className="atom atom-outer-1"></div>
                  <div className="atom atom-outer-2"></div>
                  <div className="bond bond-1"></div>
                  <div className="bond bond-2"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Explosive Transformation */}
          <div className="explosion-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`explosion-particle particle-${i + 1}`}></div>
            ))}
          </div>

          {/* 3D Reveal Chamber */}
          <div className="reveal-chamber">
            <div className="chamber-inner">
              <div className="project-reveal">
                <h2 className="project-title">Synthesis of Ambergris</h2>
                <p className="project-subtitle">The Future of Sustainable Perfumery</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
