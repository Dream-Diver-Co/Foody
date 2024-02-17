import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../../container'
import Menu from './Menu'
import "./BanglaFood.css";

function BanglaFood() {
  // Initialize state for tracking the active menu
  const [activeMenu, setActiveMenu] = useState("breakfast");

  // Function to handle menu clicks
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  // Return JSX
  return (
    <>
    <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '15px' }}>
        {/* Navigation buttons */}
        <button style={{ marginRight: '10px', padding:'5px' }} onClick={() => handleMenuClick("breakfast")}>Breakfast</button>
        <button style={{ marginRight: '10px' }} onClick={() => handleMenuClick("lunch")}>Lunch</button>
        <button style={{ marginRight: '10px' }} onClick={() => handleMenuClick("dinner")}>Dinner</button>
        <button style={{ marginRight: '10px' }} onClick={() => handleMenuClick("drinks")}>Drinks</button>
        <button onClick={() => handleMenuClick("dessert")}>Dessert</button>
      </div>
      {/* Render menu based on activeMenu */}
      <Menu activeMenu={activeMenu} />
      <Footer />
    </>
  );
}

export default BanglaFood; // Export the BanglaFood component