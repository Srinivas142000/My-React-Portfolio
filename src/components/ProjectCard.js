import { STATUS_LABELS } from "../data/projects";

const MAX_CHIPS = 4;

export const ProjectCard = ({ project, onOpen }) => {
  const { title, summary, image, status, tech } = project;
  const extra = tech.length - MAX_CHIPS;

  return (
    <button type="button" className="project-card" onClick={() => onOpen(project)}>
      <div className="project-card__media">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="project-card__body">
        <span className={`status status--${status}`}>{STATUS_LABELS[status]}</span>
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="chip-list">
          {tech.slice(0, MAX_CHIPS).map((t) => (
            <li className="chip" key={t}>{t}</li>
          ))}
          {extra > 0 && <li className="chip">+{extra}</li>}
        </ul>
      </div>
    </button>
  );
};
