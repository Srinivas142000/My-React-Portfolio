import React from "react";
import BlockquoteWithImage from "./Quotes";
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdb-react-ui-kit";
import headerImg from "../assets/img/meback.jpg";
import scholarship from "../assets/img/scholarship.png";
import software from "../assets/img/software.png";
import awards from "../assets/img/awards.png";
import hackathon from "../assets/img/hackathon.png";
import certificates from "../assets/img/certificate.png";
import { Timeline }  from "./Timeline";

export const AboutMe = () => {
  const metrics = [
    { label: "Scholarships Awarded", value: "1", imgsrc: scholarship },
    { label: "Years of Technical Experience", value: "2+", imgsrc: software },
    { label: "Hackathons Victory", value: "3", imgsrc: hackathon },
    { label: "Work Awards", value: "5", imgsrc: awards },
    { label: "Certificates & Licenses", value: "10", imgsrc: certificates },
  ];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          opacity: 0.3,
        }}
      ></div>

      <MDBContainer
        fluid
        className="py-5"
        style={{
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <BlockquoteWithImage
            authors={["Thomas Edison", "Aristotle"]}
            quotes={[
              "There’s a way to do it better – find it.",
              "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
            ]}
          />

          {/* Metrics Section */}
          <MDBRow className="mt-5">
            {metrics.map((metric, index) => (
              <MDBCol key={index} md="6" lg="3" className="mb-4">
                <MDBCard
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    textAlign: "center",
                    border: "none",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  className="card-hover"
                >
                  <MDBCardBody>
                    <MDBIcon fas size="3x" className="mb-3" />
                    <img
                      src={metric.imgsrc}
                      alt={metric.label}
                      style={{
                        width: "100%",
                        height: "auto",
                        marginBottom: "15px",
                      }}
                    />
                    <h3 style={{ fontWeight: "bold" }}>{metric.value}</h3>
                    <p style={{ fontSize: "1rem" }}>{metric.label}</p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </div>
      </MDBContainer>
      <style>
        {`
          .card-hover:hover {
            transform: scale(1.05); /* Slightly enlarges the card */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Adds a shadow on hover */
          }
        `}
      </style>

      <Timeline />
    </div>
  );
};
