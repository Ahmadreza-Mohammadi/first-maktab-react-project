import React from "react";

function HeaderCard() {
  return (
    <div className="header-card">
      <div>
        <img
          className="header-img"
          src="https://i.pinimg.com/736x/20/9d/9d/209d9d56550208db6865917f465d9adf.jpg"
          alt=""
        />
      </div>

      <h1>Milano Pizza, Different taste!</h1>

      <p>
        Experience heavenly flavors with pizzas made from fresh ingredients and
        authentic Italian recipes. We are a team of food lovers and skilled
        chefs guiding you to a world of new tastes and pleasures.
      </p>
      <button>Show More</button>
    </div>
  );
}

export default HeaderCard;
