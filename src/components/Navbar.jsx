import { Link } from "react-router";
import styles from "./Navbar.module.css";

function Navbar({ cart }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="ShopPage">
              Shop
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="CartPage">
              Cart
            </Link>
          </li>
          <li> 🛒: {cart}</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
