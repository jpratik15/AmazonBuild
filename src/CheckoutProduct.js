import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
    const [state,dispatch] = useStateValue();
    const removeBasketHandler = () => {
        dispatch({
            type :  "REMOVE_FROM_BASKET",
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: props.price,
                rating: props.rating,
            },
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <span>🌟</span>
            ))}
        </div>
        <button onClick={removeBasketHandler}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
