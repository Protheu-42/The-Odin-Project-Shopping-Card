import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart(id, title, description, price, quantity) {
    const product = {
      id: id,
      title: title,
      description: description,
      price: price,
      quantity: quantity,
    };

    setCart([...cart, product]);
    console.log(cart);
  }

  return [cart, addToCart];
}

export default useCart;
