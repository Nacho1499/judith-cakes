import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

function Navbar(){
    return(
      
        <nav className=" navbar navbar-expand-sm  fixed-top ">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <Link className="nav-link text-light" to="/" >Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/contact" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light"to="/gallery" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/products" >Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/event" >Events</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
};

 export default Navbar