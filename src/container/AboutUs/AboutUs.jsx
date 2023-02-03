import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center"></div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content-about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          M.J Diner offers a cozy and relaxed atmosphere where you can enjoy
          delicious home-style cooking. Our menu features classic dishes made
          with fresh ingredients, ensuring every bite is satisfying and
          memorable. Join us for a satisfying meal and great company.
        </p>
      </div>
      <div className="app__aboutus-content-knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          M.J Diner has a rich history dating back to the early 1900s.
          Originally opened as a small family-owned eatery, it has grown into a
          beloved dining destination, known for its warm hospitality and
          mouth-watering dishes. Over the years, M.J Diner has become a staple
          in the community and a favorite among locals and visitors alike.
          Today, we continue to uphold the tradition of serving up delicious
          meals and creating unforgettable dining experiences.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
