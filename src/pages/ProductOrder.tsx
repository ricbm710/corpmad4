//hooks
import { useEffect, useState } from "react";
//rrd
import { useParams } from "react-router-dom";
//data
import { products } from "../assets/data/products";
//interfaces
import { product } from "../interfaces/products";
//bootstrap
import { Col, Container, Row } from "react-bootstrap";
import ProductImage from "../components/ProductImage";
import ProductOrderMenu from "../components/ProductOrderMenu";

const ProductOrder = () => {
  //get param - useParams returns an object rather than a value
  const { id } = useParams<{ id?: string }>();
  //create product state
  const [product, setProduct] = useState<product | null>(null);
  //find product by param
  useEffect(() => {
    const foundProduct = products.find((p) => p.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  return (
    <>
      <Container>
        <Row className="d-flex flex-row flex-wrap">
          <Col md={6} xs={12} lg={6} className="mb-2">
            {product ? (
              <ProductImage path={product.imagen} size="lg" />
            ) : (
              <div>Cargando Imagen...</div>
            )}
          </Col>
          <Col md={6} xs={12} lg={6}>
            {product && <ProductOrderMenu product={product} />}
          </Col>
          <Col>
            <h4 className="mt-4 global-subtitle fw-bold">
              Descripción del Producto:
            </h4>
            <p className="global-text">{product?.descripcion}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductOrder;
