import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useState, useEffect } from "react"
import portrait from "../assets/img/portrait.jpeg"


export const Banner = () => {
    const toRotate = ["an Aspiring Coder","an Aviation Geek","a F1 Enthutiast"]
    const [loopNumber, setLoopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const period = 2000
    const [delta, setDelta] = useState(300 - Math.random * 100)

    useEffect(()=>{
        let ticker = setInterval (()=> {
            tick();
        },delta)
        return () => {clearInterval(ticker)}
    },[text])

    const tick = () =>{
        let i = loopNumber % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText (updatedText)

        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
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
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`Hi! I'm `}<span className="wrap">
                            {text}</span></h1>
                        <p>add info about yourself</p>
                        <button onClick={() => console.log('connect')}>Let's Connect! <ArrowRightCircle size={25}></ArrowRightCircle> </button>
                    </Col>
                    <Col xs ={12} md={6} xl={5}>
                        <img src ={portrait} alt ='portrait'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}