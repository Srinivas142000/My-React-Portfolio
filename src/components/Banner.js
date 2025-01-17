import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from "react-router-dom";

const roles = [
  "Tech Enthusiast",
  "Avid Reader",
  "Software Engineer",
  "Student",
  "Geek",
  "Software Developer",
  "Forever Curious"
]

const colors = [
  "#FF6347",
  "#FFD700",
  "#32CD32",
  "#00CED1",
  "#FF1493",
  "#8A2BE2",
  "#00FA9A"
];



export const Banner = () => {
  const navigate = useNavigate();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  const handleButtonClick = () => {
    navigate("/me");
  }

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    if (roles.length === 0) return;
    const i = loopNum % roles.length;
    const fullText = roles[i];
    const updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };

  const getRandomColor = () => {
    return colors.length > 0 ? colors[Math.floor(Math.random() * colors.length)] : 'white';
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio!</span>
                  <h1>{`Hi! I'm Yoga Kasireddy`}</h1>
                  <div className="roles">
                    <h2>
                      <span className="txt-rotate">
                        <span className="wrap" style={{ color: 'white' }}>
                          How People describe me:  
                          <span style={{ color: getRandomColor() }}>
                            {" " + text}
                          </span>
                        </span>
                      </span>
                    </h2>
                  </div>
                  <p>I am a dedicated and results-driven software engineer currently pursuing a Master's in Computer Science with a strong background in data processing, service development, and solutions. I have worked as a Development Engineer at COMCAST, where I developed algorithms for processing large-scale network data, managed critical data workflows, and contributed to automating customer transitions during database updates. My expertise spans technologies like Node.js, MongoDB, ARKit, and Unity, and I am passionate about building innovative solutions that optimize business operations and improve user experiences. With a foundation in both software development and project management, I thrive in collaborative environments where I can contribute to team success and solve complex challenges.</p>
                  <button onClick={() => { handleButtonClick() }}>Learn More <ArrowRightCircle size={25} /></button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};