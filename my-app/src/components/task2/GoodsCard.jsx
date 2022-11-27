import React from "react";
import { Products } from "./GoodsData";
import "./styles/Task2.css";

const GoodsCard = () => {
  return (
    <div className="container">
      {Products.map((data) => (
        <GoodCard info={data} key={data.article} />
      ))}
    </div>
  );
};

const GoodCard = ({ info }) => {
  const { image, name, price } = info;

  return (
    <div className="product">
      <img className="image" src={image} alt="Product" />
      <div className="item">
        <p>{name}</p>
        <p>{price} грн</p>
      </div>
    </div>
  );
};

export default GoodsCard;
