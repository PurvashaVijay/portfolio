import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
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
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Connect With Me


          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subheading"
          >
            Open to Opportunities and Conversations
          </motion.p>
        </div>

        <motion.div 
          className="contact-container centered"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <div className="contact-block">
              <div className="left-column">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div className="right-column">
                <h3 className="contact-heading">Email</h3>
                <p className="contact-detail">purvashavijayanand@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-block">
              <div className="left-column">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
              </div>
              <div className="right-column">
                <h3 className="contact-heading">Phone</h3>
                <p className="contact-detail">(302) 981-9823</p>
              </div>
            </div>
            
            <div className="contact-block">
              <div className="left-column">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="right-column">
                <h3 className="contact-heading">Location</h3>
                <p className="contact-detail">McLean, VA, USA</p>
              </div>
            </div>
            
            <div className="linkedin-container">
              <motion.a 
                href="https://www.linkedin.com/in/purvasha-vijayanand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="linkedin-button"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;