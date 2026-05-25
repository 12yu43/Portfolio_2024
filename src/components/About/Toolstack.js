import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode, 
  SiRedux, 
  SiJira, 
  SiSonarqube, 
  SiGithub,
  SiStripe,
  SiRazorpay,
  SiGoogleanalytics,
  SiVercel,
  SiHeroku
} from "react-icons/si"; 
import { FaProjectDiagram, FaRobot, FaServer, FaSearchengin } from "react-icons/fa"; 


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux /> {/* Redux */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /> {/* Jira */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram /> {/* Agile Methodology */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube /> {/* SonarQube */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStripe /> {/* Payment Gateway - Stripe */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRazorpay /> {/* Payment Gateway - Razorpay */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRobot /> {/* AI Chatbot */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSearchengin /> {/* SEO */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Server Deployment - Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku /> {/* Server Deployment - Heroku */}
      </Col>
    </Row>
  );
}

export default Toolstack;
