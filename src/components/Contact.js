import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Check2, Clipboard, Envelope, FileEarmarkText, Github, Linkedin } from "react-bootstrap-icons";
import { Reveal } from "./Reveal";
import { links } from "../data/profile";

const initialForm = { name: "", email: "", message: "" };

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  // No backend: the form pre-fills an email in the visitor's mail app.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`;
    setForm(initialForm);
    setStatus("Your email app should now be open with the message ready to send.");
  };

  return (
    <section className="section contact-section" id="connect">
      <Container>
        <Reveal className="contact-card">
          <Row>
            <Col lg={5}>
              <span className="eyebrow">Contact</span>
              <h2>Let's build something together</h2>
              <p className="lead-text">
                Open to software engineering roles, research collaborations, and interesting side
                projects. The fastest way to reach me is email.
              </p>
              <ul className="contact-links">
                <li>
                  <Envelope size={18} />
                  <a href={`mailto:${links.email}`}>{links.email}</a>
                  <button type="button" className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
                    {copied ? <Check2 size={16} /> : <Clipboard size={15} />}
                  </button>
                </li>
                <li>
                  <Linkedin size={18} />
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li>
                  <Github size={18} />
                  <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </li>
                <li>
                  <FileEarmarkText size={18} />
                  <a href={links.resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </li>
              </ul>
            </Col>
            <Col lg={{ span: 6, offset: 1 }}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div>
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" value={form.name} onChange={update("name")} autoComplete="name" required />
                  </div>
                  <div>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" value={form.email} onChange={update("email")} autoComplete="email" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" rows="5" value={form.message} onChange={update("message")} required />
                </div>
                <div>
                  <button type="submit" className="button button--primary">
                    Send message <Envelope size={15} />
                  </button>
                </div>
                {status && <p className="form-status" role="status">{status}</p>}
              </form>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  );
};
