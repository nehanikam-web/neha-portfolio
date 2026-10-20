import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SITE } from "../data/siteData.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Checks the fields and returns an object with an error message per field
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name (at least 2 letters).";
  if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please write a message (at least 10 characters).";
  return errors;
}

function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("Please fix the highlighted fields.");
      return;
    }

    // There is no server, so we open the visitor's email app with the
    // message already written. We do NOT claim that it was sent.
    const subject = encodeURIComponent(`Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} (${values.email.trim()})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready. Press Send there to deliver it.");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          number="07"
          eyebrow="Get in touch"
          title="Let's Work"
          accent="Together"
          sub="I am looking for an entry-level opportunity where I can contribute and keep learning."
        />

        <div className="contact-grid">
          <Reveal className="contact-links">
            <a className="glass-card contact-link" href={`mailto:${SITE.email}`}>
              <span className="icon-badge"><Mail size={20} /></span>
              <span>
                <small>Email</small>
                {SITE.email}
              </span>
            </a>
            <a className="glass-card contact-link" href={SITE.github} target="_blank" rel="noopener noreferrer">
              <span className="icon-badge"><Github size={20} /></span>
              <span>
                <small>GitHub</small>
                {SITE.github.replace("https://", "")}
              </span>
            </a>
            <a className="glass-card contact-link" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="icon-badge"><Linkedin size={20} /></span>
              <span>
                <small>LinkedIn</small>
                {SITE.linkedin.replace("https://", "")}
              </span>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form className="glass-card contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p className="error" id="name-error">{errors.name}</p>}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p className="error" id="email-error">{errors.email}</p>}
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                ></textarea>
                {errors.message && <p className="error" id="message-error">{errors.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <Send size={18} /> Send Message
              </button>

              <p className="form-status" role="status" aria-live="polite">{status}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
