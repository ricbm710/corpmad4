//bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";
//rrd
import { Link } from "react-router-dom";
//logo
import logo from "/images/logo.png?url"; //url instead of local
//css
import "./navbarComp.css";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//utils
import { basePath } from "../utils/basePath";

const NavbarComp = () => {
  return (
    <>
      <Navbar className="custom-navbar" expand="lg">
        <Container>
          {/* Left section: Brand logo */}
          <Navbar.Brand as={Link} to={basePath} className="me-auto">
            <img src={logo} alt="Corpmad Logo" className="custom-logo" />
          </Navbar.Brand>

          {/* Right section: Shopping Cart */}
          <div className="d-lg-none ms-auto">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="sm"
                className="custom-cart"
              />
            </Link>
          </div>

          {/* Navbar toggler */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-2" />

          {/* Collapsible Nav items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item as={Link} to={basePath} className="nav-link custom-nav">
                Productos
              </Nav.Item>
              <Nav.Item
                as={Link}
                to={`${basePath}ubicaciones`}
                className="nav-link custom-nav"
              >
                Ubicaciones
              </Nav.Item>
            </Nav>

            {/* Shopping Cart visible on larger screens */}
            <div className="d-none d-lg-block ms-3">
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="sm"
                  className="custom-cart"
                />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;
