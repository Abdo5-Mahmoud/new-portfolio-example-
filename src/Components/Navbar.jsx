import PropTypes from "prop-types";
import NavLink from "../ui/Navlink.jsx";
import { useEffect, useState } from "react";
const navbarData = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ active, setActive }) {
  const [open, setOpen] = useState(false);

  // لو فتحنا المينو نمنع scroll للـ body لو حابب backdrop effect
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggle = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container-fluid">
        <a
          className="navbar-brand fw-bold"
          href="#home"
          onClick={() => {
            setActive("home");
            closeMenu();
          }}
        >
          Abdullah
        </a>

        {/* Toggle Button using React state */}
        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="navMain"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse controlled by React state */}
        <div
          id="navMain"
          className={`collapse navbar-collapse ${
            open ? "show custom-show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto gap-3 align-items-center">
            {navbarData.map((li) => (
              <li className="nav-item" key={li.id}>
                <NavLink
                  label={li.label}
                  id={li.id}
                  active={active}
                  setActive={(id) => {
                    setActive(id);
                    // اغلاق القائمة لو احنا في موبايل
                    closeMenu();
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* optional backdrop for mobile when open */}
      <div
        className={`mobile-backdrop ${open ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.string,
  setActive: PropTypes.func.isRequired,
};
