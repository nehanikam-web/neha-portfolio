import { GraduationCap, Compass, Target } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "BSc in Computer Science. Graduated.",
  },
  {
    icon: Compass,
    title: "Interests",
    text: "Web Development and MERN Stack Development.",
  },
  {
    icon: Target,
    title: "Goal",
    text: "An entry-level role where I can apply my skills and keep learning.",
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading number="01" eyebrow="Who I am" title="About" accent="Me" />

        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I am a BSc Computer Science graduate with a strong interest in
              web development. I enjoy turning ideas into responsive,
              easy-to-use websites and I like understanding how everything
              works, from the interface to the server.
            </p>
            <p>
              I have practical knowledge of HTML, CSS, JavaScript, React.js,
              Node.js, Express.js and MongoDB, and I have built front-end
              projects to practise what I learn. I am now focused on MERN
              stack development and on growing through real-world work.
            </p>
            <p>
              <strong>Career objective:</strong> to start my career as a
              developer in an entry-level opportunity where I can contribute,
              learn from experienced people and keep improving.
            </p>
          </Reveal>

          <div className="about-cards">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12} className="glass-card about-card">
                <span className="icon-badge">
                  <c.icon size={22} />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
