import React from 'react';
import "./Menu.css";
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="rope">
        <img 
          src="https://notbigmuzzy.github.io/codepen/example1/rope.png" 
          alt="Rope" 
          className="rope-left" 
          style={{ width: '50px', height: 'auto' }} // Adjust the width as needed
        />
        <img 
          src="https://notbigmuzzy.github.io/codepen/example1/rope.png" 
          alt="Rope" 
          className="rope-right" 
          style={{ width: '50px', height: 'auto' }} // Adjust the width as needed
        />
      </div>
      <div>
        <div className="body-wrap">
          <h1 className="page1-title">M E N U</h1>
          <div className="page1-desc">
            <h3>SEPTEMBER 9</h3>
            <br />
            <hr />
            <br />
            <p>Today, our chef will take you on a travel around the world, with an entry from Europe, our best American meat and an authentic dessert from Asia.</p>
          </div>
        </div>
      </div>
      <div className="page2 page"><img src="https://notbigmuzzy.github.io/codepen/example1/grapes.png" alt="Grapes" className="grapes" />
        <div className="body-wrap">
          <div className="pg2-middle-wrap">
            <div className="pg2-green-back"></div>
            <div className="pg2-white-desc">
              <hr className="hr1" />
              <h3>APPETIZERS</h3>
              <hr className="hr2" />
              <hr className="hr3" />
              <h2>WINE & BRIE</h2>
              <hr className="hr4" />
              <hr className="hr5" />
              <p>Our most delicious selection of cheeses with wide ranges of wine from our cellar.</p>
              <hr className="hr6" />
            </div>
            <div className="pg2-photo-wrap">
              <div className="pg2-photo"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="page3 page"><img src="https://notbigmuzzy.github.io/codepen/example1/leafs.png" alt="Leafs" className="leafs" />
        <div className="body-wrap">
          <div className="pg3-middle-wrap">
            <div className="pg3-red-back"></div>
            <div className="pg3-photo-wrap">
              <div className="pg3-photo"></div>
            </div>
            <div className="pg3-white-desc">
              <hr className="hr1" />
              <h3>FROM THE GRILL</h3>
              <hr className="hr2" />
              <hr className="hr3" />
              <h2>BEEF STEAK</h2>
              <hr className="hr4" />
              <hr className="hr5" />
              <p>Aged for extra flavor & tenderness. Rubbed with our unique blend of spices and slow roasted.</p>
              <hr className="hr6" />
            </div>
          </div>
        </div>
      </div>
      <div className="page4 page"><img src="https://notbigmuzzy.github.io/codepen/example1/dessert.png" alt="Dessert" className="dessert" />
        <div className="body-wrap">
          <div className="pg4-middle-wrap">
            <div className="pg4-bezh-back"></div>
            <div className="pg4-white-desc">
              <hr className="hr1" />
              <h3>DESSERT</h3>
              <hr className="hr2" />
              <hr className="hr3" />
              <h2>THAI MANGO</h2>
              <hr className="hr4" />
              <hr className="hr5" />
              <p>This wonderful and authentic Thai dessert comes with a sweet, sticky rice and a special dressing.</p>
              <hr className="hr6" />
            </div>
            <div className="pg4-photo-wrap">
              <div className="pg4-photo"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="page5 page">
        <div className="body-wrap">
          <h3>GLUTEN FREE & VEGAN AVAILABLE</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
