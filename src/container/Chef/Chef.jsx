import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Food is not just fuel, it's a way to tell a story.
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          As a chef, I am continually inspired by the beauty and versatility of
          food. For me, cooking is not just a job, but a true passion. Every
          day, I have the opportunity to turn ingredients into works of art,
          each dish a masterpiece waiting to be created. I believe that food is
          not just fuel for the body, but a way to tell a story and evoke
          emotions through taste, aroma, and presentation. I am grateful for the
          opportunity to share my love of food with others and look forward to
          creating new culinary experiences for my diners.{" "}
        </p>
      </div>

      <div className="app__chef-sign">
        <p>M.J</p>
        <p className="p__opensans">Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
