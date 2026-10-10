import { Container } from "react-bootstrap";
import { Reveal } from "./Reveal";
import { skillGroups } from "../data/profile";

export const Skills = () => (
  <section className="section section--alt" id="skills">
    <Container>
      <Reveal className="section-head">
        <span className="eyebrow">Skills</span>
        <h2>Tools I work with</h2>
        <p>Built up through industry work at Comcast, graduate coursework, and side projects.</p>
      </Reveal>
      <Reveal className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.name}>
            <h3>{group.name}</h3>
            <ul className="chip-list">
              {group.items.map((item) => (
                <li className="chip" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </Container>
  </section>
);
