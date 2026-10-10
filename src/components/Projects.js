import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowRight } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects } from "../data/projects";

const TABS = [
  { key: "featured", label: "Featured", filter: (p) => p.featured },
  { key: "in-progress", label: "In progress", filter: (p) => p.status === "in-progress" },
];

const planned = projects.filter((p) => p.status === "planned");

export const Projects = () => {
  const [tab, setTab] = useState(TABS[0].key);
  const [selected, setSelected] = useState(null);
  const visible = projects.filter(TABS.find((t) => t.key === tab).filter);

  return (
    <section className="section" id="projects">
      <Container>
        <Reveal className="section-head">
          <span className="eyebrow">Projects</span>
          <h2>Things I've built</h2>
          <p>From healthcare apps and mixed reality to computer vision research.</p>
        </Reveal>

        <div className="text-center">
          <div className="segmented" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={tab === t.key}
                className={tab === t.key ? "is-active" : ""}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </div>

        <div className="projects-footer">
          <Link to="/projects" className="button button--ghost">
            See all {projects.length} projects <ArrowRight size={16} />
          </Link>
          <p>
            Next on my list: {planned.map((p) => p.title).join(", ")}.{" "}
            <HashLink smooth to="/#connect" className="inline-link">Want to collaborate?</HashLink>
          </p>
        </div>
      </Container>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
