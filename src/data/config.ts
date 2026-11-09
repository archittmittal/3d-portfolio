const config = {
  title: "Archit Mittal | AI/ML Engineer",
  description: {
    long: "Explore the portfolio of Archit Mittal, an AI/ML engineer building AI agents, the tooling that watches them, and the models underneath. Let's build something amazing together!",
    short:
      "Discover the portfolio of Archit Mittal, an AI/ML engineer building AI agents, observability tooling, and machine learning models.",
  },
  keywords: [
    "Archit Mittal",
    "portfolio",
    "AI/ML engineer",
    "machine learning",
    "AI agents",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Archit Mittal",
  email: "work.architmittal@gmail.com",
  site: "https://architmittal.com",

  // for github stars button
  githubUsername: "archittmittal",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/archittmittal",
    linkedin: "https://www.linkedin.com/in/archittmittal/",
    instagram: "https://www.instagram.com/archittmittal",
    facebook: "",
    github: "https://github.com/archittmittal",
    substack: "https://substack.com/@architmittal1",
  },
  substackFeed: "https://architmittal1.substack.com/feed",
  resume: "https://drive.google.com/file/d/1znQ-Hx640XUJBfTLPSWXS4H3ysbzvO6r/view?usp=sharing",
};
export { config };
