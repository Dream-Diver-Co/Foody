import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Footer } from '../../container'

function BanglaFood() {
  return (
    <>
        <Navbar />
    <section id="our_menu" className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page_title text-center mb-4">
              <h1>our menu</h1>
              <div className="single_line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="breakfast-tab" data-toggle="tab" href="#breakfast" role="tab">Breakfast</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="lunch-tab" data-toggle="tab" href="#lunch" role="tab">Lunch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="dinner-tab" data-toggle="tab" href="#dinner" role="tab">Dinner</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="tab-content col-lg-12" id="myTabContent">
            <div className="tab-pane fade show active" id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
              <div className="row">
                <div className="col-md-6">
                  <div className="single_menu">
                    <img src="https://i.imgur.com/kbpceNv.jpg" alt="burger" />
                    <div className="menu_content">
                      <h4>Chicken Burger <span>$24</span></h4>
                      <p>Aperiam tempore sit, perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
                    </div>
                  </div>
                  {/* Add more breakfast items here */}
                </div>
                <div className="col-md-6">
                  {/* Add more breakfast items here */}
                </div>
              </div>
            </div>
            {/* Lunch and Dinner tabs */}
          </div>
          <a href="#" className="menu_btn btn btn-danger">view more</a>
        </div>
      </div>
    </section>

        {/* <Footer /> */}
    </>
  )
}

export default BanglaFood