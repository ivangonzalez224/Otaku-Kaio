import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (!event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-button')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="w-full px-4 flex items-center justify-between h-16 bg-white font-bold text-gray-700 sticky top-0 z-10 box-border">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src='https://res.cloudinary.com/dv1mouzbi/image/upload/v1717613792/devSources/logoOtakuKaio_c7r103.png' alt="Logo" className="w-10 h-10 mr-4 rounded-full" />
        </NavLink>
      </div>

      {/* Desktop menú */}
      <ul className="hidden md:flex w-99 items-center justify-around bg-gray-200 px-2 py-1 rounded-lg">
        <li className={`rounded-lg px-4 py-2 hover:bg-gray-300 cursor-pointer ${activeLink === "/" ? 'bg-white' : ''}`} >
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={`rounded-lg px-4 py-2 hover:bg-gray-300 cursor-pointer ${activeLink === "/about" ? 'bg-white' : ''}`} >
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={`rounded-lg px-4 py-2 hover:bg-gray-300 cursor-pointer ${activeLink === "/store" ? 'bg-white' : ''}`} >
          <NavLink to="/store">Store</NavLink>
        </li>
        <li className={`rounded-lg px-4 py-2 hover:bg-gray-300 cursor-pointer ${activeLink === "/offers" ? 'bg-white' : ''}`} >
          <NavLink to="/offers">Offers</NavLink>
        </li>
      </ul>

      {/*  cart and profile */}
      <ul className="hidden md:flex items-center justify-end">
        <li className="mr-4 flex items-center justify-center rounded-full border border-gray-700 px-4 py-3">
          <NavLink to="/cart">
            <IoCartOutline />
          </NavLink>
        </li>
        <li className="flex items-center justify-center rounded-full bg-yellow-400 px-4 py-3">
          <NavLink to="/profile">
            <FaRegUser />
          </NavLink>
        </li>
      </ul>

      <div className="md:hidden relative z-30">
        <button onClick={toggleMenu} className="text-2xl hamburger-button focus:outline-none">
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile menú  */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
          <ul className="bg-white w-[90%] max-w-sm mx-auto py-4 rounded-lg shadow-md flex flex-col items-start px-6 space-y-2">
            <li className={`w-full pl-4 py-2 hover:bg-gray-200 cursor-pointer text-left ${activeLink === "/" ? 'bg-gray-100' : ''}`} >
              <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
            </li>
            <li className={`w-full pl-4 py-2 hover:bg-gray-200 cursor-pointer text-left ${activeLink === "/about" ? 'bg-gray-100' : ''}`} >
              <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
            </li>
            <li className={`w-full pl-4 py-2 hover:bg-gray-200 cursor-pointer text-left ${activeLink === "/store" ? 'bg-gray-100' : ''}`} >
              <NavLink to="/store" onClick={toggleMenu}>Store</NavLink>
            </li>
            <li className={`w-full pl-4 py-2 hover:bg-gray-200 cursor-pointer text-left ${activeLink === "/offers" ? 'bg-gray-100' : ''}`} >
              <NavLink to="/offers" onClick={toggleMenu}>Offers</NavLink>
            </li>
            <li className="w-full py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-start rounded-full border border-gray-700 px-4 py-3">
              <NavLink to="/cart" onClick={toggleMenu}>
                <IoCartOutline />
              </NavLink>
            </li>
            <li className="w-full py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-start rounded-full bg-yellow-400 px-4 py-3">
              <NavLink to="/profile" onClick={toggleMenu}>
                <FaRegUser />
              </NavLink>
            </li>
          </ul>
        </div>  
      )}
    </nav>
  );
};

export default NavBar;