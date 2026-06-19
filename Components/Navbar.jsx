import { NavLink } from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "../Context/ThemeContext";

import "./../Styles/Navbar.css";

export default function Navbar() {

  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <nav className={`navbar ${theme}`}>
<h2 className="logo">Gusto Bakery</h2>

<div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/services">Services</NavLink>
     </div> 

     <button onClick={toggleTheme}>{theme==="light" ? "🌙" : "☀️"}</button>
    </nav>
  );
}
