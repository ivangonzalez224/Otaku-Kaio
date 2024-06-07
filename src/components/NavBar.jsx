import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  const activeLink = location.pathname;

  return (
    <nav className="w-full px-4 flex items-center justify-between h-16 bg-white font-bold text-gray-700 sticky top-0 z-1 box-border">
      <ul className="flex items-center">
        <li className="flex items-center">
          <NavLink to="/">
            <img src='https://res.cloudinary.com/dv1mouzbi/image/upload/v1717613792/devSources/logoOtakuKaio_c7r103.png' alt="Logo" className="w-10 h-10 mr-4 rounded-full" />
          </NavLink>
        </li>
      </ul>
      <ul className="w-99 flex items-center justify-around bg-gray-200 px-2 py-1 rounded-lg">
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
      <ul className="flex items-center justify-end">
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
    </nav>
  );
};

export default NavBar;