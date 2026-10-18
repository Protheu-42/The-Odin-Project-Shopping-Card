import { useEffect, useState } from "react";

const useLoadProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProductsList([...response]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { productsList, error, loading };
};

export default useLoadProducts;
