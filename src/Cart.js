import React from "react";
import CartItem from "./CartItem";
import "./cart.css";
import { useGlobalContext } from "./context";

const Cart = () => {
  const { cart, total, clearCart, user } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="cart" id="cart">
        <div className="cart-center">
          <h2>Your cart is empty!</h2>
        </div>
      </section>
    );
  } else {
    return (
      <section className="cart" id="cart">
        <div className="cart-center">
          <div className="cartContainer">
            {cart.map((cartItem) => {
              const { id } = cartItem;
              return <CartItem key={id} {...cartItem} />;
            })}
            {/* cart footer */}
            <footer>
              <hr />
              <div className="cart-total">
                <h3>
                  total: <span> ${total}</span>
                </h3>
              </div>
              <div className="btn-container">
                <button className="btn clear-btn" onClick={clearCart}>
                  clear cart
                </button>
                <button className="btn purchase-btn">
                  <a href={user ? "/checkout" : "/login"}>
                    proceed to checkout
                  </a>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </section>
    );
  }
};

export default Cart;
