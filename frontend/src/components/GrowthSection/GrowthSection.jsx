import React, { useEffect, useRef, useState } from 'react';

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

const PILL_H = 46;
const PILL_PADDING_X = 32;
const AVG_CHAR_W = 9.5;
const getPillW = (label) => Math.ceil(label.length * AVG_CHAR_W) + PILL_PADDING_X * 2;

const WALL_T = 60;

export default function GrowthSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);

  const pillRefs = useRef([]);

  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const bodiesRef = useRef([]);
  const droppedRef = useRef(new Set());
  const physicsReadyRef = useRef(false);
  const matterRef = useRef(null);

  const [pillPositions, setPillPositions] = useState(
    services.map(() => ({ x: 0, y: -200, angle: 0, visible: false }))
  );

  useEffect(() => {
    if (window.Matter) { initPhysics(); return; }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js';
    script.onload = initPhysics;
    document.head.appendChild(script);
    return () => { script.onload = null; };
  }, []);

  function initPhysics() {
    const M = window.Matter;
    matterRef.current = M;

    const card = cardRef.current;
    if (!card) return;

    const W = card.offsetWidth;
    const H = card.offsetHeight;

    const engine = M.Engine.create({ gravity: { y: 2 } });
    engineRef.current = engine;

    const floor = M.Bodies.rectangle(W / 2, H + WALL_T / 2, W + 200, WALL_T, { isStatic: true, label: 'floor' });
    const wallL = M.Bodies.rectangle(-WALL_T / 2, H / 2, WALL_T, H * 2, { isStatic: true });
    const wallR = M.Bodies.rectangle(W + WALL_T / 2, H / 2, WALL_T, H * 2, { isStatic: true });

    M.Composite.add(engine.world, [floor, wallL, wallR]);

    const bodies = services.map((svc, i) => {
      const pw = getPillW(svc);
      const startX = 80 + ((i * 113) % (W - 160));
      const startY = -(100 + i * 60);
      const body = M.Bodies.rectangle(startX, startY, pw, PILL_H, {
        restitution: 0.35,
        friction: 0.6,
        frictionAir: 0.02,
        chamfer: { radius: PILL_H / 2 },
        label: `pill-${i}`,
        angle: ([-0.26, 0.17, -0.14, 0.38, -0.21, 0.09, -0.35, 0.26, -0.17][i])
      });
      return body;
    });
    bodiesRef.current = bodies;

    const runner = M.Runner.create();
    runnerRef.current = runner;

    physicsReadyRef.current = true;

    let raf;
    let lastTime = performance.now();
    function loop(now) {
      const delta = Math.min(now - lastTime, 50);
      lastTime = now;
      M.Runner.tick(runner, engine, delta);

      const positions = bodies.map((b, i) => ({
        x: b.position.x,
        y: b.position.y,
        angle: b.angle,
        visible: droppedRef.current.has(i)
      }));
      setPillPositions([...positions]);

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(raf);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!physicsReadyRef.current || !sectionRef.current || !matterRef.current) return;
      const M = matterRef.current;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = (vh - rect.top) / vh;
      if (progress <= 0) return;

      services.forEach((_, i) => {
        if (droppedRef.current.has(i)) return;
        const threshold = 0.08 + i * 0.08;
        if (progress >= threshold) {
          droppedRef.current.add(i);
          M.Composite.add(engineRef.current.world, bodiesRef.current[i]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '80px 40px 60px',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        ref={cardRef}
        style={{
          width: '100%',
          maxWidth: 1200,
          backgroundColor: '#fcfcfc',
          border: '1px solid #1a1a1a',
          borderRadius: 60,
          padding: '80px 0px 0px',
          textAlign: 'center',
          position: 'relative',
          minHeight: 450,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ marginBottom: 60, zIndex: 10, position: 'relative' }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 44,
              fontWeight: 500,
              lineHeight: 1.2,
              color: '#000000',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            WE MEET YOU AT KEY MOMENTS{' '}
            <br />
            <em style={{ color: '#422D28', textTransform: 'lowercase' }}>
              in your growth
            </em>
            <br />
            TO HELP DESIGN YOUR FUTURE.
          </h2>
        </div>

        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            overflow: 'hidden',
            borderRadius: 60,
          }}
        >
          {services.map((svc, i) => {
            const pw = getPillW(svc);
            const pos = pillPositions[i];
            return (
              <div
                key={i}
                ref={(el) => (pillRefs.current[i] = el)}
                style={{
                  position: 'absolute',
                  left: pos.x - pw / 2,
                  top: pos.y - PILL_H / 2,
                  width: pw,
                  height: PILL_H,
                  transform: `rotate(${pos.angle}rad)`,
                  opacity: pos.visible ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  border: '1px solid #1a1a1a',
                  borderRadius: 50,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 17,
                  fontWeight: 500,
                  color: '#1a1a1a',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 0 rgba(0,0,0,0.07)',
                  pointerEvents: 'auto',
                  cursor: 'default',
                  userSelect: 'none',
                  willChange: 'transform',
                }}
              >
                {svc}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}