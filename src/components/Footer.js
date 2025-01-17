import { Container, Row, Col } from "react-bootstrap";
import gitImage from "../assets/img/github.png"
import linkImage from "../assets/img/nav-icon1.svg"


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <p>&copy;{new Date().getFullYear()} Yoga Kasireddy. All Rights Reserved.</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yoga-srinivas-reddy-kasireddy-38b8151a0/" target="_blank">
                <img src={linkImage} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Srinivas142000" target="_blank">
                <img src={gitImage} alt="GitHub" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};