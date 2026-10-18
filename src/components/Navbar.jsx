import { Link } from "react-router";

function Navbar() {
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
        </ul>
      </div>
    </>
  );
}

export default Navbar;
