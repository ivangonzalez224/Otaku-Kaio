import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import '../assets/styles/NavBar.css';

const NavBar = () => (
    <nav>
      <ul>
        <li id="nav_left">
          <NavLink to="/"><img src='' alt="Logo" /></NavLink>
        </li>
      </ul>
      <ul className="nav_center">
        <li id="nav_options" className="nav-homeOpt">
          <NavLink to="/">Home</NavLink>
        </li>
        <li id="nav_options">
          <NavLink to="/">About</NavLink>
        </li>
        <li id="nav_options">
          <NavLink to="/">Store</NavLink>
        </li>
        <li id="nav_options">
          <NavLink to="/">Offerts</NavLink>
        </li>
      </ul>
      <ul id="nav-rigth">
        <li>
          <NavLink ><FaRegHeart id="heart-btn" /></NavLink>
        </li>
        <li>
          <NavLink to="/cart"><IoCartOutline /></NavLink>
        </li>
        <li id="nav-userIcon">
          <NavLink to="/profile"><FaRegUser /></NavLink>
        </li>
      </ul>
    </nav>
  );
  
  export default NavBar;