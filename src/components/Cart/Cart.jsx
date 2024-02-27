import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Footer } from "../../container";

function Cart() {
  // Sample cart items state
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 5.11, quantity: 1 },
    { id: 2, name: "Product 2", price: 10.99, quantity: 2 },
    // Add more sample cart items as needed
  ]);

  // Function to handle removing an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Function to handle changing quantity of an item in the cart
  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      
      <div className="container">
        <h1>Shopping Cart</h1>
        <table className="table table-hover table-condensed">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
      
    </>
  );
}

export default Cart;
