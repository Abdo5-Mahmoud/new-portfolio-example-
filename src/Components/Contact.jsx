import { useEffect } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          alert("Thanks! Your message has been sent.");
          form.reset();
        }
        form.classList.add("was-validated");
      });
    });
  }, []);

  return (
    <section id="contact" className="py-5 fade-in-view">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>Contact</h3>
            <p className="text-muted">
              Interested in working together or have a question? Send me a
              message — I usually reply within 1–2 business days.
            </p>

            <form id="contactForm" className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Your full name"
                  name="name"
                  id="name"
                  autoComplete="true"
                />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  autoComplete="true"
                />
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="form-control"
                  placeholder="Tell me about your project or question"
                ></textarea>
                <div className="invalid-feedback">Please enter a message.</div>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="col-lg-6">
            <div className="about-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h5>Find me online</h5>
                <p className="text-muted">
                  Connect via social or check out my code.
                </p>
                <div className="d-flex gap-3 mt-3">
                  <a href="mailto:abdofwzy9@gmail.com" className="contact-icon">
                    <FaEnvelope size={22} />
                  </a>

                  <a
                    href="https://github.com/Abdo5-Mahmoud"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon"
                  >
                    <FaGithub size={22} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abdo-fwzy/"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-icon"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
              </div>

              <div className="text-muted small">
                <strong>Email:</strong> abdofwzy9@gmail.com
                <br />
                <strong>Location:</strong> Cairo, Egypt
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
