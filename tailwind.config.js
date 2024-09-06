import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on a CSS class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Specify the paths to all of the template files in your project
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: '#FB6514',          // Primary Orange
        secondary: '#FD853A',        // Secondary Orange

        // Grays and Neutrals
        'light-gray': '#F9F9F9',     // Light Gray
        'medium-gray': '#6A6A6A',    // Medium Gray
        'dark-gray': '#545454',      // Dark Gray
        'gray-100': '#F1F1F1',       // Lightest Gray
        'gray-200': '#D9D9D9',       // Another Light Gray
        'gray-300': '#A2A2A2',       // Medium Gray
        'gray-400': '#F5F5F5',       // Another Light Gray

        // Sidebar Colors
        'light-sidebar': '#FFFFFF',  // Sidebar light mode
        'dark-sidebar': '#000000',   // Sidebar dark mode

        // Text Colors
        'light-text': '#000000',     // Text color for light mode
        'dark-text': '#FFFFFF',      // Text color for dark mode

        // Icon Colors
        'light-icon': '#000000',     // Icon color for light mode
        'dark-icon': '#FFFFFF',      // Icon color for dark mode

        // Border Colors
        'light-border': '#000000',   // Border color for light mode
        'dark-border': '#FFFFFF',    // Border color for dark mode
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'dark-bg': '#000000',       // Dark mode background
        'light-bg': '#FFFFFF',      // Light mode background
      }),
      textColor: theme => ({
        ...theme('colors'),
        'dark-text': '#FFFFFF',     // Text color for dark mode
        'light-text': '#000000',    // Text color for light mode
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'dark-border': '#2D3748',   // Dark mode border color
        'light-border': '#CBD5E0',  // Light mode border color
      }),
      placeholderColor: theme => ({
        ...theme('colors'),
        'dark-placeholder': '#A0AEC0', // Placeholder text for dark mode
        'light-placeholder': '#6A6A6A', // Placeholder text for light mode
      }),
    },
  },
  plugins: [
    flowbitePlugin,
  ],
}
