import { NavLink} from "react-router-dom";

import '../css/navbar.css';

function Navbar() {

  return (
    <div className="navbar">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      
      <div className="nav_list">
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/">Home</NavLink>
        <NavLink className={({isActive}) => (isActive ? "selected page_link" : "page_link")} to="/previous_planes">Previous Planes</NavLink>
      </div>

    </div>
    
  );
}

export default Navbar;