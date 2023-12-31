import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
//import corsProxyUrl from "./corsProxy"; // Import the CORS proxy URL

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/DevashishChoudharyA/Devashish_Choudhary/main/src/Assets/Devashish%20Choudhary%20Resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://raw.githubusercontent.com/DevashishChoudharyA/Devashish_Choudhary/main/src/Assets/Devashish%20Choudhary%20Resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>
        

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://raw.githubusercontent.com/DevashishChoudharyA/Devashish_Choudhary/main/src/Assets/Devashish%20Choudhary%20Resume.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <ScrollToTop />
      </Container>
    </div>
  );
}

export default ResumeNew;
// https://raw.githubusercontent.com/DevashishChoudharyA/Devashish_Choudhary//src/Assets/Devashish%20Choudhary%20Resume.pdf
// https://github.com/DevashishChoudharyA/Devashish_Choudhary/blob/b06ee7e2b05ee329cea7ad83d8c8d3201e4f20d7/src/Assets/Devashish%20Choudhary%20Resume.pdf