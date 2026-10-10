import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowRight, FileEarmarkText, Github, Linkedin, Envelope } from "react-bootstrap-icons";
import { links, roles } from "../data/profile";

// Types each role out, pauses, deletes it, then moves to the next one.
const useTypewriter = (words, { typeMs = 90, deleteMs = 45, holdMs = 1800 } = {}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = holdMs;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeMs, deleteMs, holdMs]);

  return text;
};

export const Banner = () => {
  const typed = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <span className="hero-tag">
              <span className="dot" /> MS CS @ Northeastern · ex-Comcast
            </span>
            <h1>Hi, I'm Yoga Kasireddy.</h1>
            <p className="hero-role" aria-label={roles.join(", ")}>
              <span className="typed">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </p>
            <p className="hero-lead">
              I build <strong>data pipelines, backend services, and AR/ML apps</strong>.
              Previously a Development Engineer at Comcast processing large-scale network data;
              now pursuing a Master's in Computer Science at Northeastern University.
            </p>
            <div className="hero-actions">
              <HashLink smooth to="/#projects" className="button button--primary">
                View my work <ArrowRight size={16} />
              </HashLink>
              <a className="button button--ghost" href={links.resume} target="_blank" rel="noopener noreferrer">
                <FileEarmarkText size={16} /> Resume
              </a>
              <Link to="/me" className="button button--ghost">
                About me
              </Link>
            </div>
            <div className="hero-social">
              <a className="icon-button" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={16} />
              </a>
              <a className="icon-button" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a className="icon-button" href={`mailto:${links.email}`} aria-label="Email">
                <Envelope size={16} />
              </a>
            </div>
          </Col>
          <Col lg={5}>
            <div className="code-card" aria-hidden="true">
              <div className="code-card__bar">
                <i /><i /><i />
                <span>yoga.js</span>
              </div>
              <pre>
                <span className="tok-k">const</span> <span className="tok-v">yoga</span> = {"{\n"}
                {"  "}<span className="tok-p">role</span>: <span className="tok-s">"Software Engineer"</span>,{"\n"}
                {"  "}<span className="tok-p">studying</span>: <span className="tok-s">"MS CS @ Northeastern"</span>,{"\n"}
                {"  "}<span className="tok-p">previously</span>: <span className="tok-s">"Comcast"</span>,{"\n"}
                {"  "}<span className="tok-p">focus</span>: [<span className="tok-s">"Backend"</span>, <span className="tok-s">"Data"</span>, <span className="tok-s">"AR/ML"</span>],{"\n"}
                {"  "}<span className="tok-p">stack</span>: [<span className="tok-s">"Node.js"</span>, <span className="tok-s">"Java"</span>,{"\n"}
                {"          "}<span className="tok-s">"Python"</span>, <span className="tok-s">"React"</span>],{"\n"}
                {"  "}<span className="tok-p">curious</span>: <span className="tok-k">true</span>,{"\n"}
                {"};\n"}
                <span className="tok-c">{"// always learning something new"}</span>
              </pre>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
