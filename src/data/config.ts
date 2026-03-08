const config = {
  title: "Archit Mittal | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Archit Mittal, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Let's build something amazing together!",
    short:
      "Discover the portfolio of Archit Mittal, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Archit Mittal",
    "portfolio",
    "full-stack developer",
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
    linkedin: "https://www.linkedin.com/in/archit-mittal-010638305/",
    instagram: "https://www.instagram.com/archittmittal",
    facebook: "",
    github: "https://github.com/archittmittal",
  },
};
export { config };
