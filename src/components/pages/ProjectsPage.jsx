import ProjectCard from '../ProjectCard'; // Assuming ProjectCard component is correctly imported
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaReact, FaNode } from 'react-icons/fa'; // Import the required icons
import languageQuizScreenshot from '../../assets/LanguageQuiz.png';
import fitnessDatabaseScreenshot from '../../assets/DataBase.png';
import expenseTrackerScreenshot from '../../assets/ExpenseTracker.png';
import passwordGeneratorScreenshot from '../../assets/PasswordG.png';
import fitnessDashboardScreenshot from '../../assets/FitnessDashboard.png';
import video from '../../assets/AdobeStock_85756422.mov'; // Import your background video

const ProjectsPage = () => {
  const projects = [
    {
      title: "Language Quiz",
      description: "A Python-based quiz application that challenges users with programming language questions to test their knowledge.",
      technologies: [FaPython],
      githubLink: "https://github.com/Harrymcdonald96/LanguageQuiz",
      demoLink: "https://youtu.be/Kmgu2mH9Fxo?si=Bg8MvdKZg027I349",
      imageUrl: languageQuizScreenshot,
    },
    {
      title: "Fitness Database",
      description: "A comprehensive MySQL database for managing fitness data, including users, workouts, exercises, nutrition, goals, and achievements.",
      technologies: [FaDatabase, FaHtml5, FaCss3Alt, FaJs],
      githubLink: "https://github.com/Harrymcdonald96/FitnessDatabase",
      demoLink: "https://harrymcdonald96.github.io/FitnessDatabase/",
      imageUrl: fitnessDatabaseScreenshot,
    },
    {
      title: "Expense Tracker",
      description: "A Python application for managing daily expenses, organizing spending, and converting currencies with real-time exchange rates.",
      technologies: [FaPython],
      githubLink: "https://github.com/Harrymcdonald96/Expense-Tracker",
      demoLink: "https://youtu.be/GqISyq6MJ2k?si=blzddkJO0_g0LIN-",
      imageUrl: expenseTrackerScreenshot,
    },
    {
      title: "Apex Fitness Dashboard",
      description: "A user-centric web application designed to enhance the fitness journey of its users. Built with React and Vite.",
      technologies: [FaReact, FaJs],
      githubLink: "https://github.com/Harrymcdonald96/React-Vite-Fitness-Dashboard",
      demoLink: "https://harrymcdonald96.github.io/React-Vite-Fitness-Dashboard/",
      imageUrl: fitnessDashboardScreenshot,
    },
    {
      title: "Password Generator",
      description: "Create secure, customisable passwords with this web-based tool built using HTML, CSS, and JavaScript.",
      technologies: [FaJs, FaHtml5, FaCss3Alt],
      githubLink: "https://github.com/Harrymcdonald96/PasswordGenerator",
      demoLink: "https://harrymcdonald96.github.io/PasswordGenerator/",
      imageUrl: passwordGeneratorScreenshot,
    },
    {
      title: "React To-Do App",
      description: "A vibrant To-Do List app powered by React, Node.js, and MongoDB, providing a sleek interface for managing tasks.",
      technologies: [FaJs, FaNode],
      githubLink: "https://github.com/Harrymcdonald96/React-To-Do-App",
      demoLink: "", // Add the live demo link here
      imageUrl: "/mnt/data/ReactToDo.png",
    },
  ];

  return (
    <section className="relative w-screen h-screen overflow-y-auto scroll-smooth lg:ml-[-260px]">
      {/* Background Video */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{ objectPosition: 'center' }}
      />

      {/* Dark Overlay for better readability */}
      <div className="fixed inset-0 bg-black opacity-50 z-0 dark:block hidden" />

      <div className="relative z-10 pt-28 px-4 sm:px-8 lg:ml-64">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-primary dark:text-white mb-8 text-center">Projects</h2>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
