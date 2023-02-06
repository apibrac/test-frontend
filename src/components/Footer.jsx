import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <footer>
      <nav>
        <ul>
          <li className={location.pathname === "/Contact" ? "active" : ""}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Footer;
