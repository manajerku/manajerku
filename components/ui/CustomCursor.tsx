"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let shadowX = 0;
    let shadowY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // cursor utama — agak lag
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // shadow — lebih lag dari cursor
      shadowX += (mouseX - shadowX) * 0.08;
      shadowY += (mouseY - shadowY) * 0.08;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 16}px, ${cursorY - 16}px)`;
      }
      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate(${shadowX - 16}px, ${shadowY - 16}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Shadow square — paling lambat */}
      <div
        ref={shadowRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none w-8 h-8 bg-[var(--color-primary)] opacity-40"
        style={{ willChange: "transform" }}
      />

      {/* Cursor square utama */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-8 h-8 bg-[var(--color-accent)] border-2 border-[var(--color-primary)]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
