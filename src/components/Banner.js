import { Nav, Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import portrait from "../assets/img/portrait.png";

export const Banner = () => {
  const toRotate = ["an aviation geek.", "a coffee addict.", "a traveller.", "a coding enthusiast."];
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50); 
  const [activeLink, setActiveLink] = useState('home');
  const typingPause = 1000; 

  useEffect(() => {
    const handleTyping = () => {
      const fullText = toRotate[loopNumber % toRotate.length];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        // Pause before starting deletion
        setTimeout(() => {
          setIsDeleting(true);
        }, typingPause);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNumber(loopNumber + 1);
      }
    };

    const ticker = setTimeout(handleTyping, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNumber]);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={9} xl={8}>
            <span className="tagline">
              SURYA SATHANUR DAS
            </span>
            <h1>
              {`I'm `}<span className="wrap">{text}</span>
            </h1>
            <p>I'm a full stack developer who enjoys turning complex problems into simple, scalable solutions. With experience across early-stage startups and freelance work, I’ve built everything from data pipelines and real-time APIs to intuitive frontends using tools like React, FastAPI, and cloud platforms like AWS and GCP. </p>
            <p>I'm currently looking for a full-time software development role where I can keep leveling up—especially in full stack development, cloud computing, and DevOps. I love working on small, fast-moving teams, building clean systems, and shipping products that make a real impact.</p>
            <p>Being an international student, I have repeatedly been exposed to new cultures and diverse groups of people. This has made me able to quickly adapt to changes and gain a broader perspective. I am always curious about things and enjoy learning. I like to solve problems and fix errors. I am a detail orientated person and I keep my goals and tasks organized to maintain productivity.</p>
            <p>I believe that the skills that I have attained from the dynamic environment and competitive university life define me and I am looking forward to implementing and polishing them in any opportunity that I receive.</p>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>
              <button>
                Let's Connect <ArrowRightCircle size={25} />
              </button>
            </Nav.Link>
          </Col>
          <Col xs={12} md={6} xl={4}>
            <img src={portrait} alt="portrait" className="imground" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
