import App from "./App";
import Homepage from "./Homepage";
import ShopPage from "./ShopPage";
import CartPage from "./CartPage";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "shopPage", element: <ShopPage /> },
      { path: "cartPage", element: <CartPage /> },
    ],
  },
];

export default routes;
