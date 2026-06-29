"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const isHoveredRef = useRef(false);
  const hoverSpinRef = useRef(0);

  useEffect(() => {
    // Detect touch device
    const touchCheck =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;
    
    if (touchCheck) {
      setTimeout(() => setIsTouchDevice(true), 0);
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let shadowX = 0;
    let shadowY = 0;
    let lastX = 0;
    let lastY = 0;
    let rotation = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".magnetic") ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea");

      const hoveredState = !!isInteractive;
      setIsHovered(hoveredState);
      isHoveredRef.current = hoveredState;
    };

    const animate = () => {
      // Fast tracking for inner cursor
      cursorX += (mouseX - cursorX) * 0.25;
      cursorY += (mouseY - cursorY) * 0.25;

      // Slower trailing for outer shadow cursor
      shadowX += (mouseX - shadowX) * 0.12;
      shadowY += (mouseY - shadowY) * 0.12;

      // Calculate movement delta
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      let targetRotation = 0;
      if (speed > 0.5) {
        // Map velocity to dynamic tilt angle (max 20 degrees)
        const tilt = Math.min(speed * 0.6, 20);
        // Tilt direction matches movement direction
        targetRotation = dx > 0 ? tilt : -tilt;
      }

      // Smoothly transition rotation
      rotation += (targetRotation - rotation) * 0.15;

      // If hovered, spin continuously
      let finalRotation = rotation;
      if (isHoveredRef.current) {
        hoverSpinRef.current = (hoverSpinRef.current + 4) % 360;
        finalRotation = hoverSpinRef.current;
      }

      // Update positions
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px) scale(${
          isHoveredRef.current ? 0 : 1
        })`;
      }
      if (shadowRef.current) {
        const scale = isHoveredRef.current ? 1.4 : 1;
        shadowRef.current.style.transform = `translate(${shadowX - 16}px, ${shadowY - 16}px) rotate(${finalRotation}deg) scale(${scale})`;
      }

      lastX = mouseX;
      lastY = mouseY;

      requestAnimationFrame(animate);
    };

    const animFrame = requestAnimationFrame(animate);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Shadow Cursor */}
      <div
        ref={shadowRef}
        className={`fixed top-0 left-0 z-[9997] pointer-events-none w-8 h-8 border-2 border-[var(--color-neo-black)] transition-colors duration-300 will-change-transform ${
          isHovered
            ? "bg-[var(--color-neo-brick)] shadow-[1px_1px_0px_0px_var(--color-neo-black)]"
            : "bg-[var(--color-neo-mustard)]/80 shadow-[3px_3px_0px_0px_var(--color-neo-black)]"
        }`}
      />

      {/* Inner Dot Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-2 h-2 bg-[var(--color-neo-black)] transition-transform duration-200 will-change-transform"
      />
    </>
  );
}
