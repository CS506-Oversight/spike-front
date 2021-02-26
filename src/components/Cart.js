import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

//Publishable key safe to publicize
const stripePromise = loadStripe(
  "pk_test_51ILfndEl7Dm9pM8qO7w2ohjdyDPXNb7IMh7xf2Td68nK1P96pxd4tUghteuhYzDxhG9ZxVA4ySiZ4QdcgTSZY8X400HDD6yi7b"
);
const ProductDisplay = ({ handleClick }) => (
  <section>
    <div className="product">
      <img src="https://i.imgur.com/EHyR2nP.png" alt="Pixel Charity Logo" />
      <div className="description">
        <h3>Donation to Charity</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <button id="checkout-button" role="link" onClick={handleClick}>
      Checkout
    </button>
  </section>
);
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);
export default function Checkout() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await fetch(
      "http://localhost:5000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: [
            {
              price: "price_1INiOuEl7Dm9pM8q4WYAhTFo",
              quantity: 1,
            },
            {
              price: "price_1INiQFEl7Dm9pM8q6tdIw2Fp",
              quantity: 2,
            },
            {
              price: "price_1INiPtEl7Dm9pM8qFdWBn9UF",
              quantity: 1,
            },
          ],
          metadata:{customer_id:"user_FmFT8rW6TXCq3blpVqkk"}
        }),

      }
    );
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} />
  );
}
