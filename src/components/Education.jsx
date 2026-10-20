import { GraduationCap } from "lucide-react";
import { SITE } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionHeading number="04" eyebrow="Academic background" title="My" accent="Education" />

        <Reveal className="glass-card edu-card">
          <span className="icon-badge icon-lg">
            <GraduationCap size={30} />
          </span>
          <div>
            <span className="status-pill">Graduated</span>
            <h3>BSc in Computer Science</h3>
            {/* Change the college name in src/data/siteData.js */}
            <p className="edu-college">{SITE.college}</p>
            <p className="edu-text">
              Studied the fundamentals of computer science and programming,
              which led me towards web and full stack development.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
