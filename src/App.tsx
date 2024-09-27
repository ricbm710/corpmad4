//rrd
import { Route, Routes } from "react-router-dom";
//layout
import Layout from "./Layout";
//pages
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>
        <Route path="*" element={<div>Error 404</div>}></Route>
      </Routes>
    </>
  );
};

export default App;
