import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useInView } from "../custom/useInView.js";
import "../ui/About.css";
export default function About({ setActive }) {
  const [ref, inView] = useInView({ threshold: 0.25 });
  const progressRef = useRef([]);

  useEffect(() => {
    if (inView) {
      progressRef.current.forEach((el) => {
        if (!el) return;
        const value = el.getAttribute("data-value") || 0;
        el.style.width = `${value}%`;
        el.setAttribute("aria-valuenow", value);
      });
    }
  }, [inView]);

  const skills = [
    { name: "HTML", value: 95 },
    { name: "CSS / SASS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "React.js", value: 88 },
  ];

  return (
    <section id="about" ref={ref} className="about-section py-6">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6">
            <div className="about-card p-4 shadow-sm border-0">
              <h3>About Me</h3>
              <p className="text-muted">
                I{"'"}m a Frontend Developer who enjoys building clean,
                responsive, and user-friendly interfaces. I focus on writing
                maintainable code, improving performance, and creating smooth
                interactions that enhance the user experience.
              </p>

              <div className="skills-list mt-4">
                {skills.map((s, i) => (
                  <div className="mb-3" key={s.name}>
                    <div className="d-flex justify-content-between">
                      <span className="skill-label">{s.name}</span>
                      <span className="text-muted small">{s.value}%</span>
                    </div>
                    <div className="progress" style={{ height: 10 }}>
                      <div
                        ref={(el) => (progressRef.current[i] = el)}
                        className="progress-bar progress-animated"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        data-value={s.value}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <a
                  href="#portfolio"
                  className="btn btn-primary"
                  onClick={() => setActive("portfolio")}
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="about-visual text-center">
              <svg
                viewBox="0 0 720 360"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
                className="w-100"
              >
                <defs>
                  <linearGradient id="blob" x1="0" x2="1">
                    <stop offset="0" stopColor="#CDEFFF" />
                    <stop offset="1" stopColor="#E9FBEA" />
                  </linearGradient>
                </defs>

                {/* Organic Blob Shape */}
                <path
                  d="M120 40 C 40 100, 20 220, 140 270 C 260 320, 420 320, 540 260 C 660 200, 640 80, 540 40 C 440 0, 260 -20, 120 40 Z"
                  fill="url(#blob)"
                />

                {/* Minimal UI Card */}
                <rect
                  x="360"
                  y="80"
                  rx="14"
                  width="260"
                  height="140"
                  fill="#fff"
                  opacity="0.92"
                />
                <circle cx="450" cy="150" r="28" fill="#fff" />
                <g fill="#0b3b3b" opacity="0.5">
                  <rect x="380" y="100" rx="5" width="120" height="10" />
                  <rect x="380" y="120" rx="5" width="170" height="10" />
                </g>
              </svg>

              <p className="mt-3 text-muted small">
                I enjoy turning ideas into polished digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

About.propTypes = {
  setActive: PropTypes.func,
};
