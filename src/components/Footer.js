/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"

export const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p>Copyright 2023. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}