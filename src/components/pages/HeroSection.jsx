import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa'; // Importing icons



function HeroSection() {
  return (
    <section className="relative w-screen h-screen overflow-hidden lg:ml-[-260px]  ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dmvxwzpf7/video/upload/f_auto//v1725812451/AdobeStock_85756422_es9ls0.mov"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectPosition: 'lg: left' }}
      />

      {/* Overlay Shade for better readability in dark mode */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 dark:block hidden" />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white lg:w-[calc(100%+165px)]">
        <h1 className="text-4xl font-bold mb-4 text-primary">HARRY WRS MCDONALD</h1>
        <p className="text-xl mb-6">Full Stack Developer</p>
        <div className="flex space-x-4">


          {/* Get Started Button */}
        <Link
            to="/experience" // Linking to the Experience page route
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-transparent border border-primary rounded-lg backdrop-blur-md backdrop-filter hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-black dark:hover:border-black dark:hover:text-white transition-colors"
          >
            <FaArrowRight className="mr-2" />
            Get Started
          </Link>


           {/* Download CV Button */}
           <a
            href="https://res.cloudinary.com/dmvxwzpf7/image/upload/v1725814777/Harry-Mcdonald-CV_1_xrtqtc.pdf"
            download="Harry-Mcdonald-CV.pdf" // Optional: specify the filename
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-transparent border border-primary rounded-lg backdrop-blur-md backdrop-filter hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-black dark:hover:border-black dark:hover:text-white transition-colors"
          >
            <FaDownload className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
