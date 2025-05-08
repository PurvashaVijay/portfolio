import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home', setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for styling based on scroll position
      setScrolled(window.scrollY > 20);
      
      // Calculate scroll progress for the progress bar
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrollPercentage = scrollPx / winHeightPx * 100;
      
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjusted offset for smaller navbar
      window.scrollTo({
        top: element.offsetTop - 60, // Reduced from 80 to 60
        behavior: 'smooth'
      });
      
      if (setActiveSection) {
        setActiveSection(sectionId);
      }
      
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Also toggle the right corner visibility in mobile view
    const rightCorner = document.querySelector('.right-corner');
    if (rightCorner) {
      rightCorner.classList.toggle('active');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo in leftmost corner with gradient */}
        <div className="left-corner">
          <a href="#home" className="logo" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>
            <span className="logo-text">purvasha.</span>
          </a>
        </div>

        {/* Center Navigation with all page links */}
        <div className={`nav-center ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('skills');
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className={activeSection === 'education' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('education');
                }}
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('experience');
                }}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
                }}
              >
                Projects
              </a>
            </li>
          </ul>
        </div>
        
        {/* Mobile menu toggle - positioned right on mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        
        {/* Contact button in rightmost corner */}
        <div className="right-corner">
          <a href="#contact" className="contact-button" onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}>
            Contact <span className="icon">→</span>
          </a>
        </div>
      </div>
      
      {/* Bottom accent with scroll progress moved outside navbar-container */}
      <div className="navbar-bottom">
        <div 
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;