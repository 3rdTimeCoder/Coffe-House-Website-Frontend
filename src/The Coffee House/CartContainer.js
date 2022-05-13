import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();

  // const cart = [
  //   { id: 1, name: "Coffee cadoodle", price: "R23,99" },
  //   { id: 2, name: "Koffee doodle", price: "R23,99" },
  // ];
  if (cart.length === 0) {
    return (
      <section className="cart">
        <div className="section-title">
          <h1>cart</h1>
          <div className="underline"></div>
        </div>
        <h2>Your cart is empty!</h2>
      </section>
    );
  } else {
    return (
      <section className="cart">
        <div className="section-title">
          <h1>cart</h1>
          <div className="underline"></div>
        </div>
        <div className="cart-center">
          <div className="cartContainer">
            {cart.map((cartItem) => {
              const { id, item } = cartItem;
              return <CartItem key={id} {...cartItem} />;
            })}
            {/* cart footer */}
            <footer>
              <hr />
              <div className="cart-total">
                <h3>
                  total: <span> R{total}</span>
                </h3>
              </div>
              <div className="btn-container">
                <button className="btn clear-btn" onClick={clearCart}>
                  clear cart
                </button>
                {/* <button className="btn buy-btn">purchase items</button> */}
              </div>
            </footer>
          </div>
        </div>
      </section>
    );
  }
};

export default CartContainer;
