import { FileText, Download, ExternalLink } from "lucide-react";
import { SITE } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <SectionHeading number="06" eyebrow="Details on paper" title="My" accent="Resume" />

        <Reveal className="glass-card resume-card">
          <span className="icon-badge icon-lg">
            <FileText size={30} />
          </span>
          <div className="resume-text">
            <h3>Neha Nikam, Full Stack Developer</h3>
            <p>
              View or download my resume to see my education, skills and
              projects in one page.
            </p>
          </div>
          <div className="resume-actions">
            <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              <ExternalLink size={18} /> Open
            </a>
            <a href={SITE.resume} download="Neha-Nikam-Resume.pdf" className="btn btn-primary">
              <Download size={18} /> Download
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Resume;
