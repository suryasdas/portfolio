/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}