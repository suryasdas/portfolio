import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import nyu from "../assets/img/nyu-tandon.jpg"
import csulb from "../assets/img/csulb.png"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"


export const Projects = () => {
    const education = [{
        university: "New York University",
        location:"Brooklyn, NY",
        degree: "Masters of Science - Computer Engineering",
        gradDate:'May 2024',
        imgUrl: nyu
    },
    {
        university: "Long Beach State University",
        location:"Long Beach, CA",
        degree: "Bachelors of Science - Computer Science",
        gradDate:'May 2021',
        imgUrl: csulb
    }];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Experience</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey='first'>
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Education</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            education.map((education, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...education} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Random text</Tab.Pane>
                                <Tab.Pane eventKey="third">Random text</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right"src={colorSharp2} alt=''/>
        </section>

    );
}