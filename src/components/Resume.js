import { Container, Button, Row, Col } from "react-bootstrap";

export const Resume = () => {
  const docLink = "https://docs.google.com/document/d/e/2PACX-1vSby3E3pjZbVISFVbv4MnjF0RwZb-ReOmZcOF_NMksEsmYYG_dmvaQT5IcAbS18bmYJ5xwRVNtgyLbk/pub?embedded=true";
  const downloadLink = "https://docs.google.com/document/d/1ly7qgf4NomHpv4TVxHPSA5UGZzIGKl73fk9mdKfkib4/export?format=pdf";

  return (
    <section className="resume">
      <Container className="resume-container">
        {/* Row for Back to Home and Resume Title */}
        <Row className="align-items-center mb-4">
          
          <Col>
            <h2 >RESUME</h2>
          </Col>
        </Row>

        {/* Embedded Resume */}
        <div className="resume-iframe-wrapper">
        <iframe
          src={docLink}
          className="resume-iframe"
          title="Resume"
        />

        </div>
        

        {/* Download Button */}
        <div className="resume-button">
          <Button 
            href={downloadLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="primary"
          >
            Download as PDF
          </Button>
        </div>
      </Container>
    </section>
  );
};
