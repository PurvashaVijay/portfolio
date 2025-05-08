import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="footer-logo">
          <a href="#home">
            Purvasha<span>Vijay Anand</span>
          </a>
        </div>
        
        <div className="footer-social">
          <motion.a 
            href="https://www.linkedin.com/in/purvasha-vijayanand" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
          <motion.a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a 
            href="mailto:purvashavijayanand@gmail.com"
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-envelope"></i>
          </motion.a>
        </div>
        
        <div className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-copy">
          <p>&copy; {currentYear} Purvasha Vijay Anand. All rights reserved.</p>
          <p>Data Analyst & Business Intelligence Specialist</p>
        </div>
      </motion.div>
      
      <motion.div 
        className="back-to-top"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <a href="#home">
          <i className="fas fa-chevron-up"></i>
        </a>
      </motion.div>
    </footer>
  );
};

export default Footer;