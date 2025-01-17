import React from 'react';
import { Card, CardGroup, Button, Modal, ListGroup } from 'react-bootstrap';
import "../css/MoreProjs.css"

export const MoreCards = ({ projects }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(null);

  const handleShowModal = (project) => {
    setModalContent(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="more-cards-container">
      {/* Display cards based on filtered projects */}
      <CardGroup className="project-cards">
        {projects.map((project, index) => (
          <Card key={index} className="project-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.imgUrl || 'placeholder-image.jpg'} />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Technologies: {project.technologies.join(', ')}</ListGroup.Item>
              <ListGroup.Item>Status: {project.status}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary" onClick={() => handleShowModal(project)}>
                View Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

      {/* Modal for project details */}
      <Modal show={showModal} onHide={handleCloseModal} centered className="custom-modal">
        <Modal.Body className="modal-body-background">
        <Modal.Title>{modalContent?.title}</Modal.Title>
          <p><strong>Description:</strong> {modalContent?.additionalInformation}</p>
          <p><strong>Technologies:</strong> {modalContent?.technologies.join(', ')}</p>
          <p><strong>Status:</strong> {modalContent?.status}</p>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
