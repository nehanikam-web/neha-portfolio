import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "../data/siteData.js";

// Opening animation: a counter runs 0 -> 100 while the name appears.
// The visitor can press "Skip" (or Escape) at any time.
function IntroLoader({ onFinish }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);

  // Count up to 100
  useEffect(() => {
    if (reduce) {
      setCount(100);
      return;
    }
    const timer = setInterval(() => {
      setCount((c) => (c >= 100 ? 100 : c + 2));
    }, 40);
    return () => clearInterval(timer);
  }, [reduce]);

  // When we reach 100, play the exit animation
  useEffect(() => {
    if (count >= 100) {
      const t = setTimeout(() => setLeaving(true), reduce ? 300 : 350);
      return () => clearTimeout(t);
    }
  }, [count, reduce]);

  // Escape key skips
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setLeaving(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.div
      className="intro"
      role="dialog"
      aria-label="Intro animation"
      initial={{ opacity: 1 }}
      animate={leaving ? { opacity: 0, scale: 1.04 } : { opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (leaving) onFinish();
      }}
    >
      <div className="intro-glow" aria-hidden="true"></div>

      <div className="intro-center">
        <motion.p
          className="intro-small"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Portfolio
        </motion.p>

        <h1 className="intro-name" aria-label={SITE.name}>
          {SITE.name.split("").map((ch, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
            >
              {ch === " " ? " " : ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="intro-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          {SITE.role}
        </motion.p>

        <div className="intro-bar" aria-hidden="true">
          <div className="intro-bar-fill" style={{ width: `${count}%` }}></div>
        </div>
        <p className="intro-count" aria-live="off">
          {String(count).padStart(3, "0")}
        </p>
      </div>

      <button className="intro-skip" onClick={() => setLeaving(true)}>
        Skip intro
      </button>
    </motion.div>
  );
}

export default IntroLoader;
