import { ProjectVisual } from "./ProjectVisual";
import { STATUS_LABELS } from "../data/projects";

const MAX_CHIPS = 4;
const MAX_TILT = 8; // degrees

// 3D tilt toward the cursor with a moving glare highlight
const onMove = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  const py = (e.clientY - rect.top) / rect.height;
  el.style.setProperty("--ry", `${(px - 0.5) * MAX_TILT * 2}deg`);
  el.style.setProperty("--rx", `${(0.5 - py) * MAX_TILT * 2}deg`);
  el.style.setProperty("--mx", `${px * 100}%`);
  el.style.setProperty("--my", `${py * 100}%`);
};

const onLeave = (e) => {
  e.currentTarget.style.setProperty("--rx", "0deg");
  e.currentTarget.style.setProperty("--ry", "0deg");
};

export const ProjectCard = ({ project, onOpen }) => {
  const { title, summary, visual, colors, status, tech } = project;
  const extra = tech.length - MAX_CHIPS;

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onOpen(project)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="project-card__media">
        <ProjectVisual type={visual} colors={colors} />
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
