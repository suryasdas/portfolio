import { Col, Container, Row, Nav, Tab } from "react-bootstrap"
import nyu from "../assets/img/nyu-tandon.jpg"
import csulb from "../assets/img/csulb.png"
import awsconcierge from "../assets/img/chatbot.jpg"
import voluncheer from "../assets/img/voluncheer.png"
import transcribelt from "../assets/img/transcribelt.png"
import name from "../assets/img/name.png"
import tcr from "../assets/img/tcr.jpeg"
import gp from "../assets/img/gp.webp"
import karsun from "../assets/img/karsun.jpeg"
import album from "../assets/img/album.png"
import messaging from "../assets/img/messaging.png"
//import {nyu, csulb, awsconcierge, voluncheer} from "../assets/img/"
import { EducationCard, ProjectCard, ExperienceCard } from "./Cards"
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

    const projects = [{
        title: "Reservation Chatbot",
        tags: ["AWS", "JavaScript"],
        description: "Chatbot which creates restaurant reservations based on a questionnaire.",
        imgUrl: awsconcierge,
        githubUrl: "https://github.com/suryasdas/dining-concierge"
    },
    {
        title: "Voluncheer",
        tags: ["AWS", "Django", "Python", "HTML"],
        description: "Webapp designed to enhance community engagement by increasing volunteering opportunities.",
        imgUrl: voluncheer,
        githubUrl: "https://github.com/gcivil-nyu-org/INET-Monday-Spring2023-Team-2"
    },
    {
        title: "TranscriBelt",
        tags: ["AWS", "React", "Node.js", "Python", "Next.js"],
        description: "SaaS application that creates transcripts for videos and enables users to add comments and generate summaries.",
        imgUrl: transcribelt,
        githubUrl: "https://github.com/MayankTamakuwala/TranscriBelt"
    },
    {
        title: "AI Chatflow",
        tags: ["AWS", "OpenAI", "WebSockets", "React","Docker"],
        description: "Real-time messaging platform with features improving user engagement and communication efficiency.",
        imgUrl: messaging,
        githubUrl: "https://github.com/nicksome168/aws-ai-chatflow"
    },
    {
        title: "Smart Photo Album",
        tags: ["React", "AWS", "Kubernetes"],
        description: "Web app for managing photo albums, enabling users to search through images seamlessly using natural language inputs.",
        imgUrl: album,
        githubUrl: "https://github.com/suryasdas/smart-photo-album"
    },
    {
        title: "Portfolio",
        tags: ["React", "Typescript","Tailwind"],
        description: "A professional portfolio website showcasing skills, projects, and experience, designed to highlight expertise and attract potential clients or employers.",
        imgUrl: name,
        githubUrl: "https://github.com/suryasdas/portfolio"
    },
    ];

    const experience = [
        {
            date: "January 2024 – May 2024",
            company: "GreenPortfolio",
            title: "Software Developer Intern ",
            location: "New York, NY",
            logo: gp,
            description: [
                "Employed Python with Pandera library and integrated BigQuery for optimized data storage, to validate and maintain database schema integrity and ensuring data accuracy.",
                "Automated unit tests to verify data frames against BigQuery, boosting the reliability of data inputs for machine learning models.",
                "Validated and formatted hundreds of data points to develop an internal API, facilitating real-time data transmission to Bubble enhancing the user interface.",
                "Architected a function to summarize data and generate reports using OpenAI API, Google Appsheets streamlining report generation and improving decision-making processes.",
                "Programmed a new pipeline that ingests data from the SEC to create a matching service algorithm for clients and advisors, aiming toenhance service delivery."
        ]
        },
        {
            date: "June 2023 - August 2023",
            company: "Technical Consulting and Research, Inc",
            title: "Software Development Intern",
            location: "New York, NY",
            logo: tcr,
            description: [
                "Demonstrated exceptional leadership and expertise in spearheading end-to-end development and maintenance of a cutting-edge medical website for the company.",
                "Led development of a user-friendly medical website, utilizing React for captivating frontend pages and integrating Auth0 for robust authentication and managed backend operations using Express.js, optimizing data processing and server performance.",
                "Collaborated effectively in a 3-member team, providing weekly updates to ensure transparency and achieved seamless teamwork."
            ]
        },
        {
            date: "August 2021 - June 2022",
            company: "Karsun Solutions LLC",
            title: "Software Engineer",
            location: "Herndon, VA",
            logo: karsun,
            description: [
                "Designed and developed web-based application using Angular framework and JavaScript programming language to generate reports for government clients, resulting in a 30% increase in efficiency and accuracy of report generation.",
                "Created a user-friendly UI utilizing forms and existing Angular component libraries such as PrimeNg, resulting in a 60% improvement in user satisfaction and adoption.",
                "Implemented form validations and utilized REST services to deliver data to backend, resulting in a 25% reduction in data entry errors and increasing data accuracy."
    ]
        },
        {
            date: "June 2020 - August 2020",
            company: "Karsun Solutions LLC",
            title: "Software Engineering Intern",
            location: "Herndon, VA",
            logo: karsun,
            description: [
                "Applied Continuous Delivery (CD) and Continuous Integration (CI) practices to develop high-quality applications for the company, resulting in faster development time and improved application quality.",
                "Developed custom chatbots using Google AppScript and JavaScript to streamline group chat communication, featuring a chatroom creation tool for selected members, resulting in increased team productivity and improved collaboration across cross-functional teams.",
                "Collaborated with DevOps lead and cross-functional teams to optimize development and delivery processes, which resulted in a 30% reduction in operational costs and a 15% increase in revenue."
            ]
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>EXPERIENCE</h2>
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
                                    <Row className="justify-content-md-center gap-2" >
                                        <div class="justify-items-center grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl">
                                        {
                                            education.map((education, index) => {
                                                return (
                                                    
                                                        <EducationCard
                                                            key={index}
                                                            {...education} />
                                                    
                                                )
                                            })
                                        }
                                        </div>                                        
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <VerticalTimeline>
                                        {
                                            experience.map((experience, index) => {
                                                return (

                                                    <ExperienceCard
                                                        key={index}
                                                        index={index}
                                                        {...experience} />

                                                )
                                            })
                                        }
                                        <VerticalTimelineElement
                                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                                        //icon={<StarIcon />}
                                        />

                                    </VerticalTimeline>



                                </Tab.Pane>


                                <Tab.Pane eventKey="third">
                                    <Row className="justify-content-md-center g-4">
                                        <div class="justify-items-center grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
                                            {projects.map((project, index) => (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            ))}
                                        </div>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt='' />
        </section>
    );
}