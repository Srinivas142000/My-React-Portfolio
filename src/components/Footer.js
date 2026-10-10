import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Envelope, Eye, Github, Linkedin } from "react-bootstrap-icons";
import { links } from "../data/profile";

// Site-wide visit counter backed by the free Abacus API (abacus.jasoncameron.dev).
// Each browser session counts once; later page loads only read the total.
const COUNTER_URL = "https://abacus.jasoncameron.dev";
const COUNTER_KEY = "srinivas142000-portfolio/visits";
const SESSION_FLAG = "visit-counted";

const useVisitCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (typeof fetch !== "function") return;
    let counted = false;
    try {
      counted = sessionStorage.getItem(SESSION_FLAG) === "1";
      sessionStorage.setItem(SESSION_FLAG, "1");
    } catch {
      // storage blocked: just count this load
    }
    const action = counted ? "get" : "hit";
    fetch(`${COUNTER_URL}/${action}/${COUNTER_KEY}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => typeof data.value === "number" && setCount(data.value))
      .catch(() => setCount(null)); // hide the counter if the service is unreachable
  }, []);

  return count;
};

export const Footer = () => {
  const visits = useVisitCount();

  return (
    <footer className="footer">
      <Container className="footer-inner">
        <div className="footer-meta">
          <p>&copy; {new Date().getFullYear()} Yoga Kasireddy</p>
          {visits !== null && (
            <p className="visit-count">
              <Eye size={15} />
              <strong>{visits.toLocaleString()}</strong> {visits === 1 ? "visit" : "visits"}
            </p>
          )}
        </div>
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
};
