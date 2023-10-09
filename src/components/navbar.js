import { NavLink} from "react-router-dom";
import { useLocation } from "react-router-dom";

import '../css/navbar.css';

function Navbar() {

  const pages = [
    "Home",
    "Previous Planes",
    "Aerodynamics Team",
    "Structures Team",
    "Systems Team"
  ]

  let title = new URLSearchParams(useLocation().search).get('title');

  pages.forEach((element, index) => {
    pages[index] = <NavLink className={(title == element ? "selected page_link" : "page_link")} to={"/Website/?title=" + element}>{element}</NavLink>;
  });

  return (
    <div className="navbar">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger"/>
      
      <div className="nav_list">
        {pages}
      </div>

    </div>
    
  );
}

export default Navbar;