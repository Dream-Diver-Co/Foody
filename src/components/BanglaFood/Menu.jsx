import React, { useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faRetweet,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import breakfast1 from "../../assets/food1.png";
import breakfast2 from "../../assets/biryani4.png";
import breakfast3 from "../../assets/biryani5.png";
import dinner1 from "../../assets/biryani.png";
import dinner2 from "../../assets/biryani2.png";
import dinner3 from "../../assets/biryani3.png";

const Menu = ({ activeMenu }) => {
  const [cartItems, setCartItems] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(Array(10).fill(false));

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const toggleDetails = (index) => {
    const newDetailsVisible = [...detailsVisible];
    newDetailsVisible[index] = !newDetailsVisible[index];
    setDetailsVisible(newDetailsVisible);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const FoodCard = ({ image, name, price, index }) => (
    <div>
      <div className={styles.foodCard}>
        <img src={image} alt="Food" className={styles.foodImage} />
        <div className={styles.overlayIcons}>
          <a href="#">
            <FontAwesomeIcon icon={faHeart} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faRetweet} />
          </a>
          <a href="#" onClick={() => addToCart({ name, price })}>
            <FontAwesomeIcon icon={faCartPlus} />
          </a>
        </div>
      </div>
      <h1>{name}</h1>
      <h1>Price: {price}</h1>
    </div>
  );

  const CartItem = ({ item, index }) => (
    <li className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <p>{item.name}</p>
        <p>${item.price}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashAlt}
        className={styles.deleteIcon}
        onClick={() => removeFromCart(index)}
      />
    </li>
  );

  const renderCartItems = () => {
    return cartItems.map((item, index) => (
      <Dropdown.Item key={index}>
        <CartItem item={item} index={index} />
      </Dropdown.Item>
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {/* Render food items based on active menu */}
        {/* For simplicity, I'm rendering all food items */}
        <FoodCard image={breakfast1} name="Parata Vaji" price={24} />
        <FoodCard image={breakfast2} name="Parata Vaji" price={25} />
        <FoodCard image={breakfast3} name="Parata Vaji" price={105} />
        <FoodCard image={dinner1} name="Dinner Item 1" price={10} />
        <FoodCard image={dinner2} name="Dinner Item 2" price={12} />
        <FoodCard image={dinner3} name="Dinner Item 3" price={15} />
        {/* Render other food items similarly */}
      </div>
      <div className={styles.cart}>
        {/* Cart section */}
        <Dropdown>
          <Dropdown.Toggle variant="success">
            Cart ({cartItems.length})
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <ul>{renderCartItems()}</ul>
            <p>Total Price: ${getTotalPrice()}</p>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Menu;
