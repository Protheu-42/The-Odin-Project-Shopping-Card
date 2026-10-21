import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const [quantity, SetQuantity] = useState(0);

  function addOrSubQuantity(operation) {
    if (operation === "-") {
      if (quantity === 0) {
        return;
      }
      SetQuantity((value) => value - 1);
    }
    if (operation === "+") {
      SetQuantity((value) => value + 1);
    }
  }

  return (
    <li key={product.id}>
      <img src={product.image} alt={product.title} />
      <div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
      <div>
        <button onClick={() => addOrSubQuantity("-")}>-</button>
        <input
          type="number"
          value={quantity}
          name="quantity"
          aria-label="quantity"
          onChange={(e) => SetQuantity(e.target.value)}
        />
        <button onClick={() => addOrSubQuantity("+")}>+</button>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </li>
  );
}

export default ProductCard;
