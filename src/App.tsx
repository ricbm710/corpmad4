//rrd
import { Route, Routes } from "react-router-dom";
//layout
import Layout from "./Layout";
//pages
import HomePage from "./pages/HomePage";
import ProductOrder from "./pages/ProductOrder";
import CartPage from "./pages/CartPage";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//css
import "./global.css";
//utils
import { basePath } from "./utils/basePath";
//context
import CartProvider from "./contexts/CartProvider";
//Toastify
import "react-toastify/ReactToastify.css";

const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path={basePath} element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="order/:id" element={<ProductOrder />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="*" element={<div>Error 404</div>}></Route>
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
