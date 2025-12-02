import profilePic from "../assets/profilePic.jpg";
import { useInView } from "../custom/useInView.js";
export default function Hero() {
  const [sectionRef, sectionInView] = useInView();
  return (
    <header
      id="hero"
      ref={sectionRef}
      className={`hero container-fluid fade-up ${
        sectionInView ? "in-view" : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-md-7">
            <h1>
              Hello, I{`'`}m <span className="text-primary">Abdullah</span>
            </h1>
            <p className="lead">
              Front-end Developer — blending code to build beautiful, usable
              digital experiences.
            </p>
            <div className="d-flex gap-2 align-items-center">
              <a
                className="btn btn-primary btn-lg"
                href="#portfolio"
                id="cta-work"
              >
                View My Work
              </a>
              <a className="btn btn-outline-primary btn-lg" href="#contact">
                Hire Me
              </a>
            </div>
            <div className="mt-4 text-muted small">
              Based in Cairo — available for freelance & remote work.
            </div>
          </div>

          <div className="col-md-5 text-center">
            <div className="d-inline-block p-3 about-card">
              <img
                src={profilePic}
                alt="Avatar"
                className="avatar"
                loading="lazy"
                width={400}
                height={300}
              />
              <div className="mt-3">
                <h5 className="mb-0">Jane Doe</h5>
                <small className="text-muted">Fullstack Developer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
