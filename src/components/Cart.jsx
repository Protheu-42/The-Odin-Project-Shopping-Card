import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);

  function removeFromCart() {
    console.log("WIP");
  }

  function setQuantity () {
    console.log("WIP")
  }

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

  return { cart, addToCart, removeFromCart, setQuantity };
}

export default useCart;
