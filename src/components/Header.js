import React, { Component } from "react";
import Logo_long from '../images/Logo_long.svg';

class Header extends Component {
   render() {
      return (

         <div className="header section">
               <img src={Logo_long} className="logo" alt="Logo"/>
         </div>

      );
   }
}


export default Header;