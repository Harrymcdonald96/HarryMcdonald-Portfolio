import { useState, useEffect } from 'react';
import '../styles/DarkModeToggle.css'; // Make sure to include the CSS file in your project

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="mode-toggle noselect">
      <h6 className="label-dark">Dark</h6>
      <div 
        className="toggle-switch" 
        onClick={toggleDarkMode}
        title={isDarkMode ? 'Go light' : 'Go dark'}
        alt={isDarkMode ? 'Go light' : 'Go dark'}
      />
      <h6 className="label-light">Light</h6>
    </div>
  );
}

export default DarkModeToggle;
