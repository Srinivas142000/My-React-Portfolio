import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import gitImage from "../assets/img/github.png";
import linkImage from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  // State to store visit count
  const [visitCount, setVisitCount] = useState(0);

  // Track and update site visit count
  useEffect(() => {
    // Get visit count from localStorage
    let count = localStorage.getItem("siteVisitCount");
    if (count === null) {
      // Initialize if not present
      localStorage.setItem("siteVisitCount", 1);
      setVisitCount(1);
    } else {
      // Increment and update
      let newCount = parseInt(count) + 1;
      localStorage.setItem("siteVisitCount", newCount);
      setVisitCount(newCount);
    }
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>
              &copy; {new Date().getFullYear()} Yoga Kasireddy. All Rights
              Reserved.
            </p>
            <p>👀 <strong>{visitCount}</strong> </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/yoga-srinivas-reddy-kasireddy-38b8151a0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkImage} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/Srinivas142000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitImage} alt="GitHub" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
