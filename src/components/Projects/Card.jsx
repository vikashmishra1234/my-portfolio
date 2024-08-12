import React from "react";

const Card = ({ title, discription,link1,link2, image }) => {
  return (
    <div
   
     className="card">
      <img src={image} alt="" />

      <div className="card-para">
        <h2>{title}</h2>
        <p>{discription}</p>
      </div>
      <div className="btns">
        <a href={link2} target="_blank">Source Code</a>
        <a href={link1} target="_blank" >View Live</a>
      </div>
    </div>
  );
};

export default Card;
