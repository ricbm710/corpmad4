//rrd
import { Route, Routes } from "react-router-dom";
//layout
import Layout from "./Layout";
//pages
import HomePage from "./pages/HomePage";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//css
import "./global.css";

const App = () => {
  const basePath = import.meta.env.BASE_URL;
  return (
    <>
      <Routes>
        <Route path={basePath} element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route path="*" element={<div>Error 404</div>}></Route>
      </Routes>
    </>
  );
};

export default App;
