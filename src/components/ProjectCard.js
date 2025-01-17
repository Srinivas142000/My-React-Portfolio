import { useState } from "react";
import { Col, Row, Modal, Button } from "react-bootstrap"; // Ensure Row is imported

export const ProjectCard = ({ title, description, imgUrl, additionalInformation }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <style>
        {`
          /* Project Card Styles */
          .proj-imgbx {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s ease-in-out;
            text-align: center;
          }

          .proj-imgbx:hover {
            transform: scale(1.05);
          }

          .proj-img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .proj-txtx {
            position: absolute;
            top: 50%; /* Vertically center */
            left: 50%; /* Horizontally center */
            transform: translate(-50%, -50%); /* Adjust for exact center */
            color: white;
            background: rgba(0, 0, 0, 0.5);
            padding: 10px;
            border-radius: 5px;
            text-align: center;
          }

          .proj-txtx h4 {
            margin: 0;
            font-size: 18px;
          }

          .proj-txtx span {
            font-size: 14px;
          }


          .project-modal .modal-header {
            padding: 20px;
            background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%); /* Add gradient background */
            background-color: #f8f9fa; /* You can adjust this or add gradient if desired */
          }

          .project-modal .modal-body {
          padding: 20px;
            background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%); /* Add gradient background */
            padding: 20px;
          }

          .project-modal .modal-header {
            padding: 20px;
            background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%); /* Add gradient background */
            color: black;
          }

          .project-modal .modal-footer {
            padding: 20px;
            background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%); /* Add gradient background */
            color: black;
          }

          .modal-img {
            width: 100%;
            max-width: 150px;
            border-radius: 5px;
            margin-left: auto;
          }

          .modal-body p {
            font-size: 16px;
            line-height: 1.6;
            color: black
          }

          /* Button Styling */
          .modal-footer .btn-secondary {
            background-color: #007bff;
            color: white;
            border: none;
          }

          .modal-footer .btn-secondary:hover {
            background-color: #0056b3;
            color: black;
          }
        `}
      </style>

      <Col size={12} sm={6} md={4}>
        <div 
          className="proj-imgbx" 
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        >
          <img 
            src={imgUrl} 
            alt={title} 
            className="proj-img"
          />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleClose} centered className="project-modal">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={8}>
              <p>{additionalInformation}</p>
            </Col>
            <Col md={4} className="d-flex align-items-center">
              <img 
                src={imgUrl} 
                alt={title} 
                className="modal-img"
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <p><strong>Technologies Used:</strong> {description}</p>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
