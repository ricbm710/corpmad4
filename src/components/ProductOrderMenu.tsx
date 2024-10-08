//hooks
import { useState } from "react";
//interface
import { product } from "../interfaces/products";
import { productToCart } from "../interfaces/productToCart";
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
import "../assets/styles/toastifyStyles.css";
//custom hooks
import { useCart } from "../hooks/useCart";
//toastify
import { toast, ToastContainer } from "react-toastify";

const ProductOrderMenu = ({ product }: { product: product }) => {
  const [qty, setQty] = useState<string>("");
  //context
  const { cart, addToCart } = useCart();
  const handleAddToCart = () => {
    const prodToCart: productToCart = {
      product: product,
      qty: Number(qty),
    };
    //qty was already updated
    addToCart(prodToCart);
    //*to be deleted
    console.log(cart);
    toast.success("Item agregado a carro", {
      position: "top-right", // Position of the toast
      autoClose: 3000, // Auto-close after 3 seconds
      hideProgressBar: false, // Show progress bar or not
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging to dismiss
      progress: undefined, // Optional progress value
    });
  };

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
            <Button
              className="w-100 add2cart-button global-text"
              onClick={handleAddToCart}
            >
              Agregar a Carro
            </Button>
            <ToastContainer />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductOrderMenu;
