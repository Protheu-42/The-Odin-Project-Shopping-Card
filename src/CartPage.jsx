import { useOutletContext } from "react-router";
import CartProduct from "./components/CartProduct";

function CartPage() {
  const [cart, addToCart, removeFromCart, setQuantity] = useOutletContext();

  return (
    <>
      {cart.map((item, index) => (
        <CartProduct
          key={index}
          index={index}
          product={item}
          removeFromCart={removeFromCart}
          setQuantity={setQuantity}
        />
      ))}
    </>
  );
}

export default CartPage;
