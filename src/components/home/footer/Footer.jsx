import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-subscription">
          <div>
            <h1>Don't miss this exceptional opportunity!!</h1>
          </div>
          <div className="footer-offers">
            <p>
              Get 50% off on any large pizza every Tuesday. Enjoy delicious,
              mouth-watering pizzas at half the price!
            </p>
            <p>
              Order any two medium pizzas and get a free garlic bread. Perfect
              for sharing with friends and family!
            </p>
            <p>
              Spend $30 or more and receive a complimentary dessert. Treat
              yourself to a sweet ending with your favorite pizza meal!
            </p>
            <button className="footer-subscription">Subscription</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
