import { Col, Container, Row } from "react-bootstrap"
import React, { useRef } from 'react';
import contactImg from "../assets/img/contact-img.svg"
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current); // Add this line to log the form element to the console
        emailjs
        .sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
            (result) => {
            alert('Message sent successfully!');
            console.log(result.text);
            },
            (error) => {
            console.log(error.text);
            }
        );
    };
    
    

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt='Contact' />
                    </Col>
                    <Col md={6}>
                        <h2>GET IN TOUCH!</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' name="firstname" /*value={formDetails.firstName}*/ placeholder="First Name" /*onChange={(e) => onFormUpdate('firstName', e.target.value)}*/ />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' name="lastname" /*value={formDetails.lastName}*/ placeholder="Last Name" /*onChange={(e) => onFormUpdate('lastName', e.target.value)}*/ />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' name="email" /*value={formDetails.email}*/ placeholder="Email Address" /*onChange={(e) => onFormUpdate('email', e.target.value)}*/ />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='telephone' name="phone" /*value={formDetails.phone}*/ placeholder="Phone Number" /*onChange={(e) => onFormUpdate('phone', e.target.value)}*/ />
                                </Col>
                                <Col>
                                    <textarea row="6" name="message" /*value={formDetails.message}*/ placeholder="Message" /*onChange={(e) => onFormUpdate('message', e.target.value)}*/ />
                                    <button type='submit'>Send</button>
                                </Col>
                                {/* {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>status.message</p>
                                    </Col>
                                } */}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}