import projImg1 from "../img/projspweb.jpg";
import projImg2 from "../img/survivor.jpeg";
import projImg3 from "../img/vtotxt.jpeg";
import projImg4 from "../img/AR.jpeg";
import projImg5 from "../img/ddrow.jpeg";
import projImg6 from "../img/compnetw.jpeg";
import projImg1F from "../img/imgconv.jpeg";
import projImg2F from "../img/arml.jpeg";
import projImg3F from "../img/traumabot.jpeg";
import projImg4F from "../img/scamshield.jpeg";

export const projects = [
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

export const projectsFuture = [
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

export const roles = [
  "Tech Enthusiast",
  "Avid Reader",
  "Software Engineer",
  "Student",
  "Geek",
  "Software Developer",
  "Forever Curious"
]

export const colors = [
  "#FF6347",
  "#FFD700",
  "#32CD32",
  "#00CED1",
  "#FF1493",
  "#8A2BE2",
  "#00FA9A"
];

export const skills = [
  { name: "Python", imagetype: "codedev" },
  { name: "Java", imagetype: "codedev" },
  { name: "JavaScript", imagetype: "webdev" },
  { name: "Node.js", imagetype: "webdev" },
  { name: "React", imagetype: "webdev" },
  { name: "Go", imagetype: "appdev" },
  { name: "C++", imagetype: "codedev" },
  { name: "C", imagetype: "codedev" },
  { name: "Typescript", imagetype: "webdev" },
  { name: "Spring Boot", imagetype: "webdev" },
  { name: "Vue", imagetype: "webdev" },
  { name: "MongoDB", imagetype: "dbdev" },
  { name: "Docker", imagetype: "appdev" },
  { name: "AWS", imagetype: "appdev" },
  { name: "GitHub", imagetype: "webdev" },
  { name: "TensorFlow", imagetype: "appdev" },
  { name: "PySpark", imagetype: "appdev" },
  { name: "Angular", imagetype: "webdev" },
  { name: "Swift", imagetype: "appdev" },
  { name: "iOS SDK", imagetype: "appdev" },
  { name: "Android SDK", imagetype: "appdev" },
  { name: "React Native", imagetype: "appdev" },
  { name: "Kotlin", imagetype: "appdev" },
  { name: "Jupyter", imagetype: "appdev" },
  { name: "MATLAB", imagetype: "appdev" },
  { name: "PostgreSQL", imagetype: "dbdev" }
];

export default {
  projects,
  projectsFuture,
  roles,
  colors,
  skills
};