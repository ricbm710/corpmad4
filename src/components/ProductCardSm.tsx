//interfaces
import { product } from "../interfaces/products";
//bootstrap
import { Card } from "react-bootstrap";
//rrd
import { Link } from "react-router-dom";
//components
import ProductImage from "./ProductImage";
//css
import "./productCardSm.css";

const ProductCardSm = ({ product }: { product: product }) => {
  return (
    <>
      <Card className="custom-prod-card m-2">
        <Link to="/">
          <ProductImage path={product.imagen} size="sm" />
          <Card.Title className="text-center mt-1 custom-card-prod-title">
            {product.nombre}
          </Card.Title>
          <Card.Body>
            <Card.Text className="text-center custom-card-prod-desc">
              Descripcion {product.id}
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </>
  );
};

export default ProductCardSm;
