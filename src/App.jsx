import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1>Hello World</h1>
      <Outlet />
    </>
  );
}

export default App;
