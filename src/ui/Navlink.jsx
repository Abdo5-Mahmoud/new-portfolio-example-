// NavLink.jsx
import PropTypes from "prop-types";
export default function NavLink({ label, id, active, setActive }) {
  return (
    <a
      href={`#${id}`}
      className={
        "nav-link-custom position-relative d-inline-block " +
        (active === id ? "nav-link-active" : "nav-link-inactive")
      }
      aria-current={active === id ? "page" : undefined}
      onClick={() => setActive(id)}
    >
      {label}
      <span className="neon-underline" />
    </a>
  );
}

NavLink.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  active: PropTypes.string,
  setActive: PropTypes.func,
};
