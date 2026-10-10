import { Container } from "react-bootstrap";
import { Award, Briefcase, Mortarboard, PatchCheck, Trophy } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";
import { Timeline } from "./Timeline";
import { stats } from "../data/profile";

const STAT_ICONS = {
  briefcase: Briefcase,
  trophy: Trophy,
  award: Award,
  patch: PatchCheck,
  mortarboard: Mortarboard,
};

export const AboutMe = () => (
  <main className="page">
    <Container>
      <div className="about-intro">
        <span className="eyebrow">About me</span>
        <h1>Engineer by trade, curious by default.</h1>
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
            <div className="stat" key={label}>
              <Icon size={22} />
              <strong>{value}</strong>
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
