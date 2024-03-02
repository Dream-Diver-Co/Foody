import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../container/Footer/Footer";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from react-icons
import "./Cart.css"

const Cart = () => {
    // Sample data for demonstration
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", image: "image1.jpg", quantity: 2, price: 10 },
        { id: 2, name: "Product 2", image: "image2.jpg", quantity: 1, price: 15 }
    ]);

    // Calculate subtotal of each item
    const calculateSubtotal = (quantity, price) => {
        return quantity * price;
    };

    // Calculate total price of all items
    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.quantity * item.price;
        });
        return total;
    };

    // Increment product quantity
    const incrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    // Decrement product quantity
    const decrementQuantity = (productId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === productId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    // Render table rows for cart items
    const renderCartItems = () => {
        return cartItems.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td className="product-image-col"><img src={item.image} alt={item.name} style={{ width: "50px" }} /></td>
                <td className="product-name-col">{item.name}</td>
                <td>
                    <FaChevronLeft onClick={() => decrementQuantity(item.id)} style={{ marginRight: '5px', cursor: 'pointer' }} />
                    {item.quantity}
                    <FaChevronRight onClick={() => incrementQuantity(item.id)} style={{ marginLeft: '5px', cursor: 'pointer' }} />
                </td>
                <td>${item.price}</td>
                <td>${calculateSubtotal(item.quantity, item.price)}</td>
            </tr>
        ));
    };

    return (
        <>
            <Navbar />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="cart-table-wrapper">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product Number</th>
                                            <th>Product Image</th>
                                            <th>Product Name</th>
                                            <th>Product Quantity</th>
                                            <th>Product Price</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderCartItems()}
                                    </tbody>
                                </table>
                            </div>
                            <div className="cart-summary">
                                <div className="vat-total">
                                    <p>VAT: 10%</p>
                                    <p>Total Price (including VAT): ${calculateTotalPrice() * 1.1}</p>
                                </div>
                                <button className="btn btn-dark btn-checkout">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Cart;
