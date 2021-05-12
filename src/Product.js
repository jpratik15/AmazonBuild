import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [state, dispatch] = useStateValue();
  console.log(state.basket);
  const addToBasketHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
      </div>
      <div className="product__rating">
        {Array(props.rating)
          .fill()
          .map((_, i) => (
            <span>🌟</span>
          ))}
      </div>
      <img src={props.image} />
      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
