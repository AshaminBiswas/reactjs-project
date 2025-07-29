import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"


function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="Main Netflix Logo" />

        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="Search Icon" className='nav-icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Bell Icon" className='nav-icons' />
        <div className="nav-profile">
          <img src={profile_icon} alt="Profile Icon" className='profile' />
          <img src={caret_icon} alt="Dropdown Icon" />
        </div>

        <div className="dropdown">
          <p>Sign Out of Netflix</p>
        </div>


      </div>
    </div>
  )
}

export default Navbar
