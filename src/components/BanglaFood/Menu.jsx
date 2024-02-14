import React, { useState } from 'react';
import styles from './Menu.module.css'; // Import the CSS module

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={styles.menu}>
      <h2>Our Menu</h2>

      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${toggleMenu ? styles.buttonIsActive : ''}`}
          onClick={handleClick}
          data-target="pizzaMenu"
        >
          Pizzas
        </button>
        <button className={styles.button} onClick={handleClick} data-target="coffeeMenu">
          Coffee
        </button>
        <button className={styles.button} onClick={handleClick} data-target="noodlesMenu">
          Noodles
        </button>
      </div>

      <div className={`${styles.menuContent} ${toggleMenu ? styles.menuIsVisible : ''}`} id="pizzaMenu">
        {/* Pizza menu content */}
      </div>
      <div className={`${styles.menuContent} ${toggleMenu ? styles.menuIsVisible : ''}`} id="coffeeMenu">
        {/* Coffee menu content */}
      </div>
      <div className={`${styles.menuContent} ${toggleMenu ? styles.menuIsVisible : ''}`} id="noodlesMenu">
        {/* Noodles menu content */}
      </div>
    </div>
  );
};

export default Menu;