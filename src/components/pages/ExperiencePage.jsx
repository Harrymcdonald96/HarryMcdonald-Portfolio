import { useEffect, useRef } from 'react';
import Popover from '../Popover';

import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaCode, FaBullhorn, FaUsers, FaGlassCheers, FaDumbbell } from 'react-icons/fa';
import 'animate.css';

const Timeline = () => {
  const timelineRefs = useRef([]);

  const timelineItems = [
    {
      date: 'June 2024 – September 2024',
      title: 'Level 3 Software Development Bootcamp',
      company: 'Just IT, Online',
      icon: <FaCode />,
      description: (
        <>
          <p>Web Development: Gained proficiency in HTML, CSS, and JavaScript.</p>
          <p>Database Design: Learned fundamentals of relational databases.</p>
        </>
      ),
    },
    {
      date: '2017 – 2022',
      title: 'Digital Marketing Executive',
      company: 'The Vaults, Exeter',
      icon: <FaBullhorn />,
      description: (
        <>
          <p>Managed the nightclubs digital presence, focusing on social media platforms.</p>
          <p>Developed marketing campaigns aligned with event schedules and promotions.</p>
        </>
      ),
    },
    {
      date: '2019 – 2022',
      title: 'Club Manager',
      company: 'The Vaults, Exeter',
      icon: <FaUsers />,
      description: (
        <>
          <p>Oversaw daily operations, staff scheduling, and customer service.</p>
          <p>Coordinated and executed successful events with local businesses.</p>
        </>
      ),
    },
    {
      date: '2017 – 2019',
      title: 'Cocktail Bar Manager',
      company: 'The Vaults, Exeter',
      icon: <FaGlassCheers />,
      description: (
        <>
          <p>Managed bar operations, including inventory and staff training.</p>
          <p>Promoted events through social media.</p>
        </>
      ),
    },
    {
      date: '2014 – 2024',
      title: 'Personal Trainer/Fitness Instructor',
      company: 'A-PEX FITNESS, Self-employed',
      icon: <FaDumbbell />,
      description: (
        <>
          <p>Provided personalized fitness training and nutrition guidance.</p>
          <p>Built a loyal client base through effective and consistent service.</p>
        </>
      ),
    },
  ];

  useEffect(() => {
    const currentRefs = timelineRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInRight');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 }
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
       src="https://res.cloudinary.com/dmvxwzpf7/video/upload/f_auto//v1725812451/AdobeStock_85756422_es9ls0.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Shade */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 dark:block hidden" />

      {/* Content Container */}
      <div className="relative z-10 h-full overflow-y-scroll flex items-center justify-center">
        <div className="timeline-container max-w-5xl mx-auto px-4 py-16 pt-48 lg:pl-24 xl:pl-32">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center animate__animated animate__zoomInDown" style={{ animationDuration: '1s' }}>
            Professional Experience
          </h2>
          <ol className="relative lg:pl-24 xl:pl-32">
            {timelineItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                className="mb-16 flex items-center opacity-0 transform translate-x-full"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex items-center justify-center w-10 h-10 bg-transparent text-primary border-2 border-primary rounded-full backdrop-blur-md backdrop-filter animate-float hover:animate-float-hover">
                  {item.icon}
                </div>
                <div className="ml-4 flex-1 border-l-4 border-primary pl-4">
                  <span className="text-sm font-medium text-white dark:text-black">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-semibold text-white dark:text-black mt-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {item.company}
                  </p>
                  <Popover title={item.title} content={item.description}>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-transparent border border-primary rounded-lg backdrop-blur-md backdrop-filter hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-black dark:hover:border-black dark:hover:text-white transition-colors"
                    >
                      More Info
                      <HiOutlineInformationCircle className="ml-2 w-5 h-5" />
                    </a>
                  </Popover>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
