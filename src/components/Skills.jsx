import { motion } from "framer-motion";
import {
  FileCode2,
  Palette,
  Braces,
  Atom,
  Hexagon,
  Zap,
  Database,
  Plug,
  GitBranch,
  Github,
} from "lucide-react";
import { SKILLS } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

// Maps the icon name written in siteData.js to the real icon component
const ICONS = { FileCode2, Palette, Braces, Atom, Hexagon, Zap, Database, Plug, GitBranch, Github };

const groups = ["Frontend", "Backend", "Database", "Tools"];

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="What I work with"
          title="Skills &"
          accent="Technologies"
          sub="The tools I use to build web applications."
        />

        {groups.map((group) => (
          <div key={group} className="skill-group">
            <h3 className="skill-group-title">{group}</h3>
            <div className="skills-grid">
              {SKILLS.filter((s) => s.group === group).map((skill, i) => {
                const Icon = ICONS[skill.icon] || Braces;
                return (
                  <motion.article
                    key={skill.name}
                    className="glass-card skill-card"
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: i * 0.07 }}
                    whileHover={{ y: -8 }}
                  >
                    <span className="icon-badge">
                      <Icon size={24} />
                    </span>
                    <h4>{skill.name}</h4>
                    <p>{skill.note}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
