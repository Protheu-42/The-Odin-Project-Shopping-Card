import ProductCard from "./components/ProductCard";
import useLoadProducts from "./components/useLoadProducts";
import { useOutletContext } from "react-router";
import styles from "./ShopPage.module.css";

function ShopPage() {
  const [cart, addToCart] = useOutletContext();
  const { productsList, error, loading } = useLoadProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <ul className={styles.container}>
        {productsList.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={addToCart} />
        ))}
      </ul>
    </>
  );
}

export default ShopPage;
