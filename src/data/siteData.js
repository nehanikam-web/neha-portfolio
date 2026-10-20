// =====================================================================
//  EDIT YOUR DETAILS HERE. Every component reads from this one file.
// =====================================================================

export const SITE = {
  name: "Neha Nikam",
  firstName: "Neha",
  role: "Full Stack Developer",

  intro:
    "BSc Computer Science graduate who enjoys building responsive, user-friendly web applications with React, Node.js, Express and MongoDB.",

  // TODO 1: replace with your real contact details
  email: "your-email@example.com",
  github: "https://github.com/nehanikam-web",
  linkedin: "https://linkedin.com/in/your-username",

  // Files inside the "public" folder
  portrait: "/neha-nikam.jpg",
  resume: "/resume.pdf",

  // TODO 2: replace with your real college name
  college: "[Vidya Pratishthan College Indapur]",
};

export const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Journey", id: "journey" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

// icon = name of a Lucide icon used in Skills.jsx (see ICONS there)
export const SKILLS = [
  { group: "Frontend", name: "HTML", icon: "FileCode2", note: "Semantic, accessible page structure." },
  { group: "Frontend", name: "CSS", icon: "Palette", note: "Responsive layouts, Flexbox, Grid, animations." },
  { group: "Frontend", name: "JavaScript", icon: "Braces", note: "Interactive features and dynamic pages." },
  { group: "Frontend", name: "React.js", icon: "Atom", note: "Reusable, component-based interfaces." },
  { group: "Backend", name: "Node.js", icon: "Hexagon", note: "Server-side JavaScript applications." },
  { group: "Backend", name: "Express.js", icon: "Zap", note: "Routes and server logic for APIs." },
  { group: "Database", name: "MongoDB", icon: "Database", note: "Storing data in flexible collections." },
  { group: "Tools", name: "REST APIs", icon: "Plug", note: "Connecting the frontend with the backend." },
  { group: "Tools", name: "Git", icon: "GitBranch", note: "Version control for my code." },
  { group: "Tools", name: "GitHub", icon: "Github", note: "Hosting and sharing my projects." },
];

// To add a project: copy one block and change the values.
// Replace the placeholder links with your real ones.
export const PROJECTS = [
  {
    title: "COMET",
    subtitle: "Shoe Collection Website",
    description:
      "A shoe collection website built with HTML, CSS and JavaScript. It showcases different shoe categories, styles, varieties and prices.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://https://github.com/nehanikam-web/comet",
    live: "https://your-comet-demo.example.com",
    comingSoon: false,
    gradient: "linear-gradient(135deg, #7c3aed 0%, #ff2e93 100%)",
  },
  {
    title: "VELORIX",
    subtitle: "Car Rental Website",
    description:
      "A car rental website project focused on presenting vehicles through a modern and attractive user interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/your-username/velorix",
    live: "https://your-velorix-demo.example.com",
    comingSoon: false,
    gradient: "linear-gradient(135deg, #4338ca 0%, #8b5cf6 100%)",
  },
  {
    title: "MERN Project",
    subtitle: "Full Stack Application",
    description:
      "A future full-stack project using React, Node.js, Express and MongoDB. Still in planning, so details will be added when it is built.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    live: "",
    comingSoon: true,
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #581c87 100%)",
  },
];

// Learning journey: no dates are claimed, only the order I learned things.
export const JOURNEY = [
  { title: "HTML & CSS", text: "Started with page structure, styling and responsive layouts.", status: "done" },
  { title: "JavaScript", text: "Added interactivity, DOM handling and logic to my pages.", status: "done" },
  { title: "Front-end Projects", text: "Built COMET and VELORIX to practise real layouts and UI.", status: "done" },
  { title: "React.js", text: "Learning component-based UI development.", status: "current" },
  { title: "Node.js, Express & MongoDB", text: "Learning the backend, REST APIs and databases.", status: "current" },
  { title: "First MERN Project", text: "Combining everything into a complete full stack app.", status: "next" },
];
