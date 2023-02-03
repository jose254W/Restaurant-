import React from "react";

import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="WELCOME" />
      <h1 className="headtext__cormorant">Hope To See You Soon!</h1>
      <p className="p__opensans">Enjoy The Diners!</p>
    </div>
  </div>
);

export default Newsletter;
