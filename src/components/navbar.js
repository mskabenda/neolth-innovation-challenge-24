import React from 'react'
import './css/Navbar.css' // style design for this navbar
import logoImg from '../assets/Navbar/NEOLTH_Logo.jpg';
import userIcon from '../assets/Navbar/user_icon.jpg';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <img src={logoImg} alt="Neolth Logo" className="navbar-logo" />

        {/* User Icon */}
        <img src={userIcon} alt="User Profile" className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;