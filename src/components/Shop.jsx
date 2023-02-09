import React from "react";

function Shop({ cart, setCart }) {
  const addToCart = (cart, desc) =>
    cart.map((elem) => {
      if (elem.desc === desc) {
        elem.qty = elem.qty + 1;
      }

      return elem;
    });

  const removeFromCart = (cart, desc) =>
    cart.map((elem) => {
      if (elem.desc === desc && elem.qty > 0) {
        elem.qty = elem.qty - 1;
      }

      return elem;
    });

  const handleAdd = (e) => {
    const currentDesc = e.target.dataset.itemdesc;

    setCart(addToCart(cart, currentDesc));
  };

  const handleRemove = (e) => {
    const currentDesc = e.target.dataset.itemdesc;

    setCart(removeFromCart(cart, currentDesc));
  };

  return (
    <>
      <h2>Shop</h2>
      <div>
        {cart.map((item) => (
          <p key={`${item.desc}-shop`}>
            {item.desc}{" "}
            <button data-itemdesc={item.desc} onClick={handleAdd}>
              +
            </button>{" "}
            <button data-itemdesc={item.desc} onClick={handleRemove}>
              -
            </button>
          </p>
        ))}
      </div>
    </>
  );
}

export default Shop;
