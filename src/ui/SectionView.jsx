// Section.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useInView } from "../custom/useInView.js";
export default function SectionView({ id, children, setActive, className }) {
  const [ref, inView] = useInView({
    threshold: 0.4, // يظهر 40% من السكشن → اعتبره active
  });

  useEffect(() => {
    if (inView) {
      setActive(id);
    }
  }, [inView, id, setActive]);

  return (
    <section id={id} ref={ref} className={className ?? "py-5"}>
      {children}
    </section>
  );
}

SectionView.propTypes = {
  id: PropTypes.string,
  setActive: PropTypes.func,
  className: PropTypes.func,
  children: PropTypes.node,
};
