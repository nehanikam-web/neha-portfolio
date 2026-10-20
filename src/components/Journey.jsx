import { motion } from "framer-motion";
import { JOURNEY } from "../data/siteData.js";
import SectionHeading from "./SectionHeading.jsx";

const labels = { done: "Learned", current: "Learning now", next: "Up next" };

function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <SectionHeading
          number="05"
          eyebrow="How I am growing"
          title="Learning"
          accent="Journey"
          sub="From front-end basics towards the full MERN stack."
        />

        <ol className="timeline">
          {JOURNEY.map((step, i) => (
            <motion.li
              key={step.title}
              className={`tl-item tl-${step.status}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65 }}
            >
              <span className="tl-dot" aria-hidden="true"></span>
              <div className="glass-card tl-card">
                <span className="tl-status">{labels[step.status]}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
