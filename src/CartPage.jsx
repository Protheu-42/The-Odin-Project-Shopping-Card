import { useOutletContext } from "react-router";
import CartProduct from "./components/CartProduct";

function CartPage() {
  const [cart, addToCart] = useOutletContext();

  return (
    <>
      {cart.map((item) => (
        <CartProduct key={item.id} product={item} />
      ))}
    </>
  );
}

export default CartPage;
