import { useEffect, useRef } from "react";
import { Briefcase, Mortarboard } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";
import { timeline } from "../data/profile";

export const Timeline = () => {
  const ref = useRef(null);

  // Fill the gradient line as the timeline scrolls past the middle of the screen
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.6 - rect.top) / rect.height;
      el.style.setProperty("--progress", Math.max(0, Math.min(1, progress)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol className="timeline" ref={ref}>
      {timeline.map((item) => (
        <Reveal as="li" className="timeline-item" key={`${item.org}-${item.date}`}>
          <span className="timeline-icon" aria-hidden="true">
            {item.type === "work" ? <Briefcase size={16} /> : <Mortarboard size={17} />}
          </span>
          <span className="timeline-date">{item.date}</span>
          <h3>{item.title}</h3>
          <div className="timeline-org">{item.org}</div>
          <p>{item.description}</p>
        </Reveal>
      ))}
    </ol>
  );
};
