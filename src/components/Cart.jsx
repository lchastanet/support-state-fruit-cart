import React from "react";

function Cart({ cart }) {
  return (
    <>
      <h2>Panier</h2>
      {cart.map((item) => (
        <p key={`${item.desc}-cart`}>
          {item.qty} {item.desc} | {item.price * item.qty}€
        </p>
      ))}
    </>
  );
}

export default Cart;
