import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import nyu from "../assets/img/nyu-tandon.jpg"
import csulb from "../assets/img/csulb.png"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const Projects = () => {
    const education = [{
        university: "New York University",
        location: "Brooklyn, NY",
        degree: "Masters of Science - Computer Engineering",
        gradDate: 'May 2024',
        imgUrl: nyu
    },
    {
        university: "Long Beach State University",
        location: "Long Beach, CA",
        degree: "Bachelors of Science - Computer Science",
        gradDate: 'May 2021',
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
                                <Tab.Pane eventKey="second">
                                    <VerticalTimeline>
                                        <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            contentStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                                            date="June 2023 - Present"
                                            iconStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                                        // icon={<WorkIcon />}
                                        >
                                            <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
                                            <h5 className="vertical-timeline-element-subtitle">Technical Consulting and Research, Inc</h5>
                                            <h6 className="vertical-timeline-element-subtitle">New York, NY</h6>
                                            <p></p>
                                            <ul>
                                                <li>Demonstrated exceptional leadership and expertise in spearheading end-to-end development and maintenance of a cutting-
                                                    edge medical website for the company.</li>
                                                <li>Led development of a user-friendly medical website, utilizing React for captivating frontend pages and integrating
                                                    Auth0 for robust authentication and managed backend operations using Express.js, optimizing data processing and
                                                    server performance.</li>
                                                <li>Collaborated effectively in a 3-member team, providing weekly updates to ensure transparency and achieved seamless
                                                    teamwork.</li>
                                            </ul>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            contentStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                                            className="vertical-timeline-element--work"
                                            date="August 2021 - June 2022"
                                            iconStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                                        // icon={<WorkIcon />}
                                        >
                                            <h3 className="vertical-timeline-element-title">Junior Engineer</h3>
                                            <h5 className="vertical-timeline-element-subtitle">Karsun Solutions llc</h5>
                                            <h6 className="vertical-timeline-element-subtitle">Herndon, VA</h6>
                                            <p></p>
                                            <ul>
                                                <li>Designed and developed web-based application using Angular framework and JavaScript programming language to
                                                    generate reports for government clients, resulting in a 30% increase in efficiency and accuracy of report generation.</li>
                                                <li>Created a user-friendly UI utilizing forms and existing Angular component libraries such as PrimeNg, resulting in a
                                                    60% improvement in user satisfaction and adoption.</li>
                                                <li>Implemented form validations and utilized REST services to deliver data to backend, resulting in a 25% reduction in
                                                    data entry errors and increasing data accuracy.</li>
                                            </ul>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            contentStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                                            className="vertical-timeline-element--work"
                                            date="June 2020 - August 2020"
                                            iconStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                                        // icon={<WorkIcon />}
                                        >
                                            <h3 className="vertical-timeline-element-title">DevOps Intern</h3>
                                            <h5 className="vertical-timeline-element-subtitle">Karsun Solutions llc</h5>
                                            <h6 className="vertical-timeline-element-subtitle">Herndon, VA</h6>
                                            <p></p>
                                            <ul>
                                                <li>Applied Continuous Delivery (CD) and Continuous Integration (CI) practices to develop high-quality applications
                                                    for the company, resulting in faster development time and improved application quality.</li>
                                                <li>Developed custom chatbots using Google AppScript and JavaScript to streamline group chat communication, featuring a chatroom creation tool 
                                                    for selected members, resulting in increased team productivity and improved collaboration
                                                    across cross-functional teams.</li>
                                                <li>Collaborated with DevOps lead and cross-functional teams to optimize development and delivery processes, which resulted
                                                    in a 30% reduction in operational costs and a 15% increase in revenue.</li>
                                            </ul>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                        // icon={<StarIcon />}
                                        />
                                    </VerticalTimeline>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Random text</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='' />
        </section>
    );
}