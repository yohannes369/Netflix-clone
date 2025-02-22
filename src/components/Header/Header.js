import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className="header_outer_container">
    <div className="header_container"> 
        <div className="header_left">
            <ul>
                  <li>Netflix</li>
                    <li>HOME</li>
                    <li>tV Shows</li>
                    <li>mOVIES</li>
                    <li>latest</li>  
                    <li>mylist</li>  
                    <li>browse laguages</li>  

            </ul>
            </div>   

    </div>
    <div className="header_right">
        <ul>
            <li>searchIcon</li>
            <li>notificationNoneIcon</li>
            <li>ArrowBoxIcon</li>
            <li>ArroDropDownIcon</li>
            
        </ul>

    </div>
    </div>
  )
}

export default Header