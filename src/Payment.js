import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
function Payment() {
  const [state, dispatch] = useStateValue();
  console.log(state);
  return (
    <div className="payment">
      <div className="payment__container">
          <h1>
              Checkout {<Link to="/checkout">({state.basket?.length} items)</Link>}
          </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Title</h3>
          </div>
          <div className="payment__address">
            <p>{state?.user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {state.basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">

          </div>
            
        </div>
      </div>
    </div>
  );
}

export default Payment;
