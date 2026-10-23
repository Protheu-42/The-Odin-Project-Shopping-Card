import { Link } from "react-router";

function Navbar({ cart }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="ShopPage">Shop</Link>
          </li>
          <li>
            <Link to="CartPage">Cart</Link>
          </li>
          <li>ShoppingCart: {cart}</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
