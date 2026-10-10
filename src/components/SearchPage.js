import { useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { projects, STATUS_LABELS } from "../data/projects";

const TOP_TECH_COUNT = 12;

// Most-used technologies across all projects, for the filter chips
const techCounts = {};
projects.forEach((p) => p.tech.forEach((t) => (techCounts[t] = (techCounts[t] || 0) + 1)));
const topTech = Object.keys(techCounts)
  .sort((a, b) => techCounts[b] - techCounts[a])
  .slice(0, TOP_TECH_COUNT);

export const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [tech, setTech] = useState(null);
  const [selected, setSelected] = useState(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));
      const matchesStatus = status === "all" || p.status === status;
      const matchesTech = !tech || p.tech.includes(tech);
      return matchesQuery && matchesStatus && matchesTech;
    });
  }, [query, status, tech]);

  return (
    <main className="page">
      <Container>
        <div className="section-head section-head--left">
          <span className="eyebrow">All projects</span>
          <h2>Everything I've worked on</h2>
          <p>Search by name or technology, or filter by status.</p>
        </div>

        <div className="projects-toolbar">
          <label className="search-field">
            <Search size={16} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, e.g. React, computer vision…"
              aria-label="Search projects"
            />
          </label>

          <div className="filter-row">
            <span className="filter-row__label">Status</span>
            {["all", ...Object.keys(STATUS_LABELS)].map((s) => (
              <button
                key={s}
                type="button"
                className={`chip ${status === s ? "is-active" : ""}`}
                onClick={() => setStatus(s)}
              >
                {s === "all" ? "All" : STATUS_LABELS[s]}
              </button>
            ))}
          </div>

          <div className="filter-row">
            <span className="filter-row__label">Tech</span>
            {topTech.map((t) => (
              <button
                key={t}
                type="button"
                className={`chip ${tech === t ? "is-active" : ""}`}
                onClick={() => setTech(tech === t ? null : t)}
              >
                {t}
              </button>
            ))}
          </div>

          <span className="result-count">
            {results.length} {results.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {results.length > 0 ? (
          <div className="project-grid">
            {results.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No projects match those filters.</p>
        )}
      </Container>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
};
