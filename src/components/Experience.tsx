import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="title-container">
          <motion.h2
            className="main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Work Experience
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Analyst Work Spanning Consulting, Education & Industry
          </motion.p>
        </div>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {/* First row - Jan 2025-Present, side by side */}
          <div className="timeline-row">
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">Jan 2025–Present</div>
                <h3 className="timeline-role">Technology and Analytics Intern</h3>
                <h4 className="timeline-company">Lerner College, University of Delaware</h4>
                <p className="timeline-description">
                  Developed predictive dashboards and a full-stack scheduling system, cutting course conflicts by 45% and saving 50+ staff hours. Used Qlik, Alteryx, Python (OR-Tools), Node.js, PostgreSQL, and React. Led Agile sprints with 100% on-time delivery.
                </p>
              </div>
            </div>
            
            <div className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
            
            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">Jan 2025–Present</div>
                <h3 className="timeline-role">Graduate Assistant</h3>
                <h4 className="timeline-company">University of Delaware</h4>
                <p className="timeline-description">
                  Instructed 120+ students in Accounting Information Systems, integrating Big 4 case study workshops and designing a database course using Oracle DB for financial data management.
                </p>
              </div>
            </div>
          </div>
          
          <div className="timeline-entry">
            {/* Dec 2024-Jan 2025 */}
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">Dec 2024–Jan 2025</div>
                <h3 className="timeline-role">Data Analyst Intern</h3>
                <h4 className="timeline-company">Craftsman Automation, Coimbatore</h4>
                <p className="timeline-description">
                  Built ETL pipelines and real-time dashboards to track sales, retention, and order loss, enabling 30% faster insights and reducing lost orders by 15%.
                </p>
              </div>
            </div>
            
            <div className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
          </div>
          
          <div className="timeline-entry">
            {/* Sep 2022-Sep 2023 */}
            <div className="timeline-item right">
              <div className="timeline-content">
                <div className="timeline-date">Sep 2022–Sep 2023</div>
                <h3 className="timeline-role">Assurance Analyst</h3>
                <h4 className="timeline-company">Ernst & Young GDS, Bengaluru</h4>
                <p className="timeline-description">
                  Audited 20+ Fortune 500 clients across EMEA & Asia, improving GAAP compliance by 20%. Led variance analysis, control testing, and data reconciliations, uncovering $2M in misallocated expenses. Reduced control issues through weekly finance risk sessions.
                </p>
              </div>
            </div>
            
            <div className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
          </div>
          
          <div className="timeline-entry">
            {/* Apr 2021-May 2021 */}
            <div className="timeline-item left">
              <div className="timeline-content">
                <div className="timeline-date">Apr 2021–May 2021</div>
                <h3 className="timeline-role">Sales and Operations Analytics Intern</h3>
                <h4 className="timeline-company">Aditya Birla Capital, Coimbatore</h4>
                <p className="timeline-description">
                  Built SQL/Tableau dashboards to track investor activity and reduce manual effort by 20%. Applied clustering and regression on investor data using Scikit-learn and Pandas, aiding 28 client acquisitions and boosting conversions by 15%.
                </p>
              </div>
            </div>
            
            <div className="timeline-dot">
              <div className="timeline-dot-inner"></div>
            </div>
          </div>
        </div>
        
        <div className="resume-download">
          <a href="/Purvasha-Vijay-Anand-Resume.pdf" className="btn" download>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;