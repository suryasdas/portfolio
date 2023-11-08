import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorsharp from "../assets/img/color-sharp.png"
import react from "../assets/img/react.png"
import python from "../assets/img/python.png"
import angular from "../assets/img/angular.png"
import django from "../assets/img/django.png"
import typescript from "../assets/img/typescript.png"
import javascript from "../assets/img/javascript.png"
import java from "../assets/img/java.png"
import aws from "../assets/img/aws.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                      <h2>
                        SKILLS
                      </h2>
                      <Carousel responsive = {responsive} infinite = {true} className='skill-slider'>
                        <div className='item'>
                        <a href="https://react.dev" target="_blank" rel="noreferrer"><img src={react} alt='' className='imground'/></a>
                          <h5>React</h5>
                        </div>
                        <div className='item'>
                          <a href="https://www.python.org" target="_blank" rel="noreferrer"><img src={python} alt='' /></a>
                          <h5>Python</h5>
                        </div>
                        <div className='item'>
                          <a href="https://angular.io" target="_blank" rel="noreferrer"><img src={angular} alt='' /></a>
                          <h5>Angular</h5>
                        </div>
                        <div className='item'>
                          <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer"><img src={typescript} alt='' /></a>
                          <h5>TypeScript</h5>
                        </div>
                        <div className='item'>
                          <a href="https://www.javascript.com" target="_blank" rel="noreferrer"><img src={javascript} alt='' /></a>
                          <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                          <a href="https://www.djangoproject.com" target="_blank" rel="noreferrer"><img src={django} alt='' /></a>
                          <h5>Django</h5>
                        </div>
                        <div className='item'>
                          <a href="https://www.java.com/en/" target="_blank" rel="noreferrer"><img src={java} alt='' /></a>
                          <h5>Java</h5>
                        </div>
                        <div className='item'>
                          <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer"><img src={aws} alt='' /></a>
                          <h5>AWS Services</h5>
                        </div>
                      </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorsharp} alt=''/>
        </section>
      )

}