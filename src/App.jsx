import { useState } from "react";

import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Sum from "./components/Sum";

const cartData = [
  { desc: "🍏", qty: 0, price: 1.2 },
  { desc: "🍌", qty: 0, price: 2 },
  { desc: "🍉", qty: 0, price: 0.9 },
];

function App() {
  const [cart, setCart] = useState(cartData);

  console.log(cart);

  return (
    <>
      <Cart cart={cart} />
      <Sum cart={cart} />
      <Shop cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
