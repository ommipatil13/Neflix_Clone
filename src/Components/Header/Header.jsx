import React from 'react';
import logo from '../../netflix.png';
import {Link} from "react-router-dom";
// import {ImSearch} from "react-icons/im";

const Header = () => {
    
  return (
    
    <nav className="header">

        <img src={logo} alt="logo" />

        <div>
            <Link to="/"> Home</Link>
            <Link to="/popular"> Popular</Link>
            <Link to="/movies"> Movies</Link>
            <Link to="/toprated"> Top Rated</Link>
        </div>

        

         {/* <ImSearch /> */}


    </nav>
  )
}

export default Header