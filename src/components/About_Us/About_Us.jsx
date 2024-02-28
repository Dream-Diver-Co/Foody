import React, { useState, useEffect } from "react";
import image22 from "../../assets/image-22.png";
import "./About_Us.css";

export default function AboutUs() {
  const [textGradient, setTextGradient] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const getRandomGradient = () => {
    const angle = Math.random() * 360;
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  };
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const gradient = getRandomGradient();
      setTextGradient(gradient);
    }, 3000); // Change gradient every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isChecked) {
      // Process form submission
      console.log("Form submitted successfully!");
    } else {
      alert("Please verify that you are not a robot.");
    }
  };
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="hero-section">
        <img src={image22} alt="" className="hero-image" />
        <div className="hero-content">
          <h1 className="hero-title">
            About{" "}
            <span className="gradient-text">Foody-Moody</span>
          </h1>
          <p className="hero-description">
            The most important thing for us is to give you the comfortable
            dining experience
          </p>
        </div>
      </div>
      <div className="main-content">
        <div className="section">
          <div className="story-content">
            <h2 className="story-title">Our Story</h2>
            <p className="story-text">
              Welcome to Foody-Moody, a culinary oasis nestled in the heart of
              the Netherlands. At Foody-Moody, we are passionate about crafting
              unforgettable dining experiences that tantalize the taste buds
              and nourish the soul.
            </p>
          </div>
          <div className="story-image-container">
            <img
              src="https://images5.alphacoders.com/648/648257.png"
              alt=""
              className="story-image"
            />
          </div>
        </div>
        <div className="section">
          <div className="manager-image-container">
            <img
              src="https://img.wattpad.com/c2e8cb59530b4373b452716c9fce292f4232d23f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f356c6c6455593963585369696f513d3d2d3739343030363030372e313563643166326538653566333064363534333136333931373334392e676966"
              alt=""
              className="manager-image"
            />
          </div>
          <div className="manager-content">
            <h2 className="manager-title">Restaurant Manager</h2>
            <p className="manager-name">Arif Ur Rahman</p>
            <p className="manager-text">
              Our journey began with a simple yet profound vision: to create a
              haven where food lovers from all walks of life can come together
              to indulge in exquisite flavors, warm hospitality, and genuine
              connections. Drawing inspiration from the rich tapestry of Dutch
              cuisine and global culinary traditions, our menu showcases a
              harmonious blend of time-honored recipes and innovative
              creations.
            </p>
          </div>
        </div>


        <div className="section">
          <div className="chef-content">
            <h2 className="chef-title">Executive Chef</h2>
            <p className="chef-name">Mr. Thoangsa Chai</p>
            <p className="chef-text">
            At Foody-Moody, we are passionate about crafting
              unforgettable dining experiences that tantalize the taste buds
              and nourish the soul.Drawing inspiration from the rich tapestry of Dutch
              cuisine and global culinary traditions, our menu showcases a
              harmonious blend of time-honored recipes and innovative.Our journey began with a simple yet profound vision: to create a
              haven where food lovers from all walks of life can come together
              to indulge in exquisite flavors, warm hospitality, and genuine
              connections.
            </p>
          </div>
          <div className="chef-image-container">
            <img
              src="https://wallpapercave.com/wp/wp7120924.jpg"
              alt=""
              className="chef-image"
            />
          </div>
        </div>
        <div className="form-section">
          <h2>Leave us a Comment</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="comment">Comment:</label>
              <textarea id="comment" name="comment" required></textarea>
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div>
            <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I am not a robot
          </label>
        </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
