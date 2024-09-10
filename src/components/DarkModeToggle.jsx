import { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.css'; // Ensure you have the necessary CSS

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  // Toggle dark mode and save it in localStorage
  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      {/* Label for Dark Mode */}
      <h6 className="text-sm label-dark text-light-text dark:text-dark-text">Dark</h6>
      
      {/* Toggle Switch */}
      <div 
        className="relative inline-flex items-center cursor-pointer w-12 h-6 bg-gray-300 rounded-full dark:bg-gray-700" 
        onClick={toggleDarkMode}
        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <span 
          className={`absolute left-1 top-1 w-4 h-4 bg-white border border-gray-300 rounded-full dark:border-gray-600 transform transition-transform ${
            isDarkMode ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </div>
      
      {/* Label for Light Mode */}
      <h6 className="text-sm label-light text-light-text dark:text-dark-text">Light</h6>
    </div>
  );
}

export default DarkModeToggle;
