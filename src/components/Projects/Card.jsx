import React from "react";

const Card = ({ title, discription, image }) => {
  return (
    <div className="card">
      <img src={image} alt="" />

      <div className="card-para">
        <h2>{title}</h2>
        <p>{discription}</p>
      </div>
    </div>
  );
};

export default Card;
