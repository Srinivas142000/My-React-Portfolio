import medrhythms from "../assets/img/projects/medrhy.webp";
import spiderweb from "../assets/img/projects/projspweb.webp";
import survivor from "../assets/img/projects/survivor.webp";
import voiceToText from "../assets/img/projects/vtotxt.webp";
import arNavigation from "../assets/img/projects/ar.webp";
import drowsiness from "../assets/img/projects/ddrow.webp";
import networks from "../assets/img/projects/compnetw.webp";
import cybersecurity from "../assets/img/projects/codecyb.webp";
import mrInterior from "../assets/img/projects/mrimage.webp";
import worldquant from "../assets/img/projects/worldquant.webp";
import hazeRemoval from "../assets/img/projects/paper1.webp";
import reflectance from "../assets/img/projects/paper2.webp";
import evAnalysis from "../assets/img/projects/dataviz.webp";
import adview from "../assets/img/projects/defprojpic.webp";
import imageConv3d from "../assets/img/projects/imgconv.webp";
import objectTo3d from "../assets/img/projects/arml.webp";
import traumaBot from "../assets/img/projects/traumabot.webp";
import scamShield from "../assets/img/projects/scamshield.webp";

// Single source of truth for every project shown on the site.
// status: "completed" | "in-progress" | "planned"
// featured: shown on the home page
// links: optional { github, demo, paper } URLs, rendered as buttons in the details modal
export const STATUS_LABELS = {
  completed: "Completed",
  "in-progress": "In progress",
  planned: "Planned",
};

export const projects = [
  {
    id: "medrhythms",
    title: "MedRhythms App",
    summary: "Music-therapy mobile app that tracks progress for patients with neurological disorders.",
    image: medrhythms,
    status: "completed",
    featured: true,
    tech: ["Flutter", "Firebase", "Spotify SDK", "Google Health API", "Healthcare"],
    details:
      "MedRhythms app development involves building a mobile app that integrates music therapy for patients with neurological disorders. The app leverages AI and music to track patient progress, with data syncing and storage on Firebase for healthcare application.",
    links: {},
  },
  {
    id: "mr-interior",
    title: "Meta Quest 3 MR Interior Design",
    summary: "Mixed-reality app to build virtual walls and try out textures and colors in real time.",
    image: mrInterior,
    status: "completed",
    featured: true,
    tech: ["Unity", "C#", "Meta Quest 3 SDK", "Mixed Reality", "3D Modeling"],
    details:
      "This MR project leverages the Meta Quest 3 headset to provide an immersive interior design experience. Users can create virtual walls, adjust their dimensions, and dynamically modify textures and colors to visualize interior designs in real-time. The application uses Unity and Meta's All-in-One SDK to manage spatial mapping and object interactions, ensuring a seamless and interactive user experience. Users can experiment with different styles and layouts, making it an ideal solution for architects, interior designers, and homeowners to visualize and modify their spaces before making real-world changes.",
    links: {},
  },
  {
    id: "spiderweb",
    title: "SpiderWeb: Events & Communities",
    summary: "Social platform for student communities and events with a JIRA-style collaboration board.",
    image: spiderweb,
    status: "completed",
    featured: true,
    tech: ["Spring Boot", "React", "PostgreSQL"],
    details:
      "SpiderWeb is a dynamic social networking platform designed to foster student communities, events, and encourage active participation. With a robust backend powered by Spring Boot, a responsive frontend built with React, and a reliable PostgreSQL database, it provides an interactive space for students to connect, collaborate, and engage. This platform is designed to resemble modern project management boards like JIRA and Rally, enabling seamless collaboration and community building.",
    links: {},
  },
  {
    id: "voice-forms",
    title: "Voice-to-Text Form Assistant",
    summary: "Accessibility tool that lets users fill out online forms entirely by voice.",
    image: voiceToText,
    status: "completed",
    featured: true,
    tech: ["Python", "Vosk API", "MongoDB", "REST APIs"],
    details:
      "The Voice-Based Accessibility Assistance system was designed to improve accessibility by enabling users to interact with online forms using voice commands. Leveraging Python and the Vosk API for reliable voice-to-text conversion, the system allows the computer to read questions aloud and accept spoken responses, making the process more intuitive for individuals with disabilities. Users can also clarify or modify their responses verbally, ensuring accuracy and ease of use. After collecting the voice input, the system formats the data and stores it in a MongoDB database before sending it as a POST request to the relevant server for further processing.",
    links: {},
  },
  {
    id: "ar-navigation",
    title: "Network Element Navigation with AR",
    summary: "iOS AR app that overlays ArcGIS geospatial data to locate network elements in the field.",
    image: arNavigation,
    status: "completed",
    featured: true,
    tech: ["Xamarin", "ARKit", "ArcGIS", "Blender", "iOS SDK"],
    details:
      "This application combines ArcGIS mapping technology with augmented reality (AR) to provide an immersive, real-time experience for network element navigation. Using Xamarin as the development platform, I integrated ARKit on an iPhone 6s to enable interactive AR features. To enhance the user experience, I created custom 3D models in Blender, which were seamlessly integrated into the app. The application leverages ArcGIS APIs for precise geospatial data visualization, making it easier to navigate and interact with network elements in a fully augmented environment.",
    links: {},
  },
  {
    id: "drowsiness",
    title: "Driver Drowsiness Detection",
    summary: "Real-time CNN that raises an alarm when a driver's eyes close or they yawn repeatedly.",
    image: drowsiness,
    status: "completed",
    featured: true,
    tech: ["Python", "TensorFlow", "OpenCV", "VGG16"],
    details:
      "Driver Drowsiness Detection is a real-time system developed to monitor driver alertness using computer vision and deep learning. I leveraged the VGG16 convolutional neural network to analyze raw video recordings (nearly 4 hours long), preprocessing the footage and extracting key features such as eye and mouth status at specific time intervals. The model continuously tracks the driver's state, triggering an alarm if the eyes remain closed for more than 2 seconds or if the driver yawns repeatedly within a short time frame.",
    links: {},
  },
  {
    id: "survivor",
    title: "Survivor, the Game",
    summary: "Story-driven text adventure in Java with a custom command parser and MVC architecture.",
    image: survivor,
    status: "completed",
    tech: ["Java", "MVC"],
    details:
      "Survivor, the Game is a text-based adventure game developed in Java and designed with an MVC (Model-View-Controller) architecture to ensure clean separation of logic and user interface. Players embark on an interactive, story-driven journey where their choices influence the outcome. A custom parser handles dynamic input and controls the flow of the narrative.",
    links: {},
  },
  {
    id: "chatrooms",
    title: "Client-Server vs Peer-to-Peer Chatrooms",
    summary: "Performance comparison of two network architectures through real-time chat apps.",
    image: networks,
    status: "completed",
    tech: ["Python", "WebSocket", "TCP/IP", "HTTP", "P2P Networking"],
    details:
      "The goal of this project was to analyze two popular network architectures using chatrooms. It compared the performance and functionality of client-server and peer-to-peer architectures for real-time communication, exploring networking protocols including WebSocket and TCP/IP, to determine the most suitable architecture for different types of applications.",
    links: {},
  },
  {
    id: "adview",
    title: "YouTube Adview Prediction",
    summary: "ML models predicting ad views from ~15,000 YouTube videos' engagement metrics.",
    image: adview,
    status: "completed",
    tech: ["Python", "Machine Learning", "NumPy", "Pandas", "Matplotlib"],
    details:
      "This project predicted YouTube adview counts from metrics such as likes, dislikes, comments, and views. The dataset contained approximately 15,000 video records with features including published date, duration, and category. Data cleaning and preprocessing were key steps, and several machine learning models were trained and evaluated to select the most accurate one.",
    links: {},
  },
  {
    id: "codepath-cyber",
    title: "CodePath Cybersecurity",
    summary: "Hands-on ethical hacking, penetration testing, and defensive security projects.",
    image: cybersecurity,
    status: "completed",
    tech: ["Cybersecurity", "Penetration Testing", "Linux", "Python"],
    details:
      "The CodePath cybersecurity course provides practical, hands-on training on ethical hacking, penetration testing, and building defensive security systems. Participants work on real-world projects to secure systems and prevent cyber-attacks, using tools like Kali Linux, Python, and networking protocols.",
    links: {},
  },
  {
    id: "ev-analysis",
    title: "Washington EV Population Analysis",
    summary: "Geospatial and trend analysis of every electric vehicle registered in Washington State.",
    image: evAnalysis,
    status: "in-progress",
    tech: ["Python", "Pandas", "SQL", "Seaborn", "Geospatial Analysis"],
    details:
      "This project analyzes the Washington State Department of Licensing electric vehicle registration dataset, which tracks all Battery Electric Vehicles and Plug-in Hybrids registered in the state, combined with NHTSA and EPA data. It explores geographic distribution across counties and ZIP codes, make and model preferences, adoption trends over time, and electric range. Key insights: over half of registered EVs are in King County, and the Tesla Model 3 and Nissan LEAF make up nearly 50% of all EVs.",
    links: {},
  },
  {
    id: "reflectance",
    title: "Data-Driven Reflectance Priors",
    summary: "Learning a reflectance prior from human annotations to split images into reflectance and shading.",
    image: reflectance,
    status: "in-progress",
    tech: ["Python", "Caffe", "Deep Learning", "Computer Vision"],
    details:
      "This research project tackles intrinsic image decomposition: separating an image into its reflectance (surface color) and shading (lighting) components. A two-stage framework first trains a model on large-scale human annotations to predict relative reflectance between image patches, creating a data-driven prior that is then integrated into an energy minimization framework for decomposition.",
    links: {},
  },
  {
    id: "haze-removal",
    title: "Single Image Haze Removal",
    summary: "Dehazing images with a color attenuation prior and a learned linear depth model.",
    image: hazeRemoval,
    status: "in-progress",
    tech: ["Python", "C++", "Computer Vision", "Image Processing"],
    details:
      "This research removes haze and fog from single images using a color attenuation prior. A linear model, with parameters learned through supervised learning, estimates scene depth from the hazy image; that depth is then used to estimate atmospheric transmission and restore scene radiance through the atmospheric scattering model. Applications include autonomous driving, surveillance, and outdoor photography.",
    links: {},
  },
  {
    id: "worldquant-ai",
    title: "WorldQuant Applied AI Lab",
    summary: "Six real-world deep learning and computer vision projects.",
    image: worldquant,
    status: "in-progress",
    tech: ["Python", "Deep Learning", "Computer Vision"],
    details:
      "WorldQuant University's Applied AI Lab is a self-paced program focusing on practical applications of deep learning, using computer vision as a framework. Through six real-world projects, participants learn key AI techniques and how to apply them in real-world scenarios.",
    links: {},
  },
  {
    id: "image-conv3d",
    title: "Image Conv3D",
    summary: "Converting 2D images into interactive 3D models for AR.",
    image: imageConv3d,
    status: "planned",
    tech: ["ARKit", "Unity", "Computer Vision", "3D Modeling"],
    details:
      "Image Conv3D will explore converting 2D images into 3D objects using computer vision and machine learning, with ARKit for augmented reality and Unity for 3D modeling, to create real-time, interactive 3D models from static images.",
    links: {},
  },
  {
    id: "object-to-3d",
    title: "Real-Time Object to 3D",
    summary: "Detecting objects live and turning them into 3D representations.",
    image: objectTo3d,
    status: "planned",
    tech: ["Python", "TensorFlow", "OpenCV", "3D Modeling"],
    details:
      "This project will focus on real-time object detection and conversion into 3D models using TensorFlow and OpenCV, with applications in robotics, interactive environments, and product design.",
    links: {},
  },
  {
    id: "trauma-bot",
    title: "Trauma Bot",
    summary: "An empathetic AI chatbot offering immediate support during emotional distress.",
    image: traumaBot,
    status: "planned",
    tech: ["Python", "GPT-3", "NLP", "Flask"],
    details:
      "Trauma Bot will be an AI-driven chatbot that provides immediate support and guidance for people experiencing trauma or emotional distress, giving context-sensitive, empathetic responses and potentially integrating with mental health platforms.",
    links: {},
  },
  {
    id: "scam-shield",
    title: "Scam Shield",
    summary: "Mobile app that flags scam messages, calls, and phishing attempts.",
    image: scamShield,
    status: "planned",
    tech: ["React Native", "Firebase", "JavaScript"],
    details:
      "Scam Shield will be a cross-platform mobile app that analyzes incoming messages, calls, and online activity to detect suspicious patterns and protect users from scams, phishing, and fraud.",
    links: {},
  },
];
