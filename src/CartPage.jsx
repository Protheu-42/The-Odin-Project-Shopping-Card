import { useOutletContext } from "react-router";
import CartProduct from "./components/CartProduct";
import styles from "./CartPage.module.css";

function CartPage() {
  const [cart, addToCart, removeFromCart, setQuantity] = useOutletContext();

  return (
    <>
      <ul className={styles.container}>
        {cart.map((item, index) => (
          <CartProduct
            key={index}
            index={index}
            product={item}
            removeFromCart={removeFromCart}
            setQuantity={setQuantity}
          />
        ))}
      </ul>
    </>
  );
}

export default CartPage;
