import React from "react";
import { Container, Card } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrackVisibility from 'react-on-screen';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

// Import icons (using react-icons; they will display in their natural colors)
import { FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaNodeJs, FaAws, FaMicrosoft } from 'react-icons/fa';
import {
  SiAngular, SiVuedotjs, SiExpress, SiMulesoft, SiGraphql, SiRedux,
  SiFlask, SiDjango, SiMysql, SiMongodb, SiGit, SiBitbucket, SiGithubactions, SiVmware, SiLinux
} from 'react-icons/si';

export const Skills = () => {
  // Define your skills data: each object represents one card.
  const skillsData = [
    {
      title: "Languages & Scripting",
      meterImg: meter1,
      skills: ["DataWeave 2.0", "RAML", "Java", "Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
      icons: [
        <FaHtml5 key="html" />,
        <FaCss3Alt key="css" />,
        <FaJsSquare key="js" />,
        <FaPython key="python" />,
        <FaJava key="java" />
      ]
    },
    {
      title: "Frameworks & Libraries",
      meterImg: meter2,
      skills: ["React.js", "Node.js", "Angular.js", "Vue.js", "Express.js", "MuleSoft", "GraphQL", "Redux", "Flask", "Django"],
      icons: [
        <SiAngular key="angular" />,
        <SiVuedotjs key="vue" />,
        <FaNodeJs key="node" />,
        <SiExpress key="express" />,
        <SiMulesoft key="mulesoft" />,
        <SiGraphql key="graphql" />,
        <SiRedux key="redux" />,
        <SiFlask key="flask" />,
        <SiDjango key="django" />
      ]
    },
    {
      title: "Databases",
      meterImg: meter3,
      skills: ["MySQL", "MongoDB", "MS SQL", "NoSQL"],
      icons: [
        <SiMysql key="mysql" />,
        <SiMongodb key="mongodb" />
        // Note: MS SQL icon omitted due to issues.
      ]
    },
    {
      title: "Tools & Platforms",
      meterImg: meter1,
      skills: ["Anypoint Platform", "Jenkins", "Git", "Confluence", "BitBucket", "GitHub Actions", "VMware", "Linux"],
      icons: [
        <SiMulesoft key="anypoint" />,
        <SiGit key="git" />,
        <SiBitbucket key="bitbucket" />,
        <SiGithubactions key="githubactions" />,
        <SiVmware key="vmware" />,
        <SiLinux key="linux" />
      ]
    },
    {
      title: "Cloud & DevOps",
      meterImg: meter2,
      skills: ["AWS (EC2, S3, Lambda)", "Azure", "REST APIs", "CI/CD (Jenkins, TravisCI)"],
      icons: [
        // Use FaAws and FaMicrosoft for a colorful display
        <FaAws key="aws" />,
        <FaMicrosoft key="azure" />
      ]
    }
  ];

  // Configure carousel responsiveness:
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills" style={{ padding: "80px 0", position: "relative" }}>
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 style={{
                textAlign: "center",
                fontSize: "45px",
                fontWeight: "700",
                marginBottom: "20px",
                color: "#fff"
              }}>
                Technical Skills
              </h2>
              <p style={{
                textAlign: "center",
                marginBottom: "40px",
                color: "#B8B8B8",
                fontSize: "18px"
              }}>
                I excel in a diverse set of technologies spanning full-stack development, API integrations, and cloud solutions.
              </p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={false}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                customTransition="all .5s"
                transitionDuration={500}
              >
                {skillsData.map((item, index) => (
                  <div key={index} style={{ padding: "15px" }}>
                    <Card className="skill-card" style={{
                      backgroundColor: "#151515",
                      borderRadius: "15px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                      border: "none",
                      overflow: "hidden",
                      transition: "transform 0.3s",
                      textAlign: "center",
                      color: "#fff",
                      padding: "20px"
                    }}
                      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-10px)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                    >
                      <Card.Img 
                        variant="top" 
                        src={item.meterImg} 
                        style={{ 
                          width: "40px", // Reduced meter size
                          margin: "10px auto",
                          display: "block"
                        }} 
                      />
                      <Card.Body style={{ padding: "10px" }}>
                        <Card.Title style={{ fontSize: "20px", marginBottom: "10px", color: "#fff" }}>
                          {item.title}
                        </Card.Title>
                        <div style={{
                          marginBottom: "10px",
                          display: "flex",
                          justifyContent: "center",
                          flexWrap: "wrap"
                        }}>
                          {item.icons.map((icon, idx) => (
                            <span key={idx} style={{ fontSize: "2.5rem", margin: "0 8px" }}>
                              {icon}
                            </span>
                          ))}
                        </div>
                        <Card.Text style={{
                          color: "#B8B8B8",
                          fontSize: "14px",
                          lineHeight: "1.4",
                          minHeight: "60px"
                        }}>
                          {item.skills.join(", ")}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Carousel>
            </div>
          }
        </TrackVisibility>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" style={{
        position: "absolute",
        left: 0,
        bottom: 0,
        width: "30%"
      }} />
    </section>
  );
};