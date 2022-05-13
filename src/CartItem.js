import React from "react";
import { useGlobalContext } from "./context";

const CartItem = ({ id, item, checkout }) => {
  const { name, price } = item;
  const { remove } = useGlobalContext();

  if (checkout) {
    return (
      <article className="cartItem" key={id}>
        <div>
          <div className="name-price">
            <h3 className="name">{name}</h3>
            <p>...${price}</p>
          </div>
          <button className="remove-btn btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </article>
    );
  } else {
    return (
      <article className="cartItem" key={id}>
        <div>
          <div className="name-price">
            <h3>{name}</h3>
            <p>...${price}</p>
          </div>
          <button className="remove-btn btn" onClick={() => remove(id)}>
            remove
          </button>
        </div>
      </article>
    );
  }
};

export default CartItem;
