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
                        Skills
                      </h2>
                      <Carousel responsive = {responsive} infinite = {true} className='skill-slider'>
                        <div className='item'>
                          <img src={react} alt='' className='imground'/>
                          <h5>React</h5>
                        </div>
                        <div className='item'>
                          <img src={python} alt='' />
                          <h5>Python</h5>
                        </div>
                        <div className='item'>
                          <img src={angular} alt='' />
                          <h5>Angular</h5>
                        </div>
                        <div className='item'>
                          <img src={typescript} alt='' />
                          <h5>TypeScript</h5>
                        </div>
                        <div className='item'>
                          <img src={javascript} alt='' />
                          <h5>JavaScript</h5>
                        </div>
                        <div className='item'>
                          <img src={django} alt='' />
                          <h5>Django</h5>
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