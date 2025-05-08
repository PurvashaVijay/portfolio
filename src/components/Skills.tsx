import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

// Define types for skill items
interface SkillItem {
  name: string;
}

interface SkillCategory {
  category: string;
  iconClass: string;
  color: string;
  items: SkillItem[];
}

const Skills: React.FC = () => {
  // Skills data with matching categories from the image
  const skills: SkillCategory[] = [
    { 
      category: "Programming & Scripting", 
      iconClass: "fa-solid fa-code",
      color: "#4361ee",
      items: [
        { name: "Python" },
        { name: "R" },
        { name: "SAS" }
      ]
    },
    {
      category: "Databases & Data Engineering",
      iconClass: "fa-solid fa-database",
      color: "#3cc8ff",
      items: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "Oracle" },
        { name: "SQLite" },
        { name: "Alteryx" }
        
      ]
    },
    {
      category: "Business Intelligence & Visualization",
      iconClass: "fa-solid fa-chart-line",
      color: "#f9c74f",
      items: [
        { name: "Tableau" },
        { name: "Power BI" },
        { name: "Qlik" },
        { name: "Excel" }
      ]
    },
    {
      category: "Statistical & Predictive Analytics",
      iconClass: "fa-solid fa-chart-pie",
      color: "#a65ff9",
      items: [
        { name: "Regression Analysis" },
        { name: "Time Series Forecasting" },
        { name: "Predictive Modeling" },
        { name: "K-Means Clustering" },
        { name: "Hypothesis Testing" }
      ]
    },
    {
      category: "Finance & Investment",
      iconClass: "fa-solid fa-money-bill-wave",
      color: "#ff6b8b",
      items: [
        { name: "Financial Analysis & Modeling" },
        { name: "Ratio Analysis & Valuation" },
        { name: "Budgeting & Forecasting" },
        { name: "GAAP Compliance" },
        { name: "Portfolio Management" },
        { name: "Audit & Internal Controls" }
      ]
    },
    {
      category: "Tools & Business Platforms",
      iconClass: "fa-solid fa-tools",
      color: "#f25c54",
      items: [
        { name: "Zoho CRM" },
        { name: "Gen AI" },
        { name: "Git & GitHub" },
        { name: "Jupyter Notebooks" },
        { name: "Microsoft Office Suite" },
        { name: "Google Workspace" },
        
        { name: "Agile / Scrum" },
       
      ]
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
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-text"
          >
            My Skills
          </motion.h2>
          <div className="title-underline"></div>
          <motion.h3
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subtitle"
          >
            The Stack behind the Stories
          </motion.h3>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              className="skill-card" 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="skill-card-header">
                <div 
                  className="icon-container"
                  style={{ backgroundColor: skillGroup.color }}
                >
                  <i className={skillGroup.iconClass}></i>
                </div>
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div 
                    className="skill-tag" 
                    key={skillIndex}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;