import React, { useState } from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRetweet, faCartPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import breakfast1 from "../../assets/food1.png";
import breakfast2 from "../../assets/food3.png";
import breakfast3 from "../../assets/food2.png";
import { Dropdown, Badge } from "react-bootstrap";

const Menu = ({ activeMenu }) => {
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const [showCartSummary, setShowCartSummary] = useState(false); // State for cart summary visibility

  const FoodCard = ({ image, name, price }) => {
    const handleAddToCart = () => {
      const newItem = { name, price };
      setCartItems((prevItems) => [...prevItems, newItem]); // Add item to cart
    };

    return (
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
            <a href="#" onClick={handleAddToCart}>
              <FontAwesomeIcon icon={faCartPlus} />
            </a>
          </div>
        </div>
        <h1>{name}</h1>
        <h1>Price: {price}</h1>
      </div>
    );
  };

  // Define breakfastItems
  const breakfastItems = (
    <>
      <FoodCard image={breakfast1} name="Parata Vaji" price={24} />
      <FoodCard image={breakfast2} name="Parata Vaji" price={25} />
      <FoodCard image={breakfast3} name="Parata Vaji" price={105} />
      <FoodCard image={breakfast2} name="Parata Vaji" price={25} />
      {/* Define other breakfast items similarly */}
    </>
  );

  // Function to toggle cart summary visibility
  const toggleCartSummary = () => {
    setShowCartSummary((prev) => !prev);
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  // Cart summary dropdown menu
  const CartDropdown = () => (
    <Dropdown.Menu show={showCartSummary} onClick={(e) => e.stopPropagation()} className={styles.cartDropdown}>
      <Dropdown.Item header className={styles.cartHeader}>Cart Summary</Dropdown.Item>
      {cartItems.map((item, index) => (
        <div key={index} className={styles.cartItemContainer}>
          <Dropdown.Item>
            {item.name} - ${item.price} {/* Display item name and price */}
            <FontAwesomeIcon
              icon={faTrash}
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                handleRemoveItem(index); // Remove item from cart
              }}
              style={{ marginLeft: "10px", cursor: "pointer" }}
            />
          </Dropdown.Item>
        </div>
      ))}
      <Dropdown.Item>Total: ${cartItems.reduce((total, item) => total + Number(item.price), 0)}</Dropdown.Item> {/* Calculate and display total amount */}
    </Dropdown.Menu>
  );
  
  
  

  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        {/* Food items */}
        {activeMenu === "breakfast" && breakfastItems}
        {/* Render lunchItems, dinnerItems, drinkItems, and dessertItems similarly */}
      </div>
      {/* Bootstrap cart icon with cart count badge */}
      <Dropdown onClick={toggleCartSummary}>
        <Dropdown.Toggle variant="success">
          <FontAwesomeIcon icon={faCartPlus} />
          <Badge>{cartItems.length}</Badge> {/* Show cart count */}
        </Dropdown.Toggle>
        <CartDropdown /> {/* Show cart summary dropdown */}
      </Dropdown>
    </div>
  );
};

export default Menu;
