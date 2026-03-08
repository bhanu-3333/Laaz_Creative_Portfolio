import React, { useEffect, useState, useRef } from 'react';
import './GrowthSection.css';

const services = [
  "Motion Graphic",
  "Storyboard",
  "Visual Effect",
  "Web Design",
  "UI / UX",
  "Graphic Design",
  "Photography & Videography",
  "3D Modeling",
  "Digital Manipulation"
];

const GrowthSection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Progress 0 when section top is at viewport bottom (entering)
        // Progress 1 when section top is at viewport top (fully scrolled in)
        const currentProgress = (viewportHeight - rect.top) / viewportHeight;
        setProgress(Math.max(0, Math.min(2, currentProgress))); // Cap and allow some overshoot for fully 'settled' feel
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="growth-section-container" ref={sectionRef}>
      <div className="growth-card">
        <div className="growth-header">
          <h2 className="growth-heading">
            WE MEET YOU AT KEY MOMENTS <br />
            <span className="highlight">in your growth</span> <br />
            TO HELP DESIGN YOUR FUTURE.
          </h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            // Unique rotations for a scattered look
            const baseRotations = [-15, 10, -8, 22, -12, 5, -20, 15, -10];
            const baseRotation = baseRotations[index % baseRotations.length];

            // Varied "fall height" and "gravity" for each button
            // They will start high above the container's top edge
            const fallDistance = 600 + (index * 40);
            const speed = 1 + (index * 0.1); // Some fall faster

            // Calculate Y: starts negative (above), moves to 0 (its grid spot)
            // As progress goes from 0 to 1, this goes from -fallDistance to 0
            const translateY = Math.min(0, (progress * speed - 1) * fallDistance);

            // Dynamic rotation 'wobble' as they drop
            const wobble = Math.sin(progress * 10 + index) * 5 * (1 - progress);

            return (
              <div
                key={index}
                className="service-tag-wrapper"
                style={{
                  transform: `translateY(${translateY}px) rotate(${baseRotation + wobble}deg)`,
                  opacity: progress > 0.1 ? 1 : 0, // Fade in as they enter
                  transition: 'opacity 0.5s ease-out'
                }}
              >
                <div className="service-tag">
                  {service}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
