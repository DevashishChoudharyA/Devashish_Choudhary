import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body justify" data-aos="fade-up">
              <br />
              <div  style={{textAlign:"justify", width:"90%"}}>
A Software Engineer – an innovative, creative, and resourceful problem solver with a 
passion for building cutting-edge solutions! 🎯 With a love for coding that runs deep in me, I have 
this uncanny ability to transform complex challenges into elegant and  efficient software masterpieces. 💡
<br /> <br />
I am passionate about technologies and love to learn new things. I am more interested in building new 
technologies and products. I always apply my experience in developing products with Node.js and Django
and Modern Javascript Library Framework like React.js.
              <br /><br />


But Alongside brilliant coding prowess, I am an empathetic collaborator and an 
exceptional&nbsp; team player. Working &nbsp;side by side&nbsp; with me &nbsp;guarantees a delightful and 
inspiring journey for all! 👥 So, if you're seeking a  Software Engineer who not 
only dreams big but also turns those dreams into reality with finesse and flair,
you've found the one! Together, let's embark on an adventure that will redefine the  
boundaries of  innovation and redefine the future! 🚀💻
              
             
              <br />
              <br />
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar center">
            <br /> <br /> <br /> <br /><br />
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/DevashishChoudharyA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="mailto:choudharydev836@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/devashishch/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/devashishchoudhary1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
