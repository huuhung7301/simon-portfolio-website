import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pic4 from "../../Assets/Projects/pic4.png";
import pic3 from "../../Assets/Projects/pic5.png";
import pic1 from "../../Assets/Projects/pic1.png";
import pic2 from "../../Assets/Projects/pic2.png";
import pic6 from "../../Assets/Projects/pic6.png";

import classes from "./Projects.module.css";

function Projects() {
  return (
    <Container fluid className="project-section px-5">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "15px" }}>
          <Col md={6} className={classes["project-card"]}>
            <ProjectCard
              imgPath={pic1}
              isBlog={false}
              title="The Stock Insight"
              description="A full-stack finance solution leveraging Python for data retrieval from Investing.com and Yahoo Finance, extracting stock, commodity, and forex data. Using Next.js for the frontend ensures SEO optimization, while Graph.js visualizes stock charts. The application utilizes a serverless architecture with AWS Lambda and API Gateway for scalable API deployment. I implemented Docker and GitHub Actions for a seamless CI/CD pipeline, enabling automated testing and rapid deployment. Database performance is optimized with caching and query indexing, ensuring low latency and real-time updates."
              ghLink="https://stock-insight-next2.vercel.app/"
              demoLink="https://www.linkedin.com/posts/simon-pham-2b8144194_stockinsight-investment-fintech-activity-7224401815990059008-5Wtt?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className={classes["project-card"]}>
            <ProjectCard
              imgPath={pic6}
              isBlog={false}
              title="The News Podcast"
              description="An automated platform designed to deliver personalized, on-the-go audio news updates. The system leverages a Retrieval-Augmented Generation (RAG) AI bot integrated with a vector database for semantic search and optimized content retrieval. A collaborative filtering recommendation system tailors the news feed based on user preferences. The application is deployed on Azure Cloud with a Dockerized CI/CD pipeline for efficient containerization, scalability, and continuous integration. The frontend is built using the Blazor framework, ensuring a responsive, component-based architecture with real-time API interactions and state management."
              ghLink="https://the-news-podcast.azurewebsites.net/"
              demoLink="https://www.linkedin.com/posts/simon-pham-2b8144194_introducing-the-news-podcast-have-activity-7260998098460565504-T-5Y?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={6} className={classes["project-card"]}>
            <ProjectCard
              imgPath={pic3}
              isBlog={false}
              title="Profinder"
              description="Spearheaded the development of an innovative and user-centric tutor finding mobile application, leveraging Kotlin for Android devices. Employed NoSQL for flexible data storage and seamless online data management via Firebase."
              ghLink="https://github.com/huuhung7301/profinder"
            />
          </Col>
          <Col md={6} className={classes["project-card"]}>
            <ProjectCard
              imgPath={pic2}
              isBlog={false}
              title="Pair trading algorithm using python bot"
              description="The algorithm uses python as the backend, with the help of Correlation Analysis, Z-Score or Standardized Spread, Deviation:. The algorithm calculate the correlation, temporary deviation to figure out the best time to buy/sell and hedge."
              ghLink="https://github.com/huuhung7301/pyready_trader_go_simon"
            />
          </Col>

          <Col md={6} className={classes["project-card"]}>
            <ProjectCard
              imgPath={pic4}
              isBlog={false}
              title="Basic food ordering app"
              description="
              Developed a React food ordering app employing a modular component structure with props and state management. Styled components using module.css for clean styling. Leveraged useEffect for asynchronous operations. Demonstrated Redux for global state management and callbacks for inter-component communication."
              ghLink="https://github.com/huuhung7301/food_ordering_app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
