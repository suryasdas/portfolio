import { Col, Container, Row } from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import emailjs from 'emailjs-com';

export const Contact = () => {
    // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // }

    // const [formDetails, setformDetails] = useState(formInitialDetails)
    // const [buttonText, setbuttonText] = useState('Send')
    // const [status, setstatus] = useState({})

    // const onFormUpdate = (category, value) => {
    //     setformDetails({
    //         ...formDetails,
    //         [category]: value
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setbuttonText('Sending...');
    //     let response = await fetch("http://localhost:3000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "Application/json;charset=utf-8"
    //         },
    //         body: JSON.stringify(formDetails)
    //     })
    //     setbuttonText("Send")
    //     let result = response.json()
    //     setformDetails(formInitialDetails)
    //     if (result.code === 200) {
    //         setstatus({ success: true, message: "Message sent successfully!" })
    //     }
    //     else{
    //         setstatus({ success: false, message: "Message not sent. Please try again." })
    //     }
    // }



    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_rihp64b', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt='Contact' />
                    </Col>
                    <Col md={6}>
                        <h2>GET IN TOUCH!</h2>
                        <form onSubmit={sendEmail}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' /*value={formDetails.firstName}*/ placeholder="First Name" /*onChange={(e) => onFormUpdate('firstName', e.target.value)}*/ />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' /*value={formDetails.lastName}*/ placeholder="Last Name" /*onChange={(e) => onFormUpdate('lastName', e.target.value)}*/ />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' /*value={formDetails.email}*/ placeholder="Email Address" /*onChange={(e) => onFormUpdate('email', e.target.value)}*/ />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='telephone' /*value={formDetails.phone}*/ placeholder="Phone Number" /*onChange={(e) => onFormUpdate('phone', e.target.value)}*/ />
                                </Col>
                                <Col>
                                    <textarea row="6" /*value={formDetails.message}*/ placeholder="Message" /*onChange={(e) => onFormUpdate('message', e.target.value)}*/ />
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