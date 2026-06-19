import {Link, Outlet} from "react-router-dom";
import "../Styles/Services.css";

export default function Services() {
  return (
    <div className="page">

    <h1>Bakery Services</h1>
    <ul>
        <li><Link to="/cakes">Cakes</Link></li>
        <li><Link to="/pastries">Pastries</Link></li>
        <li><Link to="/cookies">Cookies</Link></li>
    </ul>
    <Outlet />
      
    </div>
  );
}
