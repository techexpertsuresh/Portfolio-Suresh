import React from "react";
import "./portfolio.css";
import PROJECT1 from "../../assets/project1.jpg";
import PROJECT2 from "../../assets/project2.jpg";
import PROJECT3 from "../../assets/project3.jpg";
import PROJECT4 from "../../assets/project4.jpg";
import PROJECT5 from "../../assets/project5.jpg";
import PROJECT6 from "../../assets/project6.jpg";
import PROJECT7 from "../../assets/project7.jpg";
import PROJECT8 from "../../assets/project8.jpg";
import PROJECT9 from "../../assets/project9.jpg";
import PROJECT10 from "../../assets/project10.jpg";
import PROJECT11 from "../../assets/project11.jpg";
import PROJECT12 from "../../assets/project12.jpg";
import PROJECT13 from "../../assets/project13.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT1} alt="" />
          </div>
          <h3>Adhoc Messaging Hub</h3>
          <p>
            An internal bank application along with Quadient Inspire in ING empowers call center employees to send adhoc customer communications using predefined templates in SMS, Email, Inbox, and Paper formats. It seamlessly combines customer data with messaging templates for streamlined data composition. The result is consistent, efficient, and accurate communication with customers.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT2} alt="" />
          </div>
          <h3>XLetter</h3>
          <p>
            An internal bank application in ING empowers call center employees to send adhoc customer communications using predefined templates in SMS, Email, Inbox, and Paper formats. It seamlessly combines customer data with messaging templates for streamlined data composition. The result is consistent, efficient, and accurate communication with customers.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT3} alt="" />
          </div>
          <h3>GDigiArchAPI</h3>
          <p>
            GDigiArchAPI is a microservice application in ING. The application dynamically displays documents that are relevant to customers, whether they’re private or corporate, based on their assigned roles. This ensures that customers only see documents that apply to them, improving their experience and streamlining access to necessary information.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT4} alt="" />
          </div>
          <h3>UPC Receiving</h3>
          <p>
            UPC Receiving is an essential product module functions as an intelligent engine that identifies available warehouse slots for incoming products by analyzing their categories and adhering to specific slotting rules.
            This dynamic system ensures seamless and efficient inventory placement, optimizing storage and retrieval processes.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT5} alt="" />
          </div>
          <h3>Shore</h3>
          <p>
            A software product for managing invoices of both inbound and outbound transactions.  Users can create new invoices or correct existing ones from a comprehensive list of items.  It ensures accuracy, compliance, and consistency in all financial documentation.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT6} alt="" />
          </div>
          <h3>FIXit</h3>
          <p>
            Product to track the reason defect products and provide the solution. Categorising or marking the defect (Exception type) product in the distribution centre in the below types 1. Damage 2. Overage 3. Shortage 4. Not on Purchase order 5. Wrong Pack 6. Wrong Quantity 7. Reject
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT7} alt="" />
          </div>
          <h3>Global Logistics System</h3>
          <p>
            GLS, a product by Walmart, is a comprehensive application that drives Walmart's end-to-end logistics and warehouse management processes.
            It streamlines the flow of goods across the supply chain by integrating inventory, order fulfillment, and shipment tracking.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT8} alt="" />
          </div>
          <h3>Personal Portfolio</h3>
          <p>
            Designed and developed a modern, mobile-friendly portfolio using
            React and Tailwind. Highlights projects, skills, and services with
            interactive elements to enhance user engagement and reflect a
            professional personal brand.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT9} alt="" />
          </div>
          <h3>Onboarding Dashboard</h3>
          <p>
            Built Onboarding Dashboard, an online banking application that enables administrators to configure products, define workflows, and set up customer information fields required for product onboarding, ensuring seamless and accurate product requests by customers.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT10} alt="" />
          </div>
          <h3>Onboarding</h3>
          <p>
            Developed an Onboarding application for online banking, supporting seamless account opening for products like trading, savings, current, Hype accounts, as well as services like internet banking, prepaid cards, and digital signatures. The application dynamically renders forms and workflows for each product, delivering a smooth and flexible user experience.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT11} alt="" />
          </div>
          <h3>CRM</h3>
          <p>
            CRM is an intranet application that centralizes customer information and documents for easy access and management by business users. It records customer interactions and automates workflows like tasks, calendars, and alerts. It also enables managers to track performance and productivity based on logged data.
          </p>
        </article>
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT12} alt="" />
          </div>
          <h3>AdeguataVerificaFE</h3>
          <p>
            AdeguataVerificaFE is an internet/intranet application to manage the KYC information to identify and verify the identity of its clients. The term refers to the bank and anti-money laundering regulations, which govern these activities.
          </p>
        </article>
        
        <article className="portfolio">
          <div className="portfolio-image">
            <img src={PROJECT13} alt="" />
          </div>
          <h3>Loan Application System</h3>
          <p>
            Developed FUNDperfect for lending automation, streamlining loan
            origination & approval. Created LENDperfect, an integrated loan
            management system. Designed and implemented ACH payment scheduling &
            automated accounting reports.
          </p>
        </article>  
      </div>
    </section>
  );
};

export default Portfolio;
