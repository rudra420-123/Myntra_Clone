import React from "react";
import "./Download.css";

function Download() {
  return (
    <div className="container">
      <div className="download">
        <img
          src="https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_600,c_limit,fl_progressive/assets/images/2024/2/12/76dcf496-8fe6-43bc-a1d1-4ff89496ad8f1707718033958-Download-banner-copy.jpg"
          alt="Download"
        />
        <p>
          Sign Up For Exciting Deals!
          <i className="fa-solid fa-circle-chevron-right"> </i>
        </p>
        <img
          src="https://cdn.zoutons.com/images/originals/blog/1709031711283.jpg_1709031712.png"
          alt="Footer"
        />
        <div className="footer d-flex">
          <div className="service d-flex">
            <i className="fa-regular fa-circle-check"> </i>
            <h3> 100 % ORIGINAL PRODUCTS </h3>
          </div>
          <div className="service d-flex">
            <i className="fa-solid fa-truck-moving"> </i>
            <h3> FREE SHIPPING ON 1 ST ORDER </h3>
          </div>
          <div className="service d-flex">
            <i className="fa-solid fa-indian-rupee-sign"> </i>
            <h3> EASY RETURNS & REFUNDS </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
