import React from "react";
import { useGlobalContext } from "./context";

const CartItem = ({ id, item }) => {
  const { name, price } = item;
  const { remove } = useGlobalContext();

  return (
    <article className="cartItem" key={id}>
      <div>
        <div className="name-price">
          <h3>{name}</h3>
          <p>...R{price}</p>
          {/* <p className="amount">x1</p> */}
        </div>

        <button className="remove-btn btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;
