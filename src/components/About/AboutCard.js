import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simon Pham </span>
            <br/>
            <br/>Enthusiastic entry-level full-stack software developer with a track
            record of creating numerous personal projects during my studies.
            <br/>
            <br/>
            Proficient in mastering HTML and CSS to craft captivating user
            interfaces, programming browsers using JavaScript, jQuery, and
            React, and building robust servers with languages like PHP, Python,
            and Node.js. 
            <br/>
            <br/>My passion for coding extends beyond the classroom, as
            I've dedicated my time to hands-on projects that demonstrate my
            ability to create efficient and user-friendly applications. 
            <br/>
            <br/>I am
            eager to apply these skills in a professional setting, collaborating
            with a dynamic team and contributing to your organization's success.
          </p>
          <footer className="blockquote-footer">Simon Pham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
