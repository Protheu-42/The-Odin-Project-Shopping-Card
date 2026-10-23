import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);

  function addToCart(id, title, image, description, price, quantity) {
    const product = {
      id: id,
      image: image,
      title: title,
      description: description,
      price: price,
      quantity: quantity,
    };

    setCart([...cart, product]);
    console.log(cart);
  }

  return { cart, addToCart };
}

export default useCart;
