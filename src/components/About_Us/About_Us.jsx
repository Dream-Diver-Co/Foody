import React from 'react';
import './About_Us.css'; // Import CSS file
import defaultImage1 from "../../assets/food1.png"; // Import default image 1
import defaultImage2 from "../../assets/food2.png"; // Import default image 2

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h2 className="section-title">Discover Our Story</h2>
                <p className="section-description">
                    Welcome to our restaurant! Located in the heart of the bustling city, we pride ourselves on offering an unforgettable dining experience. Our journey began with a passion for food and a commitment to excellence.
                </p>
                <p className="section-description">
                    Our restaurant, bar, and coffee roastery are situated on a charming corner site, providing a picturesque backdrop for your dining pleasure. With a focus on quality ingredients and exceptional service, we invite you to join us on a culinary adventure.
                </p>
                <a href="#" className="btn btn-about-us">Learn More</a>
            </div>
            <div className="about-us-images">
                <div className="about-us-image">
                    <img src={defaultImage1} alt="About Us Image 1" />
                </div>
                <div className="about-us-image">
                    <img src={defaultImage2} alt="About Us Image 2" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
