import { Nav, Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useState, useEffect } from "react"
import portrait from "../assets/img/portrait.png"


export const Banner = () => {
    const toRotate = ["An Aspiring Coder.","An Aviation Geek.","A F1 Enthusiast.","A Rookie Gamer."]
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const period = 1000
    const [delta, setDelta] = useState(500 - Math.random * 100)
    const [activeLink, setActiveLink] = useState('home');

    useEffect(()=>{
        let ticker = setInterval (()=> {
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    },[text])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    const tick = () =>{
        let i = loopNumber % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText (updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta/1.5)
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }

        else if (isDeleting && updatedText ===''){
            setIsDeleting(false)
            setLoopNumber(loopNumber+1)
            setDelta(500)
        }

        
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={9} xl={8}>
                    <span className="tagline">
                            SURYA SATHANUR DAS
                        </span>
                        <h1><span className="wrap">
                            {text}</span></h1>
                        <p>A computer engineering graduate with a strong foundation in software development and technical consulting, is actively seeking engaging opportunities in the field. With a comprehensive academic background and hands-on experience in web and mobile application development, Surya aims to utilize expertise in React, Angular, and backend technologies to bring value to innovative projects. Eager to collaborate with diverse teams, Surya is committed to applying adept problem-solving skills to create efficient, user-centric solutions for a progressive organization.</p>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><button>Let's Connect<ArrowRightCircle size={25}></ArrowRightCircle></button> </Nav.Link>
                    </Col>
                    <Col xs ={12} md={6} xl={4}>
                        <img src ={portrait} alt ='portrait' className="imground"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}