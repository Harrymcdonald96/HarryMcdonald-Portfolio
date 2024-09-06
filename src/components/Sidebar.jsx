import PropTypes from 'prop-types';
import profilePic from '../assets/profile.jpeg';
import { FaGithub, FaLinkedin, FaHome, FaCode, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import '../styles/SideBar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full text-light-text dark:text-dark-text border-t border-r border-secondary transform transition-transform duration-300 z-50 backdrop-blur-md bg-opacity-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <button
        className="absolute top-4 right-4 p-1 bg-transparent border-none text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary focus:outline-none lg:hidden"
        onClick={toggleSidebar}
      >
        {/* Close button icon */}
        <svg
          className="w-6 h-6 text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <div className="flex flex-col items-center p-4 mt-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4 object-cover animate-float"
        />
        {/* Updated Name Title to Primary Orange */}
        <h2 className="text-xl font-bold mb-4 text-primary">HARRY MCDONALD</h2>
        <div className="flex space-x-4 mb-8">
          {/* Social Icons with hover effect */}
          <a href="https://github.com/Harrymcdonald96" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary" />
          </a>
          <a href="https://linkedin.com/in/harry-wrs-mcdonald" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary" />
          </a>
          <a href="/path-to-your-resume.pdf" download>
            <FiDownload className="w-6 h-6 text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary" />
          </a>
        </div>
      </div>

      <nav className="mt-4 space-y-4 px-4">
        {/* Navigation Links with hover effect */}
        <a href="/" className="flex items-center text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
          <FaHome className="mr-2" />
          Home
        </a>
        <a href="/experience" className="flex items-center text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
          <FaBriefcase className="mr-2" />
          Experience
        </a>
        <a href="/skills" className="flex items-center text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
          <FaCode className="mr-2" />
          Skills
        </a>
        <a href="/projects" className="flex items-center text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
          <FaProjectDiagram className="mr-2" />
          Projects
        </a>
        <a href="/contact" className="flex items-center text-light-text dark:text-dark-text hover:text-primary dark:hover:text-primary">
          <FaEnvelope className="mr-2" />
          Contact Me
        </a>
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
