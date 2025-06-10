import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './services.css'
const Services = () => {
    return (
        <section id='services'>
            <h5>Here’s What I Bring to the Table</h5>
            <h2>Solution & Services</h2>
            <div className="container service-container">
                <article className='service'>
                    <div className="service-head">
                        <h3>Frontend Web Application Development</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Responsive web design that adapts perfectly across all screen sizes.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Building interactive user interfaces using React.js and JavaScript.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Clean, maintainable, and SEO-friendly code structure.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Seamless integration of frontend with backend APIs using fetch or Axios.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Dynamic rendering of data with state management in React using Redux Saga.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Cross-browser compatibility and fast-loading performance optimization.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Building reusable components that work across different pages/modules.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Handling authentication, routing, and protected pages efficiently.</p>
                        </li>
                    </ul>
                </article>
               
                <article className='service'>
                    <div className="service-head">
                        <h3>Backend Application Development</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Designing and developing scalable RESTful APIs using Java and popular frameworks (Spring Boot, Jakarta EE).</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Building robust server-side applications that handle data efficiently and securely.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Integrating databases and third-party APIs to enable seamless data exchange.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Implementing authentication, authorization, and role-based access control for secure applications.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Debugging, optimizing, and fine-tuning performance for reliable and high-performing backend services.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Writing clean, maintainable, and well-documented code to ensure long-term scalability and maintainability.</p>
                        </li>
                    </ul>
                </article>
                 <article className='service'>
                    <div className="service-head">
                        <h3>Ops & Security Technical Competencies</h3>
                    </div>
                    <ul className='service-list'>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Proficient in Azure DevOps, Docker, Kubernetes, CI/CD Pipelines, and Ansible for robust deployment and scaling.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Skilled with Oracle and MS SQL Server for efficient data handling and performance tuning.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Hands-on experience with JUnit, Robot Framework, and JMeter for automated testing and performance validation.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Proficient in IntelliJ, Visual Studio Code, Eclipse, Git, Jenkins, Grafana, Splunk, Kibana, JIRA, Confluence, and SonarQube.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Agile Scrum practitioner, focused on iterative delivery and collaboration.</p>
                        </li>
                        <li>
                            <BiCheck className='service-icon' />
                            <p>Expertise in OWASP Top 10, secure code reviews, and risk & vulnerability assessments.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services
