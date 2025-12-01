import { useMemo, useState } from "react";
import projectsData from "../data/projectsData";
import ProjectCard from "../ui/ProjectCard.jsx";
import { useInView } from "../custom/useInView.js";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  // useInView for the whole section (fade-up when the section appears)
  const [sectionRef, sectionInView] = useInView({ threshold: 0.08 });

  const filtered = useMemo(
    () =>
      projectsData.filter((p) =>
        filter === "all" ? true : p.category === filter
      ),
    [filter]
  );

  return (
    <section
      id="portfolio"
      className={`py-5 fade-up ${sectionInView ? "in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="mb-0">Portfolio</h3>

          <div
            className="filter-btns btn-group"
            role="group"
            aria-label="category filters"
          >
            {["all", "web", "ui", "branding"].map((cat) => (
              <button
                key={cat}
                className={`btn btn-sm btn-outline-primary ${
                  filter === cat ? "active" : ""
                }`}
                onClick={() => setFilter(cat)}
                type="button"
              >
                {cat === "all"
                  ? "All"
                  : cat === "web"
                  ? "Web Design"
                  : cat === "ui"
                  ? "UI/UX"
                  : "Branding"}
              </button>
            ))}
          </div>
        </div>

        <div className="row g-4">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
          {filtered.length === 0 && (
            <div className="col-12 text-center text-muted py-4">
              No projects found.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
