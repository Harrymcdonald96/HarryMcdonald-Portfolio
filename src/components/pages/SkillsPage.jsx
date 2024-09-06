import { useEffect, useRef } from 'react';
import video from '../../../dist/assets/Adobestock_85756422-D01-Tfm8.mov';
import { javascriptIcon, pythonIcon, htmlIcon, cssIcon, sqlIcon, reactIcon, nodejsIcon, expressIcon, tailwindIcon, mongodbIcon, illustratorIcon, photoShopIcon, figmaIcon, canvaIcon } from '../../assets/skillsIcons';
import { FaCode, FaDatabase, FaLayerGroup, FaPaintBrush } from 'react-icons/fa';
import '../../styles/skillsIcons.css';

const skills = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', icon: javascriptIcon, level: 80 },
      { name: 'Python', icon: pythonIcon, level: 75 },
      { name: 'HTML', icon: htmlIcon, level: 90 },
      { name: 'CSS', icon: cssIcon, level: 85 },
      { name: 'SQL', icon: sqlIcon, level: 70 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', icon: reactIcon, level: 80 },
      { name: 'Node.js', icon: nodejsIcon, level: 70 },
      { name: 'Express.js', icon: expressIcon, level: 65 },
      { name: 'Tailwind CSS', icon: tailwindIcon, level: 75 },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: mongodbIcon, level: 70 },
    ],
  },
  {
    category: 'Graphic Design Tools',
    skills: [
      { name: 'Adobe Illustrator', icon: illustratorIcon, level: 40 },
      { name: 'Adobe Photoshop', icon: photoShopIcon, level: 50 },
      { name: 'Canva', icon: canvaIcon, level: 80 },
      { name: 'Figma', icon: figmaIcon, level: 60 },
    ],
  },
];

const SkillsPage = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const currentRefs = skillRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-right');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden lg:ml-[-260px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{ objectPosition: 'center' }}
      />

      {/* Overlay Shade */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 dark:block hidden" />

      {/* Content Container */}
      <div className="relative z-10 h-full overflow-y-scroll flex flex-col items-center py-5 lg:ml-48">
        <div className="w-full max-w-4xl mx-auto"> {/* Adjust the max-width as needed */}
          <header className="mb-8 mt-36 text-center">
            <h1 className="text-3xl font-bold text-primary animate__animated animate__zoomInDown">Skills</h1>
          </header>

{/* Sub-Navigation */}
<nav className="flex flex-col items-center mb-8 space-y-4 fixed top-1/4 right-6 z-20">
  <a href="#Programming-Languages" className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border-2 border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
    <FaCode className="text-2xl" />
  </a>
  <a href="#Frameworks-&-Libraries" className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border-2 border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
    <FaLayerGroup className="text-2xl" />
  </a>
  <a href="#Databases" className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border-2 border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
    <FaDatabase className="text-2xl" />
  </a>
  <a href="#Graphic-Design-Tools" className="w-10 h-10 flex justify-center items-center rounded-full bg-transparent border-2 border-primary text-light-icon dark:text-dark-icon hover:text-primary dark:hover:text-primary transition-colors backdrop-blur-md"
      >
    <FaPaintBrush className="text-2xl" />
  </a>
</nav>


          {/* Skill Categories */}
          {skills.map((category, index) => (
            <section key={index} id={category.category.split(' ').join('-')} className="mb-12 w-full text-center pt-20 -mt-10">
              <h2 className="text-2xl font-semibold mb-6 text-white dark:text-black">{category.category}</h2>
              <div className="flex flex-col space-y-10 items-center">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="w-full max-w-lg flex flex-col items-center">
                    {/* SVG Icon with Intersection Observer */}
                    <div
                      ref={(el) => (skillRefs.current[skillIndex] = el)}
                      className="skills-icons-large floating-effect skills-icons flex items-center justify-center mb-4 mt-20 p-2 transition-colors hover:bg-opacity-30 hover:bg-white hover:backdrop-blur-md dark:hover:bg-black dark:hover:bg-opacity-30"
                    >
                      {skill.icon}
                    </div>

                    {/* Progress Bar with Intersection Observer */}
                    <div
                      ref={(el) => (skillRefs.current[category.skills.length + skillIndex] = el)}
                      className="w-full max-w-xs md:max-w-sm lg:max-w-md animate-float-side"
                    >
                      <div className="relative w-full h-4 bg-transparent border border-primary dark:border-white rounded-full backdrop-blur-md backdrop-filter overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-primary backdrop-blur-md backdrop-filter"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
