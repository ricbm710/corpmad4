//rrd
import { Outlet } from "react-router-dom";
//components
import NavbarComp from "./components/NavbarComp";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <NavbarComp />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
