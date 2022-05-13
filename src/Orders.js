import React from "react";
import "./orders.css";
import { useHistory } from "react-router-dom";

const Orders = () => {
  const history = useHistory();

  return (
    <section className="orders">
      <div className="orders__center">
        <p>
          Your order has been successfully processed, please check your email
          for a copy of the transaction and additional info such as your
          delivery date, order tracking number, order id, etc. Please note that
          we have a strict no refund policy.
        </p>
        <p>Thank you for shopping with us!</p>
        <button
          className="btn shop-more"
          onClick={() => history.replace("/#top")}
        >
          Shop More
        </button>
      </div>
    </section>
  );
};

export default Orders;
