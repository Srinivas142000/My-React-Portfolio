import { Briefcase, Mortarboard } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";
import { timeline } from "../data/profile";

export const Timeline = () => (
  <ol className="timeline">
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
