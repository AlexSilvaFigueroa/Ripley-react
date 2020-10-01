import React, { Component } from "react";
import logo from '../assets/img/logo.svg';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*LOGO*/}
          <div className="logo">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          {/*MENU*/}
          <nav id="menu">
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Producto</a>
              </li>
            </ul>
          </nav>
          {/*LIMPIEAR FLOTADOS*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
