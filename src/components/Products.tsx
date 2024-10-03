//bootstrap
import { Col, Container } from "react-bootstrap";
//data
import { products } from "../assets/data/products";
//components
import ProductCardSm from "./ProductCardSm";

const Products = () => {
  return (
    <>
      <Container className="d-flex flex-wrap align-items-stretch">
        {products.map((p) => (
          <Col key={p.id} xs={6} sm={4} md={2}>
            <ProductCardSm product={p} />
          </Col>
        ))}
      </Container>
    </>
  );
};

export default Products;
