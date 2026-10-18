import useLoadProducts from "./components/useLoadProducts";

function ShopPage() {
  const { productsList, error, loading } = useLoadProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h2>I'm a Shop Page</h2>
      {productsList.map((item) => (
        <p>{item.title}</p>
      ))}
    </>
  );
}

export default ShopPage;
