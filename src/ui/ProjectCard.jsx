import PropTypes from "prop-types";
import { useInView } from "../custom/useInView.js";

export default function ProjectCard({ project }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <div className="col-md-6 col-lg-4 project-item" ref={ref}>
      <article className={`project-card ${inView ? "in-view" : ""}`}>
        <div className="position-relative">
          <div
            className="project-thumb"
            style={{ backgroundImage: `url(${project.image})` }}
            role="img"
            aria-label={project.title}
          />
          <div className="overlay">
            <div>
              <h5 className="mb-1">{project.title}</h5>
              <small>{project.subtitle}</small>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="mb-2 text-muted small">{project.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="small text-muted">{project.tag}</div>
            <div>
              <a
                className="btn btn-sm btn-outline-secondary"
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                className="btn btn-sm btn-outline-secondary"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};
