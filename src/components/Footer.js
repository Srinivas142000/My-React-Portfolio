import { Container } from "react-bootstrap";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";
import { links } from "../data/profile";

export const Footer = () => (
  <footer className="footer">
    <Container className="footer-inner">
      <p>&copy; {new Date().getFullYear()} Yoga Kasireddy</p>
      <div className="footer-social">
        <a className="icon-button" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin size={16} />
        </a>
        <a className="icon-button" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github size={16} />
        </a>
        <a className="icon-button" href={`mailto:${links.email}`} aria-label="Email">
          <Envelope size={16} />
        </a>
      </div>
    </Container>
  </footer>
);
