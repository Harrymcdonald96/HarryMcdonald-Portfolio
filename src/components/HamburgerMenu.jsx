import PropTypes from 'prop-types';

function HamburgerMenu({ isOpen, toggleSidebar }) {
  if (isOpen) return null; // Do not render if the sidebar is open

  return (
    <button
      className="fixed top-4 left-4 p-2 bg-transparent z-50 lg:hidden focus:outline-none focus:ring-0 focus:border-0 hover:outline-none hover:ring-0 hover:border-0 active:outline-none active:ring-0 active:border-0"
      onClick={toggleSidebar}
    >
      <div className="w-6 h-6 flex flex-col justify-between hover:text-primary group">
        {/* Apply hover effect to all lines when any one of them is hovered */}
        <span className="block w-8 h-1 bg-white transition-colors group-hover:bg-primary"></span>
        <span className="block w-8 h-1 bg-white transition-colors group-hover:bg-primary"></span>
        <span className="block w-8 h-1 bg-white transition-colors group-hover:bg-primary"></span>
      </div>
    </button>
  );
}

HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default HamburgerMenu;
