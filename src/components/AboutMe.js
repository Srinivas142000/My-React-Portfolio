import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Award, Briefcase, Mortarboard, PatchCheck, Trophy } from "react-bootstrap-icons";
import { Reveal, useInView } from "./Reveal";
import { trackPointer } from "./Effects";
import { Timeline } from "./Timeline";
import { stats } from "../data/profile";

const STAT_ICONS = {
  briefcase: Briefcase,
  trophy: Trophy,
  award: Award,
  patch: PatchCheck,
  mortarboard: Mortarboard,
};

// Counts from 0 up to the number in `value` (keeping any suffix like "+") once visible
const CountUp = ({ value }) => {
  const target = parseInt(value, 10);
  const suffix = value.replace(String(target), "");
  const [ref, inView] = useInView(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    const duration = 1200;
    const start = performance.now();
    let frame;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <strong ref={ref}>{n}{suffix}</strong>;
};

export const AboutMe = () => (
  <main className="page">
    <Container>
      <div className="about-intro">
        <span className="eyebrow">About me</span>
        <h1>Engineer by trade, <span className="name-gradient">curious by default.</span></h1>
        <p>
          I'm a results-driven software engineer pursuing a Master's in Computer Science at
          Northeastern University. As a Development Engineer at Comcast, I developed algorithms
          for processing large-scale network data, managed critical data workflows, and helped
          automate customer transitions during database updates.
        </p>
        <p>
          My work spans Node.js, MongoDB, ARKit, and Unity, and I love building things that make
          operations smoother and experiences better. With a background in both software
          development and project management, I do my best work on collaborative teams solving
          hard problems.
        </p>
        <blockquote className="motto">
          “There’s a way to do it better – find it.”
          <cite>Thomas Edison · my motto</cite>
        </blockquote>
      </div>

      <Reveal className="stats">
        {stats.map(({ value, label, icon }) => {
          const Icon = STAT_ICONS[icon];
          return (
            <div className="stat spotlight" key={label} onMouseMove={trackPointer}>
              <Icon size={22} />
              <CountUp value={value} />
              <span>{label}</span>
            </div>
          );
        })}
      </Reveal>

      <div className="section-head section-head--left">
        <span className="eyebrow">Journey</span>
        <h2>Experience & education</h2>
      </div>
      <Timeline />
    </Container>
  </main>
);
