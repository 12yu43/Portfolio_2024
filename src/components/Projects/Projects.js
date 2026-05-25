import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Executive Headlines"
              description="A comprehensive news and media platform built with React.js and Next.js. Integrated SEO optimization for better search engine visibility. Features include real-time news updates, content management system, and responsive design with modern UI/UX."
              demoLink="https://executiveheadlines.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Retreats of India"
              description="Tourism and retreat booking platform developed with full-stack technologies. Integrated payment gateway for secure transactions. Built with React.js frontend, Node.js backend, and MongoDB database. Features include user authentication, booking management, and admin dashboard."
              demoLink="https://retreatsofindia.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Clarity Mentor"
              description="Educational mentoring platform built with React and Next.js. Implemented AI chatbot for 24/7 student support and query resolution. Features include live mentor sessions, video streaming, progress tracking, and personalized learning paths."
              demoLink="https://claritymentor.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="HR One"
              description="Human Resources Management System built with React.js and Next.js. Features include employee management, payroll system, attendance tracking, and leave management. Integrated payment gateway for salary processing. Deployed on Vercel with automated CI/CD pipeline."
              demoLink="https://hrone-kappa.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Home Maintenance"
              description="Home maintenance service booking platform built with Angular and React.js. Integrated payment gateway for service payments. Features include service provider management, booking system, customer reviews, and server deployment on cloud. Built with Node.js backend and MySQL database."
              demoLink="https://www.homemaintenances.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Doon Silk"
              description="E-commerce platform for silk products built with React.js and Next.js. Implemented SEO optimization for improved search rankings. Features include product catalog, shopping cart, payment gateway integration, order tracking, and inventory management system. Server deployed with optimized performance."
              demoLink="https://doonsilk.com/"
            />
          </Col>

                 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
