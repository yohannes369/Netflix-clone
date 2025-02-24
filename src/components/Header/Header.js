import React from 'react';
import "./header.css";
import netflix from "../../asset/image/netflix.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
    return (
        <div className="header_outer_container">
            <div className="header_container">
                {/* Left Side (Logo + Nav Links) */}
                <div className="header_left">
                    <ul>
                        <li><img src={netflix} alt="netflix" width="100" /></li>
                        <li>HOME</li>
                        <li>TV Shows</li>
                        <li>MOVIES</li>
                        <li>Latest</li>
                        <li>My List</li>
                        <li>Browse Languages</li>
                    </ul>
                </div>

                {/* Right Side (Search Icon) */}
                <div className="header_right">
                    <ul>
                        <li><SearchIcon /></li>
                        <li><NotificationsNoneIcon /></li>
                        <li><AccountBoxIcon /></li>
                        <li><ArrowDropDownIcon /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
