import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 flex items-center justify-between h-16 bg-white font-bold text-gray-700 sticky top-0 z-10 box-border">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src='https://res.cloudinary.com/dv1mouzbi/image/upload/v1717613792/devSources/logoOtakuKaio_c7r103.png' alt="Logo" className="w-10 h-10 mr-4 rounded-full" />
        </NavLink>
      </div>

      {/* Menú de navegación para pantallas grandes */}
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

      {/* Íconos del carrito y perfil */}
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

      {/* Ícono de hamburguesa para pantallas móviles */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isMenuOpen ? <HiX /> : <HiOutlineMenu />} {/* Alterna entre el icono de menú y de cerrar */}
        </button>
      </div>

      {/* Menú desplegable para pantallas móviles */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 shadow-md md:hidden z-10">
          <li className={`py-2 hover:bg-gray-200 cursor-pointer ${activeLink === "/" ? 'bg-gray-100' : ''}`} >
            <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          </li>
          <li className={`py-2 hover:bg-gray-200 cursor-pointer ${activeLink === "/about" ? 'bg-gray-100' : ''}`} >
            <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
          </li>
          <li className={`py-2 hover:bg-gray-200 cursor-pointer ${activeLink === "/store" ? 'bg-gray-100' : ''}`} >
            <NavLink to="/store" onClick={toggleMenu}>Store</NavLink>
          </li>
          <li className={`py-2 hover:bg-gray-200 cursor-pointer ${activeLink === "/offers" ? 'bg-gray-100' : ''}`} >
            <NavLink to="/offers" onClick={toggleMenu}>Offers</NavLink>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-center rounded-full border border-gray-700 px-4 py-3">
            <NavLink to="/cart" onClick={toggleMenu}>
              <IoCartOutline />
            </NavLink>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer flex items-center justify-center rounded-full bg-yellow-400 px-4 py-3">
            <NavLink to="/profile" onClick={toggleMenu}>
              <FaRegUser />
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;