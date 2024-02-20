import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import Menu from './Menu';
import './BanglaFood.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartModal from './CartModal';

function BanglaFood() {
  const [activeMenu, setActiveMenu] = useState('all');
  const [activeButton, setActiveButton] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false); // State to manage visibility of the cart modal

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveButton(menu);
  };

  const renderButtons = () => {
    const buttons = ['all', 'breakfast', 'lunch', 'dinner', 'drinks', 'dessert'];
    return buttons.map((button) => (
      <button
        key={button}
        className={activeButton === button ? 'active' : ''}
        onClick={() => handleMenuClick(button)}
      >
        {button === 'all' ? 'All' : button.charAt(0).toUpperCase() + button.slice(1)}
      </button>
    ));
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const getTotalCartItems = () => cartItems.length;

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  return (
    <>
      <Navbar />
      <div className="menu-buttons">
        {renderButtons()}
        <div className="cart-button" onClick={toggleCartModal}>
          <FontAwesomeIcon icon={faShoppingCart} />
          {getTotalCartItems() > 0 && <span className="cart-count">{getTotalCartItems()}</span>}
        </div>
      </div>
      <CartModal cartItems={cartItems} show={showCartModal} handleClose={toggleCartModal} />
      <Menu activeMenu={activeMenu} cartItems={cartItems} setCartItems={setCartItems} />
      <Footer />
    </>
  );
}

export default BanglaFood;
