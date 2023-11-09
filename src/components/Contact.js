import React, { useState, useRef } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

// Note: You'll need to install emailjs-com with `npm install emailjs-com` or include it in your package.json dependencies.
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();
    const [formDetails, setFormDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '',
        phone: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const onFormUpdate = (field, value) => {
        setFormDetails(prevDetails => ({
            ...prevDetails,
            [field]: value
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formDetails.firstName.trim()) errors.firstName = 'First name is required.';
        if (!formDetails.lastName.trim()) errors.lastName = 'Last name is required.';
        if (!formDetails.email.trim()) errors.email = 'Email is required.';
        if (!formDetails.countryCode.trim()) errors.countryCode = 'Country code is required.';
        if (!formDetails.phone.trim()) {
            errors.phone = 'Phone number is required.';
        } else if (formDetails.phone.replace(/\D/g, '').length !== 10) {
            errors.phone = 'Phone number must be 10 digits.';
        }
        if (!formDetails.message.trim()) errors.message = 'Message is required.';

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            ).then((result) => {
                alert('Message sent successfully!');
                console.log(result.text);
                // Reset form fields
                setFormDetails({
                    firstName: '',
                    lastName: '',
                    email: '',
                    countryCode: '',
                    phone: '',
                    message: ''
                });
                setFormErrors({});
            }, (error) => {
                alert('Failed to send message. Please try again later.');
                console.log(error.text);
            });
        }
    };

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in touch!</h2>
                        <form ref={form} onSubmit={sendEmail} noValidate>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstname" placeholder="First Name" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                    {formErrors.firstName && <div className="error">{formErrors.firstName}</div>}
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastname" placeholder="Last Name" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                    {formErrors.lastName && <div className="error">{formErrors.lastName}</div>}
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" placeholder="Email Address" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                                    {formErrors.email && <div className="error">{formErrors.email}</div>}
                                </Col>
                                <Col sm={2} className="px-1">
                                    <input type="text" name="countryCode" placeholder="Country Code" value={formDetails.countryCode} onChange={(e) => onFormUpdate('countryCode', e.target.value)} />
                                    {formErrors.countryCode && <div className="error">{formErrors.countryCode}</div>}
                                </Col>
                                <Col sm={4} className="px-1">
                                    <input type="tel" name="phone" placeholder="Phone Number" value={formDetails.phone} onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                    {formErrors.phone && <div className="error">{formErrors.phone}</div>}
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea name="message" rows="5" placeholder="Message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    {formErrors.message && <div className="error">{formErrors.message}</div>}
                                </Col>
                                <Col sm={12} className="px-1">
                                    <button type="submit">Send Message</button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

