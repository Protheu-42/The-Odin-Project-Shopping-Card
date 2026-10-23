import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import useCart from "./components/Cart";

function App() {
  const { cart, addToCart } = useCart();

  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
      <Outlet context={[cart, addToCart]} />
    </>
  );
}

export default App;
