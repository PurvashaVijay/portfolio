import React, { useEffect, useRef } from 'react';
import './Home.css';
import Typed from 'typed.js';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const typedEl = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typedEl.current) {
      const typed = new Typed(typedEl.current, {
        strings: [
          'Data Analyst',
          'Business Analyst',
          'Numbers Enthusiast'
        ],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
      });
      
      return () => {
        typed.destroy();
      };
    }
  }, []);

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
    <section id="home" className="home">
      <div className="overlay"></div>
      <motion.div 
        className="container home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-content">
          <motion.h1 variants={itemVariants} className="name-title">
            Hi, I'm <span className="highlight">Purvasha Vijay Anand</span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="role-title">
            I'm a <span ref={typedEl} className="typed"></span>
          </motion.h2>
          <motion.p variants={itemVariants} className="tagline">
            Turning data into impactful business decisions
          </motion.p>
          <motion.div className="buttons" variants={itemVariants}>
            <motion.a 
              href="#contact" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Me
            </motion.a>
            <motion.a 
              href="/portfolio/Purvasha-Vijay-Anand-Resume.pdf" 
              className="btn btn-secondary" 
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
        {/* Social icons section removed */}
      </motion.div>
      <motion.div 
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5 
        }}
      >
        <a href="#about">
          <i className="fas fa-chevron-down"></i>
        </a>
      </motion.div>
    </section>
  );
};

export default Home;