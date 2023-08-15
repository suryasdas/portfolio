import { Col, Row, Container } from "react-bootstrap"

export const ProjectCard=({university, location, degree, gradDate, imgUrl})=>{
    return(
        
        <Col sm={12} md={6} className="proj-div" >
            <div className="proj-imgbx">
                <img src={imgUrl} alt='' className="imgbck"/>
                <div className="proj-txtx">
                    <h4>{university}</h4>
                    <h6>{location}</h6>
                    <span>{degree}</span>
                    <p>{gradDate}</p>
                </div>
            </div>
        </Col>
        
    )
}