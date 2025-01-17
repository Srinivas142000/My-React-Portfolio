import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function BlockquoteWithImage({ authors, quotes }) {
  const gradientClasses = [
    "linear-gradient(135deg, #6a11cb, #2575fc)", // Purple to blue gradient
    "linear-gradient(135deg, #7b4397, #dc2430)", // Purple to red gradient
    "linear-gradient(135deg, #512da8, #673ab7)", // Deep purple tones
    "linear-gradient(135deg, #9c27b0, #e040fb)", // Bright purple gradient
  ]; // Purple gradient backgrounds for cards

  const captions = ["What is my Motto?", "What keeps me going?"]; // Captions for each quote

  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the currently displayed quote
  const [isFading, setIsFading] = useState(false); // Controls fade-in animation

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fade-out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Update index
        setIsFading(false); // Start fade-in
      }, 500); // Duration of fade-out
    }, 5000); // Display each card for 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [quotes.length]);

  return (
    <section
      style={{
        paddingTop: "6rem",
        paddingBottom: "2rem",
        color: "#fff",
      }}
    >
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-stretch">
          <MDBCol
            md="10"
            lg="8" // Restored to original width
            className="mb-4 d-flex justify-content-center"
          >
            <MDBCard
              className={`text-white rounded-3 w-100`}
              style={{
                padding: "2rem",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.4)", // Depth shadow
                background: gradientClasses[currentIndex % gradientClasses.length],
                opacity: isFading ? 0 : 1, // Fade-in/out effect
                transition: "opacity 0.5s ease-in-out", // Smooth animation
              }}
            >
              <MDBCardBody className="d-flex flex-column justify-content-center align-items-center">
                <figure className="mb-0 text-center">
                  <MDBTypography blockquote>
                    <p
                      className="pb-2"
                      style={{
                        fontSize: "1.5rem", // Slightly larger for readability
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      {quotes[currentIndex]}
                    </p>
                  </MDBTypography>
                  <figcaption
                    className="blockquote-footer mt-2 text-white"
                    style={{
                      fontSize: "1rem", // Standard size for author
                      opacity: 0.85,
                    }}
                  >
                    {authors[currentIndex]}
                  </figcaption>
                </figure>
                <div
                  style={{
                    marginTop: "1rem",
                    padding: "0.5rem 1rem",
                    backgroundColor: "#ffffff22", // Slightly transparent white
                    borderRadius: "10px",
                  }}
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      fontSize: "1.1rem",
                      color: "#EDE7F6", // Light purple for contrast
                    }}
                  >
                    {captions[currentIndex] || "No caption provided"}
                  </span>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
