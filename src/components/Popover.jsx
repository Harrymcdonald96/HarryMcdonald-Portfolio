import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import PopoverPortal from './PopoverPortal'; // Import PopoverPortal

const Popover = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [popoverStyle, setPopoverStyle] = useState({});
  const buttonRef = useRef(null); // Reference to the button

  // Function to toggle the popover's visibility and set its position
  const togglePopover = () => {
    if (!isVisible) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPopoverStyle({
        top: `${rect.top + window.scrollY}px`, // Positioning based on button's top
        left: `${rect.left + rect.width / 2}px`,
        transform: 'translateX(-50%) translateY(-110%)', // Position above the button
      });
    }
    setIsVisible(!isVisible);
  };

  // Effect to handle resizing and scrolling, ensuring popover stays correctly positioned
  useEffect(() => {
    const handleResize = () => {
      if (isVisible && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setPopoverStyle({
          top: `${rect.top + window.scrollY}px`, // Ensure correct positioning on resize
          left: `${rect.left + rect.width / 2}px`,
          transform: 'translateX(-50%) translateY(-110%)', // Maintain position above the button
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [isVisible]);

  return (
    <div className="relative">
      <button
        type="button"
        ref={buttonRef} // Attach the ref to the button
        className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-black bg-transparent border border-primary rounded-lg backdrop-blur-md backdrop-filter hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-black dark:hover:border-black dark:hover:text-white transition-colors animate-float-side animate-float-hover-side"
        onClick={togglePopover}
      >
        More Info
      </button>

      {isVisible && (
        <PopoverPortal>
          <div
            id="popover-content"
            role="tooltip"
            className="absolute z-50 w-64 text-sm font-light transition-opacity duration-300 border border-primary rounded-lg backdrop-blur-md backdrop-filter bg-transparent" // Updated styles for Popover
            style={popoverStyle} // Apply the dynamic popoverStyle
          >
            <div className="p-3">
              <p className="mb-2 text-lg font-semibold text-primary">
                {title}
              </p>
              <div className="mb-4 text-light-text dark:text-dark-text">
                {content}
              </div>
            </div>
          </div>
        </PopoverPortal>
      )}
    </div>
  );
};

Popover.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Popover;
