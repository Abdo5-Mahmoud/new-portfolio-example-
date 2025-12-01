import { useEffect, useState, useRef } from "react";

export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // Fallback: treat as visible on mount if no IntersectionObserver
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setInView(entry.isIntersecting);
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold:
          typeof options.threshold !== "undefined" ? options.threshold : 0.4,
      }
    );

    obs.observe(el);
    return () => {
      if (obs && el) obs.unobserve(el);
      if (obs) obs.disconnect();
    };
  }, [ref, options.root, options.rootMargin, options.threshold]);

  return [ref, inView];
}
