import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const Education: React.FC = () => {
  const education = [
    {
      id: 1,
      degree: "Master's in Business Analytics and Information Management",
      institution: "University of Delaware",
      date: "January 2024 - May 2025",
      gpa: "4.0/4.0",
      description: "Focusing on advanced data analytics, machine learning, and business intelligence applications.",
      courses: [
        "Database Systems", 
        "Dashboard Design and Story Telling", 
        "Statistical Programming", 
        "Generative AI", 
        "Business Intelligence"
      ]
    },
    {
      id: 2,
      degree: "Bachelor of Commerce (Honors) in Finance and Investment",
      institution: "Christ University",
      date: "June 2019 - May 2022",
      gpa: "3.9/4.0",
      description: "Specializing in finance and investment analysis with a focus on quantitative methods.",
      courses: [
        "Investment Analysis and Portfolio Management",
        "Quantitative Techniques for Decision Making",
        "Financial Analytics and Modelling",
        "Pricing Analytics"
      ]
    },
    {
      id: 3,
      degree: "Chartered Institute of Securities and Investment (UK)",
      institution: "CISI",
      date: "2021 - 2022",
      gpa: "",
      description: "Professional certifications in financial services and securities operations.",
      courses: [
        "Level 1: An Introduction to Securities and Investment",
        "Level 2: Global Securities Operations",
        "Level 3: Risk in Financial Services"
      ]
    }
  ];
  
  const activities = [
    {
      id: 1,
      title: "President Student Advisory Council",
      organization: "University of Delaware",
      description: "Led student representation and campus engagement initiatives."
    },
    {
      id: 2,
      title: "Rotary Youth Exchange Student",
      organization: "NRW, Germany",
      description: "Facilitated global exchange through cross-cultural communication."
    },
    {
      id: 3,
      title: "Peer Educator",
      organization: "Christ University",
      description: "Supported student well-being and mental health through peer-led sessions."
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="title-container">
          <motion.h2 
            className="main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Education
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An Amalgamation of Analytics and Finance
          </motion.p>
        </div>

        {/* Education Cards - Horizontal Layout */}
        <motion.div 
          className="education-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div 
              className="education-card" 
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="date-tab">{edu.date}</div>
              <h3 className="degree-title">{edu.degree}</h3>
              <h4 className="institution">{edu.institution}</h4>
              
              {edu.gpa && (
                <div className="gpa-badge">
                  <span>GPA: </span>
                  <span className="gpa-value">{edu.gpa}</span>
                </div>
              )}
              
              <p className="description">{edu.description}</p>
              
              <div className={`courses-section ${edu.id === 3 ? "cisi-courses" : ""}`}>
                <h5 className="courses-title">Key Courses:</h5>
                <ul className="courses-list">
                  {edu.courses.map((course, index) => (
                    <li key={index} className="course-item">
                      <span className="bullet">•</span> {course}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Leadership & Activities Section - with added inline style for more spacing */}
        <div className="title-container leadership" style={{ marginTop: '100px' }}>
          <motion.h2 
            className="main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leadership & Activities
          </motion.h2>
        </div>

        <motion.div 
          className="activities-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activities.map((activity) => (
            <motion.div 
              className="activity-item" 
              key={activity.id}
              variants={itemVariants}
            >
              <motion.div 
                className="activity-content"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{activity.title}</h3>
                <h4>{activity.organization}</h4>
                <p>{activity.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="education-quote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <blockquote>
            "Education is not the learning of facts, but the training of the mind to think."
            <cite>- Albert Einstein</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;