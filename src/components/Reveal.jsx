import { motion } from "framer-motion";

// Small helper: fades + slides its children in when they scroll into view.
// Use it like: <Reveal delay={0.1}> ...anything... </Reveal>
function Reveal({ children, delay = 0, y = 36, className = "", as = "div" }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
