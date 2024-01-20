import { NavLink } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";

const NavBar = () => (
    <nav>
      <ul>
        <li id="nav_left">
          <NavLink to="/"><img src='' alt="Logo" /></NavLink>
        </li>
      </ul>
      <ul>
        <li id="nav_options">
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
          <FaRegHeart id="heart-btn" />
        </li>
        <li>
          <NavLink to="/cart"> </NavLink>
        </li>
        <li>
          <NavLink to="/profile"> </NavLink>
        </li>
      </ul>
    </nav>
  );
  
  export default NavBar;