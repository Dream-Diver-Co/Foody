import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../../container';
import './Feature.css';

function Feature() {
  return (
    <div>
      <Navbar />

      {/* Feature section */}
      <section className="we-offer-area text-center bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-heading text-center">
                <h2>Foody-Moody <span>Features</span></h2>
              </div>
            </div>
          </div>
          <div className="row our-offer-items less-carousel">
            {/* Single Item */}
            <div className="col-md-3 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-pen-fancy"></i>
                <h4>200% Cash-Back</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 equal-height">
              <div className="item">
                <i className="fas fa-pen-fancy"></i>
                <h4>Special Food of The Day</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            {/* End Single Item */}

            {/* Add more Single Items here */}
          </div>
        </div>
      </section>
      {/* End Feature section */}

      <Footer />
    </div>
  );
}

export default Feature;
