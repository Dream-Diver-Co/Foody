// Feature.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import Card from '../BanglaFood/Card/Card'; // Import the Card component
import './Feature.css';

function Feature() {
  return (
    <div>
      <Navbar />

      <Card />

      <Footer />
    </div>
  );
}

export default Feature;
