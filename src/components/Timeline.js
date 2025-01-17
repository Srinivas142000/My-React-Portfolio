import React, { useState } from "react";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "../App.css"; // Import custom CSS for styling

export const Timeline = () => {
  const [modalData, setModalData] = useState(null); // Modal state

  const timelineData = [
    {
      date: "January 2022 - June 2022",
      title: "Internship - Comcast",
      description:
        "Worked on integrating GitHub and JIRA, developed AR solutions, and contributed to customer-facing projects.",
      badgeColor: "success",
    },
    {
      date: "July 2022",
      title: "Graduated from SASTRA University - First Class with Distinction",
      description:
        "Bachelor of Technology in Computer Science and Engineering. Graduated First Class with Distinction.",
      badgeColor: "info",
    },
    {
      date: "June 2022 - August 2024",
      title: "Development Engineer 1 - Comcast",
      description:
        "Contributed to various development projects, enhancing system performance and delivering solutions for clients.",
      badgeColor: "primary",
    },
    {
      date: "September 2024 - Present",
      title: "Scholarship Student - Northeastern University",
      description:
        "Pursuing a Master of Science in Computer Science with a GPA of 4.0/4.0. Relevant coursework includes Programming Design Paradigm and Algorithms.",
      badgeColor: "danger",
    },
    {
      date: "January 2025 - Present",
      title: "World Quant University",
      description:
        "Pursuing a Master of Science in Financial Engineering.",
      badgeColor: "primary",
    },
  ];

  const handleButtonClick = (eventData) => {
    setModalData(eventData); // Set modal data to display
  };

  const handleCloseModal = () => {
    setModalData(null); // Close modal by resetting modalData
  };

  return (
    <MDBContainer
      fluid
      className="py-5"
      style={{ background: "linear-gradient(135deg, #6a0dad, #000)", color: "#fff" }}
    >
      <MDBRow>
        <MDBCol lg="12">
          <div className="horizontal-timeline">
            <MDBTypography listUnStyled className="timeline-items">
              <h1 className="text-center">My Timeline</h1>
              {timelineData.map((event, index) => (
                <li key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div className={`event-date badge bg-${event.badgeColor}`}>
                      {event.date}
                    </div>
                    <h5 className="pt-2">{event.title}</h5>
                    {event.description && (
                      <MDBBtn
                        color="light"
                        size="sm"
                        onClick={() => handleButtonClick(event)} // Pass event data to modal
                      >
                        Read More
                      </MDBBtn>
                    )}
                  </div>
                </li>
              ))}
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>

      {/* Modal for detailed description */}
      {modalData && (
        <MDBModal show={true} tabIndex="-1" onHide={handleCloseModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <h5 className="modal-title">{modalData.title}</h5>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={handleCloseModal}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  <strong>Date:</strong> {modalData.date}
                </p>
                <p>{modalData.description}</p>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={handleCloseModal}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      )}

      {/* Custom styling for the timeline */}
      <style>
        {`
          .horizontal-timeline {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .timeline-items {
            list-style-type: none;
            padding: 0;
          }
          .timeline-item {
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease-in-out;
          }
          .timeline-item:hover {
            transform: scale(1.05);
          }
          .event-date {
            font-size: 0.9rem;
            padding: 5px 10px;
            border-radius: 20px;
          }
          .timeline-content h5 {
            margin: 0.5rem 0;
            font-size: 1.2rem;
          }
          .timeline-content p {
            font-size: 0.9rem;
            color: #ddd;
          }
        `}
      </style>
    </MDBContainer>
  );
};
