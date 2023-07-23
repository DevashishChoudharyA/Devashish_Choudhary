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
              <div className="text-center justify-center">
A Software Engineer – an innovative, creative, and resourceful problem solver with a <br />
passion 
for building cutting-edge solutions! 🎯 With a love for coding that runs deep <br />in me, I have 
this uncanny ability to &nbsp;transform&nbsp; complex challenges &nbsp;into elegant &nbsp;and <br /> efficient software masterpieces. 💡
<br /> <br />
I am passionate about{" "}
              <i className="primary-header">technologies</i> and love to learn
              new things.
            
             I am more interested <br />in building new
              <i>
                <i className="primary-header"> Technologies and Products.</i>
              </i>
              
              I &nbsp;always apply my experience in developing <br />products with{" "}
              <i className="primary-header">Node.js and Django</i> and Modern&nbsp; Javascript
              Library&nbsp; and&nbsp; Framework like <br />
              <i className="primary-header"> React.js.</i>
              <br /><br />


But Alongside &nbsp;my&nbsp; brilliant&nbsp; coding&nbsp; prowess, &nbsp;I am an &nbsp;empathetic collaborator and an <br />
exceptional&nbsp; team player. Working &nbsp;side by side&nbsp; with me &nbsp;guarantees a&nbsp; delightful&nbsp; and  <br />
inspiring &nbsp;journey&nbsp; for all!&nbsp; 👥 So, if&nbsp; you're&nbsp; seeking a&nbsp;  Software Engineer who not 
only <br /> dreams big but also turns those dreams into reality with finesse and flair,
you've found <br /> the one! &nbsp;Together, let's &nbsp;embark &nbsp;on an &nbsp;adventure &nbsp;that will &nbsp;redefine the  boundaries of  <br />innovation and redefine the future! 🚀💻
              
             
              <br />
              <br />
              </div>
            </p>
          </Col>
          <Col md={4} className="myAvtar center">
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
                  href="https://github.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Rahuljha4171"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:rahuljha4171@outlook.com"
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
                  href="https://www.linkedin.com/in/Rahuljha4171/"
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
                  href="https://www.instagram.com/dead.programmer/"
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
