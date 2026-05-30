import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // References to the DOM elements
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // Keeps track of the raw mouse positions
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // 1. Detect device eligibility for pointer precision
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    
    // Set initial state
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    // Track state of frame loop activation
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Update solid dot instantly using CSS transform3d
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // Smooth lerping of the ring trail via requestAnimationFrame
    const updateRing = () => {
      // Linear interpolation to catch up with the mouse coordinates smoothly
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateRing);
    };

    // Listen to hovering matching desired items
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && typeof target.closest === 'function') {
        const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
        if (isInteractive) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      }
    };

    // Handle initial rendering placement
    const handleInitialMove = (e: MouseEvent) => {
      // Warm up the initial ring matching position instantly first
      ringPos.current.x = e.clientX;
      ringPos.current.y = e.clientY;
      window.removeEventListener('mousemove', handleInitialMove);
    };

    // Register active event listeners
    window.addEventListener('mousemove', handleInitialMove);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    // Warm-up/Start our interpolation loop
    animationFrameId = requestAnimationFrame(updateRing);

    // Enable custom cursor body scope
    document.body.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', handleInitialMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* 1. Solid Dot — center-aligned with transform translates */}
      <div
        id="custom-dot"
        ref={dotRef}
        className="custom-cursor-dot"
      />

      {/* 2. Lagging Outlined Ring — handles smooth hover expansions via class toggling */}
      <div
        id="custom-ring"
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? 'custom-cursor-ring-hovered' : ''}`}
      />
    </>
  );
}
