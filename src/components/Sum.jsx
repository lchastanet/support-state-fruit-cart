import React from "react";

function Sum({ cart }) {
  return (
    <>
      <h2>Total</h2>
      <p>
        {cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0).toFixed(2)}€
      </p>
    </>
  );
}

export default Sum;
