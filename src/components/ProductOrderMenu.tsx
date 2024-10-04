//hooks
import { useState } from "react";
//interface
import { product } from "../interfaces/products";
//bootstrap
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
//css
import "./productOrderMenu.css";

const ProductOrderMenu = ({ product }: { product: product }) => {
  const [qty, setQty] = useState<string>("");
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="global-title fw-bold">
            {product.nombre}
          </Card.Title>
          <Card.Text className="global-subtitle">
            Bs. {product.precio}
          </Card.Text>
          <div>
            <FormGroup controlId="formQuantity">
              <FormLabel className="global-text">Cantidad:</FormLabel>
              <FormControl
                type="number"
                value={qty}
                min={1}
                className="mb-2 global-text"
                onChange={(e) => {
                  const newValue = e.target.value.replace(/^0+/, ""); // Remove leading zeros
                  setQty(newValue ? newValue : ""); // Set the number, or empty if no valid input
                }}
              ></FormControl>
            </FormGroup>
            <Button className="w-100 add2cart-button global-text">
              Agregar a Carro
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductOrderMenu;
