import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/nike logo.png';
import { useState, useEffect, useRef } from 'react';
import { MdOutlineAddShoppingCart, MdSearch, MdClose } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);
  const navigator = useNavigate();
  const [buttonText, setButtonText] = useState(false)

  // Sample search suggestions
  const sampleSuggestions = [
    "Air Force 1",
    "Air Max",
    "Jordan",
    "Running Shoes",
    "Basketball Shoes"
  ];

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      const filtered = sampleSuggestions.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) setSearchQuery('');
  };

  const handleNavigate = () => navigator('/');

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold'
      : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-colors duration-300';

  const mobileLinkStyle = ({ isActive }) =>
    `block px-4 py-3 border-l-4 ${isActive
      ? 'border-purple-500 text-purple-700 bg-purple-50'
      : 'border-transparent hover:border-purple-300 hover:bg-purple-50'
    }`;

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50 shadow-md py-1 top-0 sticky z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Main navigation container */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer">
            <img
              onClick={handleNavigate}
              src={logo}
              alt="Nike logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Search bar - toggleable on mobile and medium screens */}
          <div className={`${isSearchOpen ? 'fixed inset-0 bg-white py-4 px-4 z-40' : 'hidden'} lg:flex lg:flex-1 lg:justify-center lg:mx-4`}>
            <div
              ref={searchRef}
              className={`${isSearchOpen ? 'w-full max-w-md mx-auto' : 'w-full max-w-md'}`}
            >
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                >
                  <MdClose size={20} />
                </button>

                {/* Search suggestions */}
                {suggestions.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-auto">
                    {suggestions.map((item, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSearchQuery(item);
                          setSuggestions([]);
                          setIsSearchOpen(false);
                          navigator('/shop');
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop navigation links and icons - only show on large screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            <ul className="flex space-x-4 text-gray-600">
              {['new-featured', 'category', 'collection', 'sports'].map((path) => (
                <li key={path} className="px-2">
                  <NavLink
                    to={`/${path}`}
                    className={linkStyle}
                  >
                    {path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 ml-4">
              <NavLink to="/cart" >
                <MdOutlineAddShoppingCart size={24} />
              </NavLink>
              <NavLink to="/favorite" >
                <GrFavorite size={24} />
              </NavLink>
            </div>

            <div className="ml-4">
              {buttonText === false ? <NavLink to="/signin">
                <button className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                  Sign In
                </button>
              </NavLink> : <NavLink to="/login">
                <button className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                  Login
                </button>
              </NavLink>}
            </div>
          </div>

          {/* Mobile menu buttons (search and hamburger) - show on medium and small screens */}
          <div className="flex items-center lg:hidden space-x-4">
            {!isSearchOpen && (
              <button
                onClick={toggleSearch}
                className="text-gray-600 hover:text-purple-500 transition-colors"
              >
                <MdSearch size={24} />
              </button>
            )}
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <MdClose size={24} />
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu - show on medium and small screens */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              <MdClose size={24} />
            </button>
          </div>

          <div className="pt-4 pb-3 space-y-1 px-4">
            {['new-featured', 'category', 'collection', 'sports'].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                className={mobileLinkStyle}
                onClick={toggleMenu}
              >
                {path.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')}
              </NavLink>
            ))}

            <div className="flex gap-4 px-4 py-3">
              <NavLink to="/cart" onClick={toggleMenu} className="flex items-center">
                <MdOutlineAddShoppingCart size={24} className="mr-2" />
                Cart
              </NavLink>
              <NavLink to="/favorite" onClick={toggleMenu} className="flex items-center">
                <GrFavorite size={24} className="mr-2" />
                Favorites
              </NavLink>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 pt-2 pb-6 px-8 border-t">
            {buttonText === false ? <NavLink to="/signin" onClick={toggleMenu}>
              <button className="w-full py-3 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                Sign In
              </button>
            </NavLink> : <NavLink to="/login" onClick={toggleMenu}>
              <button className="w-full py-3 text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300">
                Login
              </button>
            </NavLink>}
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={toggleMenu}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;