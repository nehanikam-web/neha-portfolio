import { motion } from "framer-motion";
import { Github, ExternalLink, Clock } from "lucide-react";
import { PROJECTS } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="Selected work"
          title="My"
          accent="Projects"
          sub="Front-end projects I built while learning, and my next full stack project."
        />

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              className="glass-card project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-visual" style={{ background: p.gradient }} aria-hidden="true">
                <span className="project-visual-title">{p.title}</span>
                {p.comingSoon && (
                  <span className="soon-badge">
                    <Clock size={14} /> Coming Soon
                  </span>
                )}
              </div>

              <div className="project-body">
                <p className="project-sub">{p.subtitle}</p>
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>

                <ul className="tags" aria-label="Technology stack">
                  {p.tech.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="project-actions">
                  {p.comingSoon ? (
                    <>
                      <button className="btn btn-sm btn-disabled" disabled>
                        <Github size={16} /> GitHub
                      </button>
                      <button className="btn btn-sm btn-disabled" disabled>
                        <ExternalLink size={16} /> Live Demo
                      </button>
                    </>
                  ) : (
                    <>
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-glass">
                        <Github size={16} /> GitHub
                      </a>
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
