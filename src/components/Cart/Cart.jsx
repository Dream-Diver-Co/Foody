import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./Cart.css";
import food1 from "../../assets/Food_Image/Food1.jpg";
import food2 from "../../assets/Food_Image/food2.jpg";
import food3 from "../../assets/Food_Image/food3.jpeg";
import Footer from "../../container/Footer/Footer";
import { FaTrash } from 'react-icons/fa';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Food Item 1", price: 10.00, quantity: 1, image: food1 },
    { id: 2, name: "Food Item 2", price: 15.00, quantity: 1, image: food2 }
  ]);

  const handleDeleteItem = (id) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  }

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  const handleAddToCart = (name, price) => {
    const newItem = {
      id: cartItems.length + 1,
      name: name,
      price: price,
      quantity: 1,
      image: food3 // Assuming food3 is the image for the new item
    };
    setCartItems([...cartItems, newItem]);
  }

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Food Number</th>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Food Price</th>
              <th>Food Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><img src={item.image} alt="Food Image" /></td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    min="1" 
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))} 
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td><FaTrash className="delete-icon" onClick={() => handleDeleteItem(item.id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Suggestions</h2>
        <table className="suggestions-table">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Food Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cold Drink</td>
              <td>$2.00</td>
              <td><button className="add-btn" onClick={() => handleAddToCart("Cold Drink", 2.00)}>Add</button></td>
            </tr>
            <tr>
              <td>Dessert</td>
              <td>$5.00</td>
              <td><button className="add-btn" onClick={() => handleAddToCart("Dessert", 5.00)}>Add</button></td>
            </tr>
          </tbody>
        </table>

        <h2>Order Summary</h2>
        <table className="order-summary-table">
          <tbody>
            <tr>
              <td>Sub-total</td>
              <td className="sub-total">$25.00</td>
            </tr>
            <tr>
              <td>VAT (7.5%)</td>
              <td className="vat">$1.88</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className="final-total">$26.88</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default Cart;
