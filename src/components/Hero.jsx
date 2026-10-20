import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { SITE } from "../data/siteData.js";

const words = ["Full", "Stack", "Developer"];

// `ready` becomes true when the intro animation has finished,
// so the hero text animates in right after the intro.
function Hero({ ready }) {
  // Parallax: layers move at different speeds while scrolling
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 70]);
  const textY = useTransform(scrollY, [0, 700], [0, -50]);
  const glowY = useTransform(scrollY, [0, 700], [0, 160]);

  const show = ready ? "show" : "hidden";

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-lines"></div>
        <motion.div className="orb orb-purple" style={{ y: glowY }} />
        <div className="orb orb-pink"></div>
        <span className="float-sym s1">&lt;/&gt;</span>
        <span className="float-sym s2">{"{ }"}</span>
        <span className="float-sym s3">=&gt;</span>
      </div>

      <div className="container hero-inner">
        <motion.div
          className="hero-text"
          style={{ y: textY }}
          variants={container}
          initial="hidden"
          animate={show}
        >
          <motion.p className="hero-tag" variants={item}>
            <span className="dot"></span> Open to entry-level opportunities
          </motion.p>

          <motion.h1 className="hero-name" variants={item}>
            Hi, I'm
            <br />
            <span className="grad-text">{SITE.name}</span>
          </motion.h1>

          <motion.h2 className="hero-role" variants={item} aria-label={SITE.role}>
            {words.map((w) => (
              <span key={w} className="hero-word" aria-hidden="true">
                {w}
              </span>
            ))}
          </motion.h2>

          <motion.p className="hero-desc" variants={item}>
            {SITE.intro}
          </motion.p>

          <motion.div className="hero-actions" variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href={SITE.resume} target="_blank" rel="noopener noreferrer" className="btn btn-glass">
              <Download size={18} /> Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <Mail size={18} /> Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="portrait-float">
            <div className="portrait-frame">
              <img
                src={SITE.portrait}
                alt="Portrait of Neha Nikam"
                className="portrait-img"
                width="494"
                height="460"
              />
              <div className="portrait-shine" aria-hidden="true"></div>
            </div>
            <span className="chip chip-a">React</span>
            <span className="chip chip-b">Node.js</span>
            <span className="chip chip-c">MongoDB</span>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll to About section">
        <span></span>
      </a>
    </section>
  );
}

export default Hero;
