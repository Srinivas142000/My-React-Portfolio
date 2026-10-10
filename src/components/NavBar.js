import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Github, Linkedin } from "react-bootstrap-icons";
import { links } from "../data/profile";
import logo from "../assets/img/logo-wordmark.svg";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setExpanded(false), [pathname]);

  const close = () => setExpanded(false);
  const solid = scrolled || expanded || pathname !== "/";

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-nav ${solid ? "is-solid" : ""}`}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand" onClick={close}>
          <img src={logo} alt="Yoga Kasireddy" className="brand-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Link as={NavLink} to="/me" onClick={close}>About</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#skills" onClick={close}>Skills</Nav.Link>
            <Nav.Link as={HashLink} smooth to="/#projects" onClick={close}>Projects</Nav.Link>
            <Nav.Link href={links.resume} target="_blank" rel="noopener noreferrer" onClick={close}>
              Resume
            </Nav.Link>
          </Nav>
          <div className="nav-actions">
            <a className="icon-button" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a className="icon-button" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <HashLink smooth to="/#connect" className="button button--primary button--sm" onClick={close}>
              Let's connect
            </HashLink>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
