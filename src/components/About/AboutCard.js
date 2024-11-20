import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Simon Pham </span>
            <br />
            <br />
            An enthusiastic full-stack software developer with experience in
            building scalable and high-performance applications. I am proficient
            in both serverless and server-based architectures, selecting optimal
            cloud solutions for performance and cost using cloud technologies in
            AWS, Azure.
            <br />
            <br />
            Proficient in building scalable, high-performance applications using
            Next.js, Typescript for maintainable code, server-side rendering and
            SEO optimization, React framework + Tailwind/Bootstrap for dynamic,
            responsive user interfaces. Experienced in developing robust
            back-end services with Node.js, Python, and leveraging Prisma for
            efficient database management. In addition, optimize database
            hosting with caching, indexing, virtual private cloud set up.
            <br />
            <br />
            With a strong focus on building scalable, cost-effective, and
            high-performance applications, I am eager to contribute my skills to
            a dynamic team and drive impactful solutions.
            <br />
          </p>
          <footer className="blockquote-footer">Simon Pham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
