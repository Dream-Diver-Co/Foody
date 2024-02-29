import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import './Subacriptions.css';

const Subacriptions = () => {
  return (
    <>
      <Navbar />

      <div className="wrap">
        <h1 className="pen-title">We Have 3 Subscription systems</h1>

        <section className="pricing-section">

          <div className="pricing pricing-theme">
            <div className="pricing-item">
              <h3 className="pricing-title">Basic</h3>
              <div className="pricing-price"><span className="pricing-currency">$</span>9.90</div>
              <p className="pricing-sentence">Become Our Regular Client</p>
              <ul className="pricing-feature-list">
                <li className="pricing-feature">Order Anytime</li>
                <li className="pricing-feature">Multiple Food Order</li>
                <li className="pricing-feature">Food-Order for Occation</li>
              </ul>
              <button className="pricing-action">Subscribe</button>
            </div>
            
            <div className="pricing-item">
              <h3 className="pricing-title">Standard</h3>
              <div className="pricing-price"><span className="pricing-currency">$</span>29.90</div>
              <p className="pricing-sentence">Become Our Standard Client</p>
              <ul className="pricing-feature-list">
                <li className="pricing-feature">Order Anytime</li>
                <li className="pricing-feature">Multiple Food Order</li>
                <li className="pricing-feature">Food-Order for Occation</li>
                <li className="pricing-feature">Birthday/Annivarsary Gift</li>
                <li className="pricing-feature">1GB of storage space</li>
              </ul>
              <button className="pricing-action">Subscribe</button>
            </div>
            
            <div className="pricing-item">
              <h3 className="pricing-title">Premium</h3>
              <div className="pricing-price"><span className="pricing-currency">$</span>59.90</div>
              <p className="pricing-sentence">Gigantic business solution</p>
              <ul className="pricing-feature-list">
                <li className="pricing-feature">Unlimited calls</li>
                <li className="pricing-feature">Free hosting</li>
                <li className="pricing-feature">Unlimited hours of support</li>
                <li className="pricing-feature">Social media integration</li>
                <li className="pricing-feature">Analytics integration</li>
                <li className="pricing-feature">Unlimited storage space</li>
              </ul>
              <button className="pricing-action">Subscribe</button>
            </div>
            
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Subacriptions;
