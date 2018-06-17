import React, { Component } from "react";
import Logo_long from '../images/Logo_long.svg';

class Header extends Component {
   render() {
      return (

         <div className="header section">
            <div className="header-title">
               <img src={Logo_long} className="logo" alt="Logo"/>
            </div>
         </div>

      );
   }
}


export default Header;