import styles from "./CartProduct.module.css";

function CartProduct({ product, index, removeFromCart, setQuantity }) {
  const finalPrice = product.price * product.quantity;

  return (
    <li className={styles.card}>
      <img className={styles.img} src={product.image} alt={product.title} />
      <div className={styles.content}>
        <div>{product.title}</div>
        <div>{product.description}</div>
      </div>
      <div className={styles.buttons}>
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
      <div className={styles.price}>${finalPrice}</div>
    </li>
  );
}

export default CartProduct;
