import React, { useState } from "react";
import styles from "./Menu.module.css";
import breakfast1 from "../../assets/food1.png";
import breakfast2 from "../../assets/food3.png";
import breakfast3 from "../../assets/food2.png";

const Menu = ({ activeMenu }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const FoodCard = ({ image, name, details, price }) => (
    <div className={styles.foodCard}>
      <img src={image} alt={name} className={styles.foodImage} />
      <div className={styles.cardButtons}>
        <button className={styles.cardButton}>Details</button>
        <button
          className={styles.cardButton}
          onClick={() => addToCart({ name, price })}
        >
        Cart
        </button>
        <button className={styles.priceButton}>${price}</button>
      </div>
    </div>
  );

  const CartItem = ({ item, index }) => (
    <li>
      {item.name} - ${item.price}
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </li>
  );

  const breakfastItems = (
    <>
      <FoodCard
        image={breakfast1}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={24}
      />
      <FoodCard
        image={breakfast2}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={25}
      />
      <FoodCard
        image={breakfast3}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={105}
      />
      <FoodCard
        image={breakfast2}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={25}
      />
      <FoodCard
        image={breakfast1}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={24}
      />
    </>
  );

  return (
    <>
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {/* Food items */}
        {activeMenu === "breakfast" && breakfastItems}
        {/* Render lunchItems, dinnerItems, drinksItems, and dessertItems similarly */}
      </div>
      <div className={styles.cart}>
        {/* Cart section */}
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} index={index} />
          ))}
        </ul>
        <h3>Total Price: ${getTotalPrice()}</h3>
      </div>
    </div>
    </>
  );
};

export default Menu;
