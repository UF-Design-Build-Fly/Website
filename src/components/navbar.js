import { NavLink} from "react-router-dom";

import '../css/navbar.css';

function Navbar() {

  return (
    <div className="navbar">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      
      <div className="nav_list">
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/Website/?title=Home">Home</NavLink>
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/Website/?title=Previous Planes">Previous Planes</NavLink>
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/Website/?title=Structures Team">Aerodynamics Team</NavLink>
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/Website/?title=Structures Team">Structures Team</NavLink>
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/Website/?title=Structures Team">Systems Team</NavLink>
      </div>

    </div>
    
  );
}

export default Navbar;