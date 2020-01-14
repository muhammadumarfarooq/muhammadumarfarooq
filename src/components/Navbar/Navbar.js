import React from "react";
import navImg from "../../assets/logo.png";

import "./_navbar.scss";

const Navbar = () => {
  return (
    <nav className='main-nav'>
      <div className='container'>
        <div className='showOnSmall'>
          <ul className='dropdown-hamburger'>
            <li>
              <i class='fas fa-bars'></i>
              <ul>
                <li>
                  <a href='#'>Ask a Trade</a>
                </li>
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Trade Signup</a>
                </li>
                <li>
                  <a href='#'>Categories</a>
                </li>
                <li>
                  <a href='#'>Login</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className='navbar-logo' href='/'>
          <div className='img-box'>
            <img src={navImg} width='30' height='30' alt='logo' />
          </div>
          <div className='logo-text'>
            <span>my</span>
            <span className='blue-col'>job</span>
            <span>quote</span>
          </div>
        </a>

        <ul className='navbar-items'>
          <li className='navbar-item hideOnSmall'>
            <a className='navbar-link' href='#'>
              Ask a Trade
            </a>
          </li>
          <li className='navbar-item hideOnSmall'>
            <a className='navbar-link' href='#'>
              Ask Signup
            </a>
          </li>
          <li className='navbar-item hideOnSmall'>
            <a className='navbar-link' href='#'>
              Categories
            </a>
          </li>

          <li className='button button-quote hideOnSmaller'>
            <a className='navbar-link' href='#'>
              Get a Quote
            </a>
          </li>

          <li className='button button-login hide-login'>
            <a className='navbar-link' href='#'>
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
