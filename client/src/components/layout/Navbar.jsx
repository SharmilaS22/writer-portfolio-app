import React from "react";

const Navbar = () => { 
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark-theme'>
        <a className='navbar-brand' href='/'>
          Sharon JR
        </a>
        <button
          className='navbar-toggler'
          type='button'
          style={{ backgroundColor: "#333" }}
          data-toggle='collapse'
          data-target='#navbarTogglerDemo'
          aria-controls='navbarTogglerDemo'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarTogglerDemo'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item mx-1'>
              <a className='nav-link' href='#home'>
                Home
              </a>
            </li>
            <li className='nav-item mx-1'>
              <a className='nav-link' href='#blog'>
                Blog
              </a>
            </li>
            <li className='nav-item mx-1'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
};
export default Navbar;
