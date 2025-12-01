import portfolioImg from "../assets/portofolio.jpg";
import productLanding from "../assets/productLandingPage.jpg";
import landing3d from "../assets/3dlandingPage.jpg";

const projects = [
  {
    id: 1,
    title: "Portfolio Site",
    subtitle: "Personal site built with Next.js & tailwind",
    description:
      "A fast, responsive portfolio showcasing case studies and interactive components.",
    tag: "Web Design",
    category: "web",
    image: portfolioImg,
    live: "https://abdullah-portofolio.netlify.app/",
    github: "https://github.com/Abdo5-Mahmoud/portfolio",
  },
  {
    id: 2,
    title: "Product Landing",
    subtitle: "Design system + components",
    description: "A component-driven design system for customize landing page.",
    tag: "UI/UX",
    category: "ui",
    image: productLanding,
    live: "https://a-productlandingpage.netlify.app/",
    github: "https://github.com/Abdo5-Mahmoud/product-landing-page",
  },
  {
    id: 3,
    title: "Brand 3d",
    subtitle: "Logo and identity",
    description: "Worked on visual identity for a boutique product brand.",
    tag: "Branding",
    category: "branding",
    image: landing3d,
    live: "https://landing3d-page.netlify.app/",
    github: "https://github.com/Abdo5-Mahmoud/3D-landing-page",
  },
  // ... add the rest (6 items shown earlier)
];

export default projects;
