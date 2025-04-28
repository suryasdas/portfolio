// import { Col } from "react-bootstrap"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const EducationCard = ({ university, location, degree, gradDate, imgUrl }) => {
    return (
        <div class="w-10/12 bg-white  rounded-lg overflow-hidden h-9/12 flex flex-col justify-between proj-imgbx">
            {/* <!-- Profile Image --> */}
            <div class="flex justify-center mt-6">
                <img class="imgbck" src={imgUrl} alt="" />
            </div>


            {/* <!-- Profile Info --> */}
            <div class="text-center px-6 py-4 ">
                
                <div className="proj-txtx">
                    <h4>{university}</h4>
                    <h6>{location}</h6>
                    <span>{degree}</span>
                    <p>{gradDate}</p>
                </div>

                
            </div>
        </div>

    )
}

export const ProjectCard = ({ title, description, imgUrl, githubUrl, tags = [] }) => {
    return (
        <div class="w-11/12 rounded-lg overflow-hidden h-80 flex flex-col justify-between proj-imgbx2">
            {/* <!-- Profile Image --> */}
            <div class="flex justify-center mt-6">
                <img class="w-48 h-40 rounded-lg" src={imgUrl} alt="" />
            </div>


            {/* <!-- Profile Info --> */}
            <div class="text-center px-6 py-4 ">
                <h3 class="text-2xl font-semibold text-white-900">{title}</h3>
                <div className="proj-txtx">
                    <p className="text-xs text-white text-left">{description}</p>
                    <button onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')} className="text-xl text-white text-center">GitHub</button>

                </div>

                {/* <!-- Badge --> */}
                <div >
                    {tags.map((item, index) => (
                        <span key={index} class="inline-block -mb-2 bg-purple-200 text-pink-600 text-xs font-semibold px-3 py-0.8 rounded-full mr-2">
                            {item}
                        </span>
                    ))}

                </div>
            </div>
        </div>

    )
}

export const ExperienceCard = ({ index, date, company, title, location, description,logo }) => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date={date}
                iconStyle={{ background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)', color: '#fff' }}
                position={index % 2 === 0 ? 'left' : 'right'} 
                icon = {<img src={logo} alt='' style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>}
            >
                <h3>{title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{company}</h5>
                <h6 className="vertical-timeline-element-subtitle">{location}</h6>
                
                <p></p>
                <ul className="custom-bullet-points">
                {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </VerticalTimelineElement>
        </VerticalTimeline>

    )

}

