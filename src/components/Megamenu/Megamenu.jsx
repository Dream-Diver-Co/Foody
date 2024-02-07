import React from 'react';
import { Link } from 'react-router-dom';
import "./Megamenu.css";

const Megamenu = () => {
    return (
        <div className="mega-menu">
          <div className="mega-menu-grid">
            <div className="mega-menu-column">
              <Link to="/shef/link1">Link 1</Link>
              <Link to="/shef/link2">Link 2</Link>
            </div>
            <div className="mega-menu-column">
              <Link to="/shef/link3">Link 3</Link>
              <Link to="/shef/link4">Link 4</Link>
            </div>
            <div className="mega-menu-column">
              <Link to="/shef/link5">Link 5</Link>
              <Link to="/shef/link6">Link 6</Link>
            </div>
          </div>
        </div>
      );
    }

export default Megamenu;