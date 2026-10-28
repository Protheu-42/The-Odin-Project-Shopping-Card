function CartProduct({ product, index, removeFromCart, setQuantity }) {
  const finalPrice = product.price * product.quantity;

  return (
    <li>
      <img src={product.image} alt={product.title} />
      <div>
        <div>{product.title}</div>
        <div>{product.description}</div>
      </div>
      <div>
        <button onClick={() => setQuantity(index, "-")}>-</button>
        <input
          type="number"
          value={product.quantity}
          name="quantity"
          aria-label="quantity"
          onChange={(e) => setQuantity(index, "set", e.target.value)}
        />
        <button onClick={() => setQuantity(index, "+")}>+</button>
        <button onClick={() => removeFromCart(index)}>Remove From Cart</button>
      </div>
      <div>${finalPrice}</div>
    </li>
  );
}

export default CartProduct;
