import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SITE } from "../data/siteData.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#home" className="brand">
            {SITE.firstName}
            <span>.</span>
          </a>
          <p className="footer-role">{SITE.role}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="footer-links">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="social">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${SITE.email}`} aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <p className="footer-copy">© 2026 {SITE.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
