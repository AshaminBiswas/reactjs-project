import { NavLink } from 'react-router-dom';
import logo from '../assets/nike logo.png';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold'
      : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-colors duration-300';

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50 shadow-md py-3">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        {/* Desktop and Mobile Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <img src={logo} alt="Nike logo" className="h-10 w-auto" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex md:justify-between md:items-center md:flex-1 md:px-10">
            <ul className="flex space-x-12 text-gray-600 mx-4">
              <li className="px-2">
                <NavLink to="/new-featured" className={linkStyle}>
                  New & Featured
                </NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/category" className={linkStyle}>
                  Category
                </NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/collection" className={linkStyle}>
                  Collection
                </NavLink>
              </li>
              <li className="px-2">
                <NavLink to="/sports" className={linkStyle}>
                  Sports
                </NavLink>
              </li>
            </ul>

            {/* Login button for desktop */}
            <div className="ml-6">
              <NavLink to="/login">
                <button className="px-6 py-2 text-white rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                  Login
                </button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile menu, slide from right */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="pt-4 pb-3 space-y-1 px-4">
            <NavLink
              to="/new-featured"
              className={({ isActive }) =>
                `block px-4 py-3 border-l-4 ${isActive
                  ? 'border-purple-500 text-purple-700 bg-purple-50'
                  : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
                }`
              }
              onClick={toggleMenu}
            >
              New & Featured
            </NavLink>
            <NavLink
              to="/category"
              className={({ isActive }) =>
                `block px-4 py-3 border-l-4 ${isActive
                  ? 'border-purple-500 text-purple-700 bg-purple-50'
                  : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
                }`
              }
              onClick={toggleMenu}
            >
              Category
            </NavLink>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `block px-4 py-3 border-l-4 ${isActive
                  ? 'border-purple-500 text-purple-700 bg-purple-50'
                  : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
                }`
              }
              onClick={toggleMenu}
            >
              Collection
            </NavLink>
            <NavLink
              to="/sports"
              className={({ isActive }) =>
                `block px-4 py-3 border-l-4 ${isActive
                  ? 'border-purple-500 text-purple-700 bg-purple-50'
                  : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
                }`
              }
              onClick={toggleMenu}
            >
              Sports
            </NavLink>
          </div>

          {/* Login button for mobile */}
          <div className="absolute bottom-0 left-0 right-0 pt-2 pb-6 px-8 border-t">
            <NavLink to="/login" onClick={toggleMenu}>
              <button className="w-full py-3 text-white rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                Login
              </button>
            </NavLink>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </nav >
  )
}

export default Navbar;