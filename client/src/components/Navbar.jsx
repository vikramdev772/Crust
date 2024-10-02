import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <nav className="bg-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">CRUST Corporation</Link>
        </div>

        {/* Links for Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-200">
            Home
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white transition duration-200">
            Services
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition duration-200">
            About
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-200">
            Contact
          </Link>
          <Link to="/form" className="text-gray-300 hover:text-white transition duration-200">
            Form
          </Link>
          <Link to="/data" className="text-gray-300 hover:text-white transition duration-200">
            Data
          </Link>
        </div>

        {/* CTA Button for Desktop */}
        <div className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
            Get A Quote
          </button>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 text-center">
          <Link to="/" className="block text-gray-300 py-2 hover:text-white transition duration-200" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/services" className="block text-gray-300 py-2 hover:text-white transition duration-200" onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/about" className="block text-gray-300 py-2 hover:text-white transition duration-200" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="block text-gray-300 py-2 hover:text-white transition duration-200" onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/form" className="block text-gray-300 py-2 hover:text-white transition duration-200" onClick={toggleMenu}>
            Form
          </Link>
          <Link to="/data" className="block text-gray-300 py-2 hover:text-white transition duration-200" onClick={toggleMenu}>
            Data
          </Link>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 mt-4 rounded-lg" onClick={toggleMenu}>
            Get A Quote
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
