import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";


import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import car from "../../Assets/Projects/car.png";
import FLIGHT from "../../Assets/Projects/FLIGHT.png";
import tb_real from "../../Assets/Projects/tb_real.png";
import credit from "../../Assets/Projects/credit.jpg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E Cart"
              description="This is a fully functional eCommerce website that uses React.js + MUI and CSS in the front end and NodeJs and express js in backend and MongoDb as Database."
              ghLink="https://github.com/DevashishChoudharyA/E-Commerce-Website"
              demoLink="https://github.com/DevashishChoudharyA/E-Commerce-Website"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://devashishchoudharya.github.io/Devashish_Choudhary/"
              demoLink="https://devashish-choudhary.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={tb_real}
              title="Bangalore House Price Prediction System"
              description="A Personal Machine Learning based Application based on the problems of Real Estate Sector build for the people who want an approximate idea of the cost of poperty depending upon certain factors. Built with react.js, Flask , Python , and deployed using render. Have features which allows user to check prices by varying various factors."
              ghLink="https://github.com/DevashishChoudharyA/Car-Price-Prediction"
              demoLink="https://car-price-prediction-sdpw.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={FLIGHT}
              title="Flight Price Estimator"
              description="Flight price Estimator is a web application which can help you plan and save a lot of money by getting the estimate prices of tickets by entering the dates of travel and boarding and destination location. It used HTML , CSS and JavaScript for Front End and Flask for Backend and deployed using Render . "
              ghLink="https://github.com/DevashishChoudharyA/Flight-Price-Estimator"
              demoLink="https://flight-price-2zys.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={credit}
              title="Credit Risk Analysis"
              description="The credit risk analysis project aimed to assess the creditworthiness and potential risks associated with the loan portfolio of XYZ Financial Institution. Through a comprehensive analysis of borrower data, financial statements, and credit histories, the project aimed to identify potential areas of concern and provide recommendations for effective risk management. "
              ghLink="https://github.com/DevashishChoudharyA/Credit-Risk-Analysis"
              demoLink="https://github.com/DevashishChoudharyA/Credit-Risk-Analysis"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={car}
              title="Expense Tracker"
              description="Car Price Predictor is a project based on Machine Learning which is a web application that can be used to estimate the current price of a car based on various factors such as number of kilometers driven , acquisition year , etc. This web app's Front End was built using React and JavaScript and the BackEnd was built using Django and deployed using Render. "
              ghLink="https://github.com/DevashishChoudharyA/Car-Price-Prediction"
              demoLink="https://car-price-prediction-sdpw.onrender.com/"
            />
          </Col>
          
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
