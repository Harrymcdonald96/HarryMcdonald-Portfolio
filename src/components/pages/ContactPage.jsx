import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState(''); // To track alert message

  // Effect to hide the alert message after 3 seconds
  useEffect(() => {
    if (messageStatus) {
      const timer = setTimeout(() => {
        setMessageStatus('');
      }, 3000); // Dismiss after 3 seconds
      return () => clearTimeout(timer); // Clean up timer
    }
  }, [messageStatus]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Use the EmailJS service to send the email with environment variables
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID from EmailJS
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID from EmailJS
      formData,
      import.meta.env.VITE_EMAILJS_USER_ID // User/Public Key from EmailJS
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessageStatus('Message sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setMessageStatus('Failed to send the message, please try again later.');
      });
  };
  
  return (
    <section className="relative w-screen h-screen overflow-y-auto scroll-smooth lg:ml-[-260px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dmvxwzpf7/video/upload/f_auto//v1725812451/AdobeStock_85756422_es9ls0.mov"
        autoPlay
        loop
        muted
        playsInline
        style={{ objectPosition: 'center' }}
      />

      <div className="absolute inset-0 bg-black opacity-50 z-0 dark:block hidden" />

      {/* Fixed Alert */}
      {messageStatus && (
  <div
    className={`fixed top-16 left-1/2 transform -translate-x-1/2 w-2/3 max-w-lg p-4 rounded-lg backdrop-blur-md backdrop-filter border 
      ${messageStatus.includes('successfully') 
        ? 'border-primary text-primary' 
        : 'border-red-500 text-red-500'} 
      dark:border-black bg-dark z-50`}
  >
    {messageStatus}
  </div>
)}




      <div className="relative z-10 h-full flex flex-col items-center justify-center py-5 lg:ml-48">
        <header className="mb-4 text-center">
          <h1 className="text-3xl font-bold text-primary mt-20">Contact Me</h1>
        </header>

        {/* Contact Form Container */}
        <div className="w-full max-w-2xl mx-auto bg-dark p-6 rounded-lg backdrop-blur-md backdrop-filter border border-primary dark:border-black">
          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md text-white 
                  dark:border-white dark:hover:border-black hover:border-primary focus:border-primary dark:focus:border-black outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md text-white 
                  dark:border-white dark:hover:border-black hover:border-primary focus:border-primary dark:focus:border-black outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full p-2 bg-transparent border border-gray-300 rounded-md text-white 
                  dark:border-white dark:hover:border-black hover:border-primary focus:border-primary dark:focus:border-black outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-sm font-medium text-white bg-transparent border border-primary rounded-lg 
              backdrop-blur-md backdrop-filter hover:bg-primary hover:text-white dark:border-white dark:hover:bg-black 
              dark:hover:border-black dark:hover:text-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Information as Footer */}
        <footer className="mt-8 w-full text-center text-white">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <div className="flex justify-center items-center space-x-4">
            <FaEnvelope className="w-6 h-6 text-white dark:text-black" />
            <a href="mailto:harryquirk1996@gmail.com" className="underline text-primary">harryquirk1996@gmail.com</a>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-2">
            <FaPhone className="w-6 h-6 text-white dark:text-black" />
            <p>07354710897</p>
          </div>

          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/harry-wrs-mcdonald" target="_blank" rel="noopener noreferrer" className="text-white dark:text-black hover:text-primary dark:hover:text-primary transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Harrymcdonald96" target="_blank" rel="noopener noreferrer" className="text-white dark:text-black hover:text-primary dark:hover:text-primary transition-colors">
              <FaGithub className="w-6 h-6" />
              </a>
            <a href="https://res.cloudinary.com/dmvxwzpf7/image/upload/v1725814777/Harry-Mcdonald-CV_1_xrtqtc.pdf" download className="text-white dark:text-black hover:text-primary dark:hover:text-primary transition-colors ">
              <FiDownload className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ContactPage;
