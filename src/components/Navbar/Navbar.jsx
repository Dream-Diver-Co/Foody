import React, { useState } from 'react';

import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faAddressCard, faBars, faAward, faAddressBook, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"
import images from "../../constants/images";
// import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import Megamenu from "../Megamenu/Megamenu";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.foodymoody} alt="app__logo" />
        
      </div>

      <ul className="app__navbar-links"> 
        <li className="p__opensans"><a href="/">Home</a></li>

        <Link to='/About'>
        <li className="p__opensans"><a href="#about">About Us</a></li>
        </Link>
        <Link to='/menu'>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        </Link>
        <Link to='/Feature'>
        <li className="p__opensans"><a href="#awards">Featured-Bonus</a></li>
        </Link>
        <Link to='/Subscription'>
        <li className="p__opensans"><a href="#contact">Subscription</a></li>
        </Link>
        <Link to='/shef'>
        <li className="p__opensans"><a href="#contact">Chef-At-Home</a></li>
        <Megamenu />
        </Link>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true) } />
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() =>setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
            <li className="p__opensans"><a href="#menu">Menu</a></li>
            <li className="p__opensans"><a href="#awards">Awards</a></li>
            <li className="p__opensans"><a href="#contact">Contacts</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
