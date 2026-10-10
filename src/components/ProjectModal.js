import { Modal } from "react-bootstrap";
import { BoxArrowUpRight, Github, X } from "react-bootstrap-icons";
import { ProjectVisual } from "./ProjectVisual";
import { STATUS_LABELS } from "../data/projects";

const LINK_LABELS = { github: "Source code", demo: "Live demo", paper: "Paper" };

export const ProjectModal = ({ project, onClose }) => (
  <Modal show={!!project} onHide={onClose} centered size="lg" className="project-modal">
    {project && (
      <>
        <div className="project-modal__media">
          <ProjectVisual type={project.visual} colors={project.colors} />
        </div>
        <button type="button" className="icon-button project-modal__close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>
        <Modal.Body>
          <span className={`status status--${project.status}`}>{STATUS_LABELS[project.status]}</span>
          <h3>{project.title}</h3>
          <p>{project.details}</p>
          <h4>Built with</h4>
          <ul className="chip-list">
            {project.tech.map((t) => (
              <li className="chip" key={t}>{t}</li>
            ))}
          </ul>
          {Object.keys(project.links || {}).length > 0 && (
            <div className="project-modal__links">
              {Object.entries(project.links).map(([kind, url]) => (
                <a key={kind} href={url} target="_blank" rel="noopener noreferrer" className="button button--ghost button--sm">
                  {kind === "github" ? <Github size={15} /> : <BoxArrowUpRight size={14} />}
                  {LINK_LABELS[kind] || kind}
                </a>
              ))}
            </div>
          )}
        </Modal.Body>
      </>
    )}
  </Modal>
);
