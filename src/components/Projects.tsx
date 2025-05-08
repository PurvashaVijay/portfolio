import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { Code, PlaneTakeoff, Hotel, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "University Course Scheduler",
      description: "Developed and implemented a comprehensive university course scheduling system that automates schedule creation across multiple departments while respecting complex constraints including professor availability, course prerequisites, and cross-program dependencies. Leveraged Node.js/Express, PostgreSQL, and Python with Google OR-Tools for constraint optimization, resulting in optimized academic schedules with minimal conflicts.",
      icon: <Code size={40} />,
      technologies: ["Node.js", "PostgreSQL", "Python", "Google OR-Tools"],
      github: "https://github.com/PurvashaVijay/UniversityCourseScheduler"
    },
    {
      id: 2,
      title: "Airline Data Optimization Project",
      description: "Analyzed flight-level data to identify top-performing airline routes using profitability, delays, and occupancy metrics. Built route scoring logic and interactive dashboards to support data-driven investment recommendations.",
      icon: <PlaneTakeoff size={40} />,
      technologies: ["Python", "Jupyter Notebook", "EDA"],
      github: "https://github.com/PurvashaVijay/Airline-EDA"
    },
    {
      id: 3,
      title: "Hotel Management Database System",
      description: "Designed a hotel management database system using MySQL, creating an ERD with 10+ relational tables including Guests, Reservations, and Staff. Utilized normalization and queries (Window functions, CTEs) to improve data integrity and drive strategic business analysis.",
      icon: <Hotel size={40} />,
      technologies: ["MySQL", "ERD", "Data Modeling"]
    },
    {
      id: 4,
      title: "Investment Behavior Analysis",
      description: "Orchestrated a comparative study on Gen Z and Millennial investment behaviour using regression analysis and ANOVA, identifying a 35% rise in Gen Z's investment driven by digital platforms and fintech accessibility.",
      icon: <TrendingUp size={40} />,
      technologies: ["R", "Regression Analysis", "ANOVA"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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
    <section id="projects" className="projects">
      <div className="container">
        <div className="title-container">
          <motion.h2
            className="main-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="subtitle"
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tech-Driven Practical Projects
          </motion.p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map(project => (
            <motion.div 
              className="project-card" 
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                {project.github && (
                  <a href={project.github} className="github-link" target="_blank" rel="noopener noreferrer">
                    <div className="github-button">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>GitHub</span>
                    </div>
                  </a>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;