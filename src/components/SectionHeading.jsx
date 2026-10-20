import Reveal from "./Reveal.jsx";

// Shared heading used by every section so the design stays consistent.
function SectionHeading({ number, eyebrow, title, accent, sub }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">
        <span className="eyebrow-num">{number}</span> {eyebrow}
      </p>
      <h2 className="section-title">
        {title} <span className="grad-text">{accent}</span>
      </h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  );
}

export default SectionHeading;
