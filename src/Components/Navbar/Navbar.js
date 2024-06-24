import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import user_icon from '../Assets/user_icon.png';
import search_icon from '../Assets/search_icon.png'
import './Navbar.css'
import down_icon from '../Assets/down_icon.png'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toogleDropDown = () =>{

    setShowDropdown(!showDropdown);

  }
  return (
    <div className='container'>
      <nav className="navbar navbar-expand">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
  <a className="nav-link" href="#">Shop</a>
  <img className="down-icon" src={down_icon} alt="Dropdown Icon" onClick={toogleDropDown} />
    
        {showDropdown &&(
          
          <ul className='dropdown-menu'>
      <li className='nav-item'>
        <a href='#' className='nav-link'>Men</a>
        </li>
        <li className='nav-item'>
        <a href='#' className='nav-link'>Women</a>
        </li>
        <li className='nav-item'>
        <a href='#' className='nav-link'>Kids</a>
        </li>
        </ul>
        )}
    
</li>
            <li className="nav-item">
              <a className="nav-link" href="#">On Sale</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">New Arrivals</a>
            </li>            <li className="nav-item">
              <a className="nav-link" href="#">Brands</a>
            </li>
          </ul>
          <div className="input-group">
            <img src={search_icon} alt="Search Icon" className="input-group-text search-icon" />
            <input type="text" className="form-control" placeholder="Product search.." />
          </div>
          <div className="d-flex align-items-center">
            
            <img src={cart_icon} alt="Cart Icon" className="nav-cart-icon ms-3" />
            <img src={user_icon} alt="User Icon" className="nav-user-icon ms-3" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
