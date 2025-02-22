import React from 'react';
import "./header.css";
import netflix from "../../asset/image/netflix.png";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
            <img src={netflix} alt="netflix" width="100" />
            <li>HOME</li>
            <li>TV Shows</li>
            <li>MOVIES</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li> <SearchIcon /></li>
            {/* <li>notificationNoneIcon</li>
            <li>ArrowBoxIcon</li>
            <li>ArrowDropDownIcon</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
