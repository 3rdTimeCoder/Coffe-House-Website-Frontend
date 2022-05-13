import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./checkout.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios.js";

const Checkout = () => {
  const { cart, total, user, clearCart } = useGlobalContext();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generate special stripe secret that allows us to charge a client
    // get new secret whenever cart changes
    const getClientSecret = async () => {
      const resp = await axios({
        method: "post",
        // Stripe expects the total in a currencies sub-units, thus the * 100.
        url: `/payments/create?total=${total * 100}`,
      });
      setClientSecret(resp.data.clientSecret);
    };
    getClientSecret();
  }, [cart, total]);

  const sendEmail = async () => {
    await axios({
      method: "post",
      url: `/payments/userEmail?email=${user?.email}`,
    });
  };

  const handleSubmit = async (event) => {
    // all the stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        // disable button
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        //send users email address to server
        sendEmail();

        //clear cart and go to orders page.
        clearCart();
        history.replace("/orders");
      })
      .catch((err) => console.log(err.message));
  };


  const handleChange = (event) => {
    // Listen for changes inside the CardElemnt.
    // Display any errors as the customer types their card details.
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <section className="checkout" id="checkout">
      <div className="checkout-center">
        <div className="checkout__user-details">
          <div className="checkout__section">
            <div className="checkout__title">
              <h4>Delivery Recipient</h4>
            </div>
            <div className="checkout__name">
              <p>{user?.name || "Recipient Name"}</p>
              <p>{user?.email}</p>
              <p>{user?.number || "Contact Number"}</p>
            </div>
          </div>
          <div className="checkout__section">
            <div className="checkout__title">
              <h4>Delivery Adress</h4>
            </div>
            <div className="checkout__address">
              <p>123 React Lane</p>
              <p>Johannesburg, SA</p>
              <p>4092</p>
            </div>
          </div>
        </div>
        <div className="checkout__section">
          <div className="checkoutContainer">
            {cart.map((cartItem) => {
              const { id } = cartItem;
              return <CartItem key={id} {...cartItem} checkout />;
            })}
            {/* cart footer */}
            <footer>
              <hr />
              <div className="checkout-total">
                <h4>
                  total: <span> ${total}</span>
                </h4>
              </div>
            </footer>
          </div>
        </div>
        <div className="checkout__section">
          <div className="checkout__payment-details">
            {/* stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <button
                className="buy-btn "
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
              </button>

              {/* Errors */}
              {error && <div className="checkout__error-message">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Checkout;
