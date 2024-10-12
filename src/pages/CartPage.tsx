//bootstrap
import { Col, Container, Row } from "react-bootstrap";
//custom hooks
import { useCart } from "../hooks/useCart";
//components
import ProductImage from "../components/ProductImage";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
//css
import "./cartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItemQty } = useCart();
  //*remove item
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };
  //*update item qty
  const handleUpdateItemQty = (id: number, newQty: number) => {
    updateCartItemQty(id, newQty);
  };
  return (
    <>
      <Container>
        <h1 className="text-center global-title">Tu carrito</h1>

        {cart.length === 0 ? (
          <h2 className="global-subtitle">No hay items para mostrar.</h2>
        ) : (
          cart.map((prod) => (
            <Row key={prod.product.id} className="mb-2 cart-item">
              <Col md={3} xs={6} className="cart-item-img">
                <ProductImage path={prod.product.imagen} size="sm" />
              </Col>
              <Col
                xs={5}
                md={9}
                className="cart-item-info d-flex flex-column flex-md-row justify-content-center align-items-center"
              >
                <Col xs={12} md={3} className="d-flex flex-column me-2">
                  {" "}
                  <h1 className="global-title">{prod.product.nombre}</h1>
                  <h2 className="global-subtitle">
                    Precio: Bs. {prod.product.precio}
                  </h2>
                </Col>
                <Col xs={12} md={3} className="d-flex flex-column">
                  <label
                    htmlFor={`qty-${prod.product.id}`}
                    className="global-subtitle"
                  >
                    Cantidad:
                  </label>
                  <input
                    type="number"
                    id={`qty-${prod.product.id}`}
                    value={prod.qty}
                    className="global-text"
                    onChange={(e) =>
                      handleUpdateItemQty(
                        prod.product.id,
                        Number(e.target.value)
                      )
                    }
                  />
                </Col>
                <Col xs={12} md={6} className="d-flex">
                  <Col
                    xs={6}
                    md={6}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <p className="global-title mt-2">
                      Bs. {prod.product.precio * prod.qty}
                    </p>
                  </Col>
                  <Col xs={6} md={6} className="d-flex justify-content-center">
                    <button
                      onClick={() => handleRemoveItem(prod.product.id)}
                      className="custom-trash-button"
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        size="sm"
                        className="custom-trash-icon"
                      ></FontAwesomeIcon>
                    </button>
                  </Col>
                </Col>
              </Col>
            </Row>
          ))
        )}
      </Container>
    </>
  );
};

export default CartPage;
