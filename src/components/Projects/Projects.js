import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pic4 from "../../Assets/Projects/pic4.png";
import pic3 from "../../Assets/Projects/pic5.png";
import pic1 from "../../Assets/Projects/pic1.png";
import pic2 from "../../Assets/Projects/pic2.png";
import classes from "./Projects.module.css";
import Modal from "./Modal"; // Import the Modal component

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  // Function to open the modal with a title
  const openModal = (title) => {
    setModalTitle(title);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalTitle("");
    setShowModal(false);
  };

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
        <Row style={{ justifyContent: "center", paddingBottom: "15px" }}>
          <Col md={6} className={classes["project-card"]} onClick={() => openModal("Insight Stock")}>
            <ProjectCard
              imgPath={pic1}
              isBlog={false}
              title="Insight Stock"
              description="Python is utilized for data retrieval from the investing.com website and data storage. It is using dynamic programming algorithms to calculate indexes figures and generate data APIs to send back to the frontend. Aws lambda and API gateway is being used to host API online. EC2, elastic IP is used to host website.
              The website's frontend is developed using React, with the help of Graph.js to visualize the stock charts"
              demoLink="https://github.com/huuhung7301"
              
            />
          </Col>

          <Col md={6} className={classes["project-card"]} onClick={() => openModal("Profinder")}>
            <ProjectCard
              imgPath={pic2}
              isBlog={false}
              title="Profinder"
              description="Spearheaded the development of an innovative and user-centric tutor finding mobile application, leveraging Kotlin for Android devices. Employed NoSQL for flexible data storage and seamless online data management via Firebase."
              ghLink="https://github.com/huuhung7301/profinder"
              
            />
          </Col>
          <Col md={6} className={classes["project-card"]} onClick={() => openModal("tradingbot")}>
            <ProjectCard
              imgPath={pic3}
              isBlog={false}
              title="Pair trading algorithm using python bot"
              description="The algorithm uses python as the backend, with the help of Correlation Analysis, Z-Score or Standardized Spread, Deviation:. The algorithm calculate the correlation, temporary deviation to figure out the best time to buy/sell and hedge."
              ghLink="https://github.com/huuhung7301/pyready_trader_go_simon"
              
            />
          </Col>

          <Col md={6} className={classes["project-card"]} onClick={() => openModal("Food")}>
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

      {showModal && (
        <Modal closeModal={closeModal} title={modalTitle}>
          <h2>{modalTitle}</h2>
          <button className={classes["modal-close"]} onClick={closeModal}>
            Close
          </button>
        </Modal>
      )}
    </Container>
  );
}

export default Projects;
