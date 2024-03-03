import React from 'react';
import './Card.css'; // Import your CSS file

const VacationCards = () => {
  return (
    <div className="vacation-cards-container">
      {/* City Break Card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2 className="card-heading">City Break</h2>
            <img src="city_break_image.jpg" alt="City Break" className="card-image" />
          </div>
          <div className="card-back">
            <h2 className="card-heading">City Break</h2>
            <p className="card-description">Explore the vibrant streets of bustling cities!</p>
          </div>
        </div>
      </div>

      {/* Ski Trip Card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2 className="card-heading">Ski Trip</h2>
            <img src="ski_trip_image.jpg" alt="Ski Trip" className="card-image" />
          </div>
          <div className="card-back">
            <h2 className="card-heading">Ski Trip</h2>
            <p className="card-description">Hit the slopes and enjoy the snowy mountains!</p>
          </div>
        </div>
      </div>

      {/* Beach Time Card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2 className="card-heading">Beach Time</h2>
            <img src="beach_time_image.jpg" alt="Beach Time" className="card-image" />
          </div>
          <div className="card-back">
            <h2 className="card-heading">Beach Time</h2>
            <p className="card-description">Relax under the sun and enjoy the sandy beaches!</p>
          </div>
        </div>
      </div>

      {/* Camping Trek Card */}
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2 className="card-heading">Camping Trek</h2>
            <img src="camping_trek_image.jpg" alt="Camping Trek" className="card-image" />
          </div>
          <div className="card-back">
            <h2 className="card-heading">Camping Trek</h2>
            <p className="card-description">Experience nature and adventure in the great outdoors!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacationCards;
