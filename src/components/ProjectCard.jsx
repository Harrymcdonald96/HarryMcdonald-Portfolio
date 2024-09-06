import PropTypes from 'prop-types'; // Importing PropTypes for prop validation

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, imageUrl }) => {
  return (
    <div className="bg-dark p-6 rounded-lg backdrop-blur-md backdrop-filter border border-primary shadow-lg transform transition duration-500 hover:scale-105 w-full sm:w-full mb-6">
      {/* Project Title */}
      <h3 className="text-2xl font-bold text-primary dark:text-black mb-4">{title}</h3>

      {/* Project Description */}
      <p className="text-gray-900 dark:text-gray-300 mb-4">{description}</p>

      {/* Technologies Used */}
      <div className="flex space-x-3 mb-4">
        {technologies.map((TechIcon, index) => (
          <TechIcon key={index} className="text-2xl text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors" />
        ))}
      </div>

      {/* Project Links */}
      <div className="flex space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          GitHub
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors"
        >
          Live Demo
        </a>
      </div>

      {/* Project Screenshot */}
      <div className="bg-gray-300 dark:bg-gray-700 h-48 mt-6">
        <img src={imageUrl} alt={`${title} Screenshot`} className="w-full h-full object-contain" />
      </div>

      {/* Additional Project Details */}
      <div className="p-6">
        <p className="text-gray-900 dark:text-gray-300">This project is built using {technologies.map(TechIcon => TechIcon.displayName).join(', ')}.</p>
      </div>
    </div>
  );
};

// Prop validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.elementType).isRequired, // Array of icons (React component types)
  githubLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
