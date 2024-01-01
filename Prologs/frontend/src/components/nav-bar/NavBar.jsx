import React from "react";
import "./NavBar.css";
import prologLogo from "../../assest/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
    <div className="nav-bar" >
      <div className="image">
        <img src={prologLogo} />
        <span className="logo-text">
          <p>ProLogs</p>
        </span>
      </div>
      <div className="search">
        <i className="fas fa-search"></i>
        <CiSearch className="search-icon" />
        <input  className="nav-bar-input" type="text" placeholder="Search or type" />
      </div>
      <div className="profile">
        <IoMdNotificationsOutline className="notification-icon" />
        <CgProfile className="profile-icon" />
      </div>
    </div>
  );
}

export default NavBar;
