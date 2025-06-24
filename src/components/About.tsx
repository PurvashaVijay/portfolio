import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
        </div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about-img">
            <motion.div 
              className="img-border"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Using require for the image */}
              <img 
                src={require('../assets/profile.jpg')} 
                alt="Purvasha Vijay Anand" 
              />
            </motion.div>
          </div>

          <div className="about-text">
            <motion.h3 variants={itemVariants}>Data Analyst & Business Intelligence Specialist</motion.h3>
            
            <motion.p variants={itemVariants}>
            I'm a data analyst who gets way too excited about dashboards, SQL joins, and finding that one tiny insight that flips the whole story. With a Master’s in Business Analytics from the University of Delaware and a caffeine-fueled love for solving messy problems, I turn complex data into clean, actionable decisions.
            </motion.p>
            
            <motion.p variants={itemVariants}>
            I’ve built full-stack web apps, automated data pipelines, led classroom sessions on financial systems, and wrangled 100,000+ data points into visualizations that actually mean something. From course scheduling algorithms to client audits at EY, I’ve worked across dashboards and balance sheets to uncover what matters.
            </motion.p>
            
            <motion.p variants={itemVariants}>
            When I’m not working, I’m probably obsessing over financial datasets, color-coding my life in Excel, or geeking out over new AI tools.
            </motion.p>

            <motion.div variants={itemVariants} className="btn-container">
              <motion.a 
                href="/portfolio/Purvasha-Vijay-Anand-Resume.pdf" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;