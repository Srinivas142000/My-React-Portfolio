import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  siPython, siOpenjdk, siJavascript, siTypescript, siGo, siCplusplus, siC, siSwift, siKotlin,
  siReact, siAngular, siVuedotjs, siNodedotjs, siSpringboot, siPostgresql, siMongodb, siRedis,
  siApachespark, siDocker, siGithub, siJupyter, siTensorflow, siIos, siAndroid,
} from "simple-icons";
import { Reveal } from "./Reveal";
import { trackPointer } from "./Effects";
import { skillGroups } from "../data/profile";

// Brand logos from simple-icons; skills without one fall back to a text badge.
const ICONS = {
  Python: siPython,
  Java: siOpenjdk,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Go: siGo,
  "C++": siCplusplus,
  C: siC,
  Swift: siSwift,
  Kotlin: siKotlin,
  React: siReact,
  Angular: siAngular,
  Vue: siVuedotjs,
  "Node.js": siNodedotjs,
  "Spring Boot": siSpringboot,
  PostgreSQL: siPostgresql,
  MongoDB: siMongodb,
  Redis: siRedis,
  PySpark: siApachespark,
  Docker: siDocker,
  GitHub: siGithub,
  Jupyter: siJupyter,
  TensorFlow: siTensorflow,
  "iOS SDK": siIos,
  "Android SDK": siAndroid,
  "React Native": siReact,
};

const FALLBACK = {
  MATLAB: { label: "M", color: "#e16737" },
  AWS: { label: "AWS", color: "#ff9900" },
};

// Very dark brand colors (GitHub, iOS, Angular...) would vanish on the dark background
const readable = (hex) => {
  const n = parseInt(hex, 16);
  const lum = (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  return lum < 0.25 ? "#e6e6ea" : `#${hex}`;
};

const colorOf = (name) =>
  ICONS[name] ? readable(ICONS[name].hex) : FALLBACK[name]?.color || "#b45cf0";

const SkillIcon = ({ name, size = 24 }) => {
  const icon = ICONS[name];
  if (!icon) {
    const fb = FALLBACK[name] || { label: name[0] };
    return (
      <span className="skill-icon-text" style={{ color: colorOf(name), fontSize: size * 0.5 }}>
        {fb.label}
      </span>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d={icon.path} fill={colorOf(name)} />
    </svg>
  );
};

const groupOf = {};
skillGroups.forEach((g) => g.items.forEach((item) => (groupOf[item] = g.name)));
const allSkills = skillGroups.flatMap((g) => g.items);

// Three rings: size is % of the orbit, count is how many skills sit on it
const RINGS = [
  { size: 38, duration: 40, count: 6 },
  { size: 68, duration: 60, count: 10, reverse: true },
  { size: 98, duration: 85, count: Infinity },
];

// Interleave categories (1st of each group, then 2nd of each...) so every ring is mixed
const interleaved = [];
const longest = Math.max(...skillGroups.map((g) => g.items.length));
for (let i = 0; i < longest; i++) {
  skillGroups.forEach((g) => g.items[i] && interleaved.push(g.items[i]));
}
let cursor = 0;
const ringItems = RINGS.map((ring) => {
  const items = interleaved.slice(cursor, cursor + ring.count);
  cursor += items.length;
  return items;
});

const Orbit = ({ activeGroup, hovered, onHover }) => (
  <div className="orbit" onMouseLeave={() => onHover(null)}>
    <div className="orbit-core">
      <span>{"</>"}</span>
    </div>
    {RINGS.map((ring, r) => (
      <div
        key={r}
        className={`orbit-ring ${ring.reverse ? "orbit-ring--reverse" : ""}`}
        style={{ "--size": `${ring.size}%`, "--dur": `${ring.duration}s` }}
      >
        {ringItems[r].map((skill, i) => {
          const angle = (i / ringItems[r].length) * Math.PI * 2;
          const dimmed = activeGroup !== "All" && groupOf[skill] !== activeGroup;
          return (
            <div
              key={skill}
              className="orbit-slot"
              style={{ left: `${50 + 50 * Math.cos(angle)}%`, top: `${50 + 50 * Math.sin(angle)}%` }}
            >
              <div
                className={`orbit-item ${dimmed ? "is-dim" : ""} ${hovered === skill ? "is-hot" : ""}`}
                style={{ "--c": colorOf(skill) }}
                onMouseEnter={() => onHover(skill)}
                title={skill}
              >
                <SkillIcon name={skill} size={22} />
                <span className="orbit-label">{skill}</span>
              </div>
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(skillGroups[0].name);
  const [hovered, setHovered] = useState(null);
  const shown = activeGroup === "All" ? allSkills : skillGroups.find((g) => g.name === activeGroup).items;

  return (
    <section className="section section--alt skills-section" id="skills">
      <Container>
        <Reveal className="section-head">
          <span className="eyebrow">Skills</span>
          <h2>Tools I work with</h2>
          <p>Built up through industry work at Comcast, graduate coursework, and side projects.</p>
        </Reveal>

        <Row className="align-items-center g-5">
          <Col lg={6}>
            <Orbit activeGroup={activeGroup} hovered={hovered} onHover={setHovered} />
          </Col>
          <Col lg={6}>
            <div className="skill-tabs" role="tablist">
              {["All", ...skillGroups.map((g) => g.name)].map((name) => (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  aria-selected={activeGroup === name}
                  className={`chip ${activeGroup === name ? "is-active" : ""}`}
                  onClick={() => setActiveGroup(name)}
                >
                  {name}
                  <span className="skill-tabs__count">
                    {name === "All" ? allSkills.length : skillGroups.find((g) => g.name === name).items.length}
                  </span>
                </button>
              ))}
            </div>

            <ul className="skill-tiles" key={activeGroup}>
              {shown.map((skill, i) => (
                <li
                  key={skill}
                  className={`skill-tile spotlight ${hovered === skill ? "is-hot" : ""}`}
                  style={{ "--c": colorOf(skill), "--i": i }}
                  onMouseMove={trackPointer}
                  onMouseEnter={() => setHovered(skill)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="skill-tile__icon">
                    <SkillIcon name={skill} size={26} />
                  </span>
                  <span className="skill-tile__name">{skill}</span>
                  {activeGroup === "All" && <span className="skill-tile__group">{groupOf[skill]}</span>}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
