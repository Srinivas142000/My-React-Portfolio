import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/projspweb.jpg";
import projImg2 from "../assets/img/survivor.jpeg";
import projImg3 from "../assets/img/vtotxt.jpeg";
import projImg4 from "../assets/img/AR.jpeg";
import projImg5 from "../assets/img/ddrow.jpeg";
import projImg6 from "../assets/img/compnetw.jpeg";
import projImg1F from "../assets/img/imgconv.jpeg";
import projImg2F from "../assets/img/arml.jpeg";
import projImg3F from "../assets/img/traumabot.jpeg";
import projImg4F from "../assets/img/scamshield.jpeg";
import "../App.css";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "SpiderWeb, Events and Communities",
    description: "SpringBoot, React, PostgreSQL",
    imgUrl: projImg1,
    technologies: ["SpringBoot", "React", "PostgreSQL"],
    additionalInformation: "SpiderWeb is a dynamic social networking platform designed to foster student communities, events, and encourage active participation. With a robust backend powered by Spring Boot, a responsive frontend built with React, and a reliable PostgreSQL database, it provides an interactive space for students to connect, collaborate, and engage. This platform is designed to resemble modern project management boards like JIRA and Rally, enabling seamless collaboration and community building."
  },
  {
    title: "Survivor, the Game",
    description: "Java, MVC framework.",
    imgUrl: projImg2,
    technologies: ["Java", "MVC framework"],
    additionalInformation: "Survivor, the Game is a text-based adventure game, developed using Java, and designed with an MVC (Model-View-Controller) architecture to ensure clean separation of logic and user interface. In this game, players embark on an interactive, story-driven journey where their choices influence the outcome. A custom parser was created to handle dynamic input and control the flow of the narrative. Set in a console-based environment, the game challenges players with a series of decisions that shape their survival story, combining engaging storytelling with strategic thinking."
  },
  {
    title: "Voice-Based Accessibility Assistance: Voice-to-Text Form Interaction",
    description: "Python, Vosk API, MongoDB, RESTful APIs.",
    imgUrl: projImg3,
    technologies: ["Python", "Vosk API", "MongoDB", "RESTful APIs"],
    additionalInformation: "The Voice-Based Accessibility Assistance system was designed to improve accessibility by enabling users to interact with online forms using voice commands. Leveraging Python and the Vosk API for reliable voice-to-text conversion, the system allows the computer to read questions aloud and accept spoken responses, making the process more intuitive for individuals with disabilities. Users can also clarify or modify their responses verbally, ensuring accuracy and ease of use. After collecting the voice input, the system formats the data and stores it in a MongoDB database before sending it as a POST request to the relevant server for further processing. This solution streamlines form completion, providing greater independence and accessibility for users with varying needs."
  },
  {
    title: "Network Element Navigation using ArcGIS and AR",
    description: "Xamarin, ARKit, ArcGIS, Blender, iOS SDK.",
    imgUrl: projImg4,
    technologies: ["Xamarin", "ARKit", "ArcGIS", "Blender", "iOS SDK"],
    additionalInformation: "This application combines ArcGIS mapping technology with augmented reality (AR) to provide an immersive, real-time experience for network element navigation. Using Xamarin as the development platform, I integrated ARKit on an iPhone 6s to enable interactive AR features. To enhance the user experience, I created custom 3D models in Blender, which were seamlessly integrated into the app. The application leverages ArcGIS APIs for precise geospatial data visualization, making it easier to navigate and interact with network elements in a fully augmented environment."
  },
  {
    title: "Driver Drowsiness Detection using CNN Model",
    description: "Python, TensorFlow, OpenCV, VGG16 CNN model.",
    imgUrl: projImg5,
    technologies: ["Python", "TensorFlow", "OpenCV", "VGG16 CNN model"],
    additionalInformation: "Driver Drowsiness Detection using CNN Model is a real-time system developed to monitor driver alertness using computer vision and deep learning. I leveraged the VGG16 convolutional neural network (CNN) model to analyze raw video recordings (nearly 4 hours long), preprocessing the footage by scrubbing and extracting key features such as eye and mouth status at specific time intervals. Using Python-based algorithms, I built a model that continuously tracks the driver’s state, triggering an alarm if the eyes remain closed for more than 2 seconds or if the driver yawns repeatedly within a short time frame. This system aimed to enhance road safety by detecting signs of drowsiness and alerting the driver to prevent accidents."
  },
  {
    title: "A Comparison between Client-Server Architecture and Peer-to-Peer Architectures using Chatrooms",
    description: "Chatrooms, WebSocket, HTTP, TCP/IP, peer-to-peer networking. Python",
    imgUrl: projImg6,
    technologies: ["Chatrooms", "WebSocket", "HTTP", "TCP/IP", "Client Server Architecture", "peer-to-peer networking", "Python"],
    additionalInformation: "The goal of this project was to perform an analysis of two popular network architectures using chatrooms. It involved comparing the performance and functionality of client-server and peer-to-peer architectures in the context of real-time communication. The project explored various aspects of networking protocols, including WebSocket and TCP/IP, and demonstrated how each architecture supports communication between users. This comparison aimed to provide insights into the strengths and weaknesses of each approach, helping to determine the most suitable architecture for different types of applications."
  }
];

const projectsFuture = [
  {
    title: "Image Conv3D",
    description: "ARKit, 3D Modeling, Unity, Computer Vision.",
    imgUrl: projImg1F,
    technologies: ["ARKit", "3D Modeling", "Unity", "Computer Vision"],
    additionalInformation: "Image Conv3D will explore the conversion of 2D images into 3D objects using computer vision and machine learning techniques. By utilizing ARKit for augmented reality capabilities, Unity for 3D modeling, and computer vision algorithms, this project aims to create real-time, interactive 3D models from static images. The combination of these technologies will enable immersive visualizations that can be applied in industries such as gaming, education, and virtual reality."
  },
  {
    title: "Real Time Detection of Object and Conversion to 3D Object",
    description: "TensorFlow, OpenCV, 3D Modeling, Python.",
    imgUrl: projImg2F,
    technologies: ["TensorFlow", "OpenCV", "3D Modeling", "Python"],
    additionalInformation: "This project will focus on real-time object detection and its conversion into 3D models using TensorFlow and OpenCV. By leveraging deep learning techniques for object recognition and Python-based computer vision tools, the system will be designed to capture and process objects in real time, converting them into 3D representations. This technology will have applications in fields such as robotics, interactive environments, and product design, offering a new way to engage with physical objects digitally."
  },
  {
    title: "Trauma Bot",
    description: "GPT-3, NLP, Python, Flask.",
    imgUrl: projImg3F,
    technologies: ["GPT-3", "NLP", "Python", "Flask"],
    additionalInformation: "Trauma Bot will be an AI-driven chatbot designed to provide immediate support and guidance for individuals experiencing trauma or emotional distress. By utilizing GPT-3, a state-of-the-art natural language processing model, and Flask for backend development, this bot will be capable of understanding user queries and providing context-sensitive, empathetic responses. The goal of this project will be to help people navigate difficult moments by offering timely information and emotional support, potentially integrating with mental health platforms or telemedicine applications."
  },
  {
    title: "Scam Shield",
    description: "React Native, Firebase, Mobile App Development, JavaScript.",
    imgUrl: projImg4F,
    technologies: ["React Native", "Firebase", "Mobile App Development", "JavaScript"],
    additionalInformation: "Scam Shield will be a mobile application designed to help users identify and avoid potential scams, phishing attacks, and fraudulent activities. Developed using React Native for cross-platform support and Firebase for real-time data synchronization, the app will analyze incoming messages, calls, and online activity to detect suspicious patterns. By leveraging JavaScript and cloud-based tools, Scam Shield will provide users with proactive protection and peace of mind, preventing them from falling victim to online scams and fraud."
  }
];

export const Projects = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/more");
  }

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div className="projects-header">
                  <h2>Projects</h2>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Completed Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Currently Working</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Future Pipeline</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>I am currently dedicating my efforts to the development of these projects.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Here are the Projects I am Planning on working on sometime in the future. Contact me if you want to collaborate.</p>
                      <Row>
                        {projectsFuture.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <div className="moreproj">
                <button onClick={() => { handleButtonClick() }}>
                  More Projects 
                  <ArrowRightCircle size={25} />
                </button>
                </div>

              <style>
                {`
                  .moreproj {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 20px;
                  }

                  .moreproj button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.2rem;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 25px;
                    cursor: pointer;
                    overflow: hidden;
                    position: relative;
                    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
                  }

                  .moreproj button:hover {
                    transform: scale(1.05);
                  }

                  .moreproj button span {
                    display: inline-block;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: waveAppear 0.5s ease-out forwards;
                  }

                  @keyframes waveAppear {
                    0% {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    100% {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}
              </style>
              </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
