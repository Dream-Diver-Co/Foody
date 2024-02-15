import React from 'react';
import styles from "./Menu.module.css"; // Import the CSS module
import breakfast1 from "../../assets/food1.png";
import breakfast2 from "../../assets/food3.png";
import breakfast3 from "../../assets/food2.png";

const Menu = ({ activeMenu }) => {
  // Define menu items for each category
  const breakfastItems = (
    <>
      <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast2} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast1} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast2} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
          <div className="foodImage"><img src={breakfast3} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast2} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
  const lunchItems = (
    <>
      <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast1} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast2} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast3} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
          <div className="foodImage"><img src={breakfast2} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.menuItems}>
        <h2>Parata Vaji</h2>
        <div className={styles.foodItem}>
          <div className={styles.foodColumn}>
            <div className="foodImage"><img src={breakfast2} alt="" className={styles.foodImage} /></div>
          </div>
          <div className={styles.foodColumn}>
            <div className="foodValue">
              <h3>Food Values</h3>
              <h5>Calories: 200</h5>
              <h5>Minerals: 500</h5> 
              <h5>Carbogydrates: 230</h5>
              <h5>Vitamin: 200</h5> 
            </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="foodDetails">
            <h3>Item Name</h3>
            <h5>Parata: 2 pcs</h5>
            <h5>Eggs: 1 pc</h5>
            <h5>Vaji: 1 plate</h5>
            <h5>Water: 500ml</h5>
          </div>
        </div>
        <div className={styles.foodColumn}>
          <div className="order">
            <button className="price">Price: $40</button>
            <button className="AddToCart">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );

  // Define lunchItems, dinnerItems, drinksItems, and dessertItems similarly

  // Render the corresponding menu items based on activeMenu
  return (
    <div>
      {activeMenu === 'breakfast' && breakfastItems}
      {activeMenu === 'lunch' && lunchItems}

      {/* Render lunchItems, dinnerItems, drinksItems, and dessertItems similarly */}
    </div>
  );
};

export default Menu;
