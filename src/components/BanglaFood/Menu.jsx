import React from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";
import food1 from "../../assets/Food_Image/Food1.jpg";
import food2 from "../../assets/Food_Image/food2.jpg";
import food3 from "../../assets/Food_Image/food3.jpg";
import food4 from "../../assets/Food_Image/food4.jpeg";

function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.foodItems}>
        <FoodCard
          image={food1}
          title="Delicious Food 1"
          oldPrice={10}
          newPrice={8}
          ingredients="Rice, Chicken, Vegetables"
        />
        <FoodCard
          image={food2}
          title="Delicious Food 2"
          oldPrice={15}
          newPrice={12}
          ingredients="Rice, Chicken, Vegetables"
        />
        <FoodCard
          image={food3}
          title="Delicious Food 3"
          oldPrice={20}
          newPrice={18}
          ingredients="Rice, Chicken, Vegetables"
        />
        <FoodCard
          image={food4}
          title="Delicious Food 4"
          oldPrice={20}
          newPrice={18}
          ingredients="Rice, Chicken, Vegetables"
        />
      </div>
    </div>
  );
}

function FoodCard({ image, title, oldPrice, newPrice, ingredients }) {
  return (
    <div className={styles.foodCard}>
      <img src={image} alt="Food" className={styles.foodImage} />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.price}>
          <div className={`${styles.oldPriceCircle} ${styles.priceCircle}`}>
            <span className={styles.oldPrice}>${oldPrice}</span>
          </div>
          <div className={`${styles.newPriceCircle} ${styles.priceCircle}`}>
            <span className={`${styles.newPrice} ${styles.biggerPrice}`}>${newPrice}</span>
          </div>
        </div>
        <div className={styles.ingredients}>
          <span>Main Ingredients: {ingredients}</span>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faCartPlus} className={styles.icon} />
          </div>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faEye} className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default Menu;
