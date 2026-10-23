import { useOutletContext } from "react-router";

function CartPage() {
  const [cart, addToCart] = useOutletContext();

  return (
    <>
      {cart.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
}

export default CartPage;
