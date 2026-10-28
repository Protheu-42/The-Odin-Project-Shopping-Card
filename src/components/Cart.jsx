import { useState } from "react";

function useCart() {
  const [cart, setCart] = useState([]);

  function removeFromCart(index) {
    let newCart = [...cart];
    newCart.splice(index, 1);
    setCart([...newCart]);
  }

  function setQuantity(index, operator, value) {
    let newCart = [...cart];

    if (operator === "set") {
      newCart[index].quantity = value;
    }

    if (operator === "-") {
      newCart[index].quantity--;
    }
    if (operator === "+") {
      newCart[index].quantity++;
    }

    if (newCart[index].quantity < 1) {
      newCart[index].quantity = 1;
    }

    setCart([...newCart]);
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
  }

  return { cart, addToCart, removeFromCart, setQuantity };
}

export default useCart;
