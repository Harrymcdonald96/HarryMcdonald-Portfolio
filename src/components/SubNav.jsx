import { FaHome, FaBriefcase, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const SubNav = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50 mr-2">
      {/* Home Icon */}
      <a
        href="/"
        className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
        <FaHome className="w-6 h-6" />
      </a>

      {/* Experience Icon */}
      <a
        href="/experience"
        className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
        <FaBriefcase className="w-6 h-6" />
      </a>

      {/* Skills Icon */}
      <a
        href="/skills"
        className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md  "
      >
        <FaCode className="w-6 h-6" />
      </a>

      {/* Projects Icon */}
      <a
        href="/projects"
        className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
        <FaProjectDiagram className="w-6 h-6" />
      </a>

      {/* Contact Me Icon */}
      <a
        href="/contact"
        className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
        <FaEnvelope className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SubNav;
