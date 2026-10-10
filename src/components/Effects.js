import { useEffect, useRef } from "react";

// Soft colored glow that follows the mouse across the whole site (desktop only).
export const CursorGlow = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const node = ref.current;
    let frame = null;
    let x = 0;
    let y = 0;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frame === null) {
        frame = requestAnimationFrame(() => {
          node.style.transform = `translate(${x}px, ${y}px)`;
          node.style.opacity = "1";
          frame = null;
        });
      }
    };
    const onLeave = () => (node.style.opacity = "0");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
};

// Gradient bar along the top of the page showing how far you've scrolled.
export const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div ref={ref} className="scroll-progress" aria-hidden="true" />;
};

// Mouse handler that exposes the pointer position inside an element as
// --mx / --my CSS variables (used for spotlight borders and glare).
export const trackPointer = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
};
