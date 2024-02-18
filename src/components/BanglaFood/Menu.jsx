import React, { useState } from "react";
import styles from "./Menu.module.css";
import breakfast1 from "../../assets/food1.png";
import breakfast2 from "../../assets/food3.png";
import breakfast3 from "../../assets/food2.png";
import lunch1 from "../../assets/food5.png";
import lunch2 from "../../assets/food3.png";
import dinner1 from "../../assets/food1.png";
import dinner2 from "../../assets/biryani4.png";
import drink1 from "../../assets/food2.png";
import drink2 from "../../assets/biryani3.png";
import dessert1 from "../../assets/biryani.png";
import dessert2 from "../../assets/food3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faEye,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ activeMenu }) => {
  const [cartItems, setCartItems] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(Array(10).fill(false)); // Assuming max 10 items in the cart

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

  const FoodCard = ({ image, name, details, price, index }) => (
    <div className={styles.foodCard}>
      <img src={image} alt={name} className={styles.foodImage} />
      <div className={styles.cardButtons}>
        <button
          className={`${styles.cardButton} ${styles.cartIcon}`}
          onClick={() => addToCart({ name, price })}
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
        <button
          className={`${styles.cardButton} ${styles.eyeIcon}`}
          onClick={() => toggleDetails(index)}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
      </div>
      <div className={styles.foodInfo}>
        <h3>{name}</h3>
        <p>${price}</p>
        {detailsVisible[index] && <p>{details}</p>}
      </div>
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

  const breakfastItems = (
    <>
      <FoodCard
        image={breakfast1}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={24}
        index={0}
      />
      <FoodCard
        image={breakfast2}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={25}
        index={1}
      />
      <FoodCard
        image={breakfast3}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={105}
        index={2}
      />
      <FoodCard
        image={breakfast2}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={25}
        index={3}
      />
      <FoodCard
        image={breakfast1}
        name="Parata Vaji"
        details="Parata: 2 pcs, Eggs: 1 pc, Vaji: 1 plate, Water: 500ml"
        price={24}
        index={4}
      />
    </>
  );

  const lunchItems = (
    <>
      <FoodCard
        image={lunch1}
        name="Chicken Caesar Salad"
        details="Grilled chicken, romaine lettuce, croutons, parmesan cheese, Caesar dressing"
        price={12}
        index={0}
      />
      <FoodCard
        image={lunch2}
        name="Club Sandwich"
        details="Turkey, bacon, lettuce, tomato, mayonnaise, toasted bread"
        price={10}
        index={1}
      />
    </>
  );

  const dinnerItems = (
    <>
      <FoodCard
        image={dinner1}
        name="Grilled Salmon"
        details="Fresh salmon fillet, lemon herb marinade, grilled vegetables"
        price={20}
        index={0}
      />
      <FoodCard
        image={dinner2}
        name="Beef Tenderloin"
        details="Seasoned beef tenderloin, roasted potatoes, garlic butter sauce"
        price={25}
        index={1}
      />
    </>
  );

  const drinkItems = (
    <>
      <FoodCard
        image={drink1}
        name="Iced Coffee"
        details="Espresso, milk, ice cubes, optional syrup"
        price={4}
        index={0}
      />
      <FoodCard
        image={drink2}
        name="Fresh Lemonade"
        details="Lemon juice, water, sugar, ice cubes"
        price={3}
        index={1}
      />
    </>
  );

  const dessertItems = (
    <>
      <FoodCard
        image={dessert1}
        name="Chocolate Cake"
        details="Rich chocolate cake, chocolate frosting, whipped cream"
        price={8}
        index={0}
      />
      <FoodCard
        image={dessert2}
        name="Cheesecake"
        details="Creamy cheesecake, graham cracker crust, fruit topping"
        price={7}
        index={1}
      />
    </>
  );
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.foodItems}>
          {/* Food items */}
          {activeMenu === "breakfast" && breakfastItems}
          {activeMenu === "lunch" && lunchItems}
          {activeMenu === "dinner" && dinnerItems}
          {activeMenu === "drinks" && drinkItems}
          {activeMenu === "dessert" && dessertItems}
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
          <p>Total Price: ${getTotalPrice()}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
