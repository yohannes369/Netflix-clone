import React from 'react';
import "./header.css";

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <li>Netflix</li>
            <li>HOME</li>
            <li>TV Shows</li>
            <li>MOVIES</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse Languages</li>
          </ul>
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li>searchIcon</li>
          <li>notificationNoneIcon</li>
          <li>ArrowBoxIcon</li>
          <li>ArrowDropDownIcon</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
