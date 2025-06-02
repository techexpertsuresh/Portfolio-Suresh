import React from 'react'
import './about.css';
import AboutMe from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about-container">
            <div className="about-me">
              <div className="about-me-image">
                <img src={AboutMe} alt="" />
              </div>
            </div>
            <div className="about-content">
              <div className="cards">
                <article className='card'>
                  <FaAward className='aboutme-icon'/>
                  <h5>Experience</h5>
                  <small>14+ Years Working</small>
                </article>
                <article className='card'>
                  <MdOutlineMilitaryTech className='aboutme-icon'/>
                  <h5>Skills</h5>
                  <small>Java, Spring, JPA, Kafka, Docker, React</small>
                </article>
                <article className='card'>
                  <VscFolderLibrary className='aboutme-icon'/>
                  <h5>Projects</h5>
                  <small>10+ Completed</small>
                </article>
              </div>
              <p>I'm a Senior Full Stack Engineer with 14+ years of experience in banking, retail, and finance domains. Expertise in backend, frontend, DevOps, and cloud technologies. Proven ability to lead teams, drive product development, and implement secure, scalable microservices architectures and building dynamic web applications. 
                Strong problem-solving and mentoring skills with a deep understanding of Agile & Scrum methodologies.
              </p>
              <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About
