import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import useCart from "./components/Cart";

import "./styles/variables.css";
import "./styles/global.css";

function App() {
  const { cart, addToCart, removeFromCart, setQuantity } = useCart();

  return (
    <>
      <Navbar cart={cart.length} />
      <Outlet context={[cart, addToCart, removeFromCart, setQuantity]} />
    </>
  );
}

export default App;
