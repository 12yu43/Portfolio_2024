import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Deeksha Awasthi </span>
            from <span className="purple"> Noida, Uttar Pradesh, India. </span>
            <br />
            I am a <span className="purple">Full-Stack Developer</span> in <span className="purple">5+ years of experience</span> in building dynamic and responsive web applications.
            <br />
            I have completed my Master of Computer Application (MCA) from AKTU University, Greater Noida.
            <br />
            <br />
            I specialize in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Frontend Development:</strong> React.js, Next.js, Angular, React Native with JavaScript, HTML, and CSS
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Backend Development:</strong> Node.js, Java, Python with RESTful APIs and microservices
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Payment Gateway Integration:</strong> Stripe, Razorpay, and other payment solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>AI & ChatBot Development:</strong> Building intelligent chatbots for customer support and automation
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>SEO Optimization:</strong> Implementing best practices for search engine visibility and performance
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Server Deployment:</strong> Vercel, Heroku, AWS, and cloud platforms
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>Database Management:</strong> MongoDB, MySQL, and other database systems
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            I create modern, user-friendly interfaces that enhance user experiences and write clean, maintainable code. Passionate about leveraging new web technologies, solving complex problems, and collaborating with teams to deliver high-quality products that exceed expectations.
          </p>

          <p style={{ textAlign: "justify", marginTop: "15px" }}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Deeksha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
