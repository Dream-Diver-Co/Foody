import React from 'react';
import './Megamenu.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faBreadSlice, faFish, faCarrot, faCookie } from '@fortawesome/free-solid-svg-icons'; // Import different icons
import pizzaImage from '../../assets/biryani.png';
import breadImage from '../../assets/biryani2.png';
import fishImage from '../../assets/biryani3.png';
import carrotImage from '../../assets/biryani2.png';
import cookieImage from '../../assets/biryani3.png';

const Megamenu = () => {
  const menuItems = [
    {
      icon: faPizzaSlice,
      name: 'Bangladesh Items',
      description: 'Delicious Bangladeshi cuisine',
      image: pizzaImage
    },
    {
      icon: faBreadSlice,
      name: 'Indian Items',
      description: 'Authentic Indian flavors',
      image: breadImage
    },
    {
      icon: faFish,
      name: 'Bangladesh Items',
      description: 'Fresh seafood from Bangladesh',
      image: fishImage
    },
    {
      icon: faCarrot,
      name: 'Netherland Items',
      description: 'Healthy Dutch delicacies',
      image: carrotImage
    },
    {
      icon: faCookie,
      name: 'African Items',
      description: 'Traditional African treats',
      image: cookieImage
    },
    {
      icon: faPizzaSlice,
      name: 'Japanese Items',
      description: 'Exquisite Japanese dishes',
      image: pizzaImage
    }
  ];

  return (
    <div className="megamenu">
      <h3>Food Menu</h3>
      <div className="row">
        {menuItems.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="menu-item-inner">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Megamenu;
