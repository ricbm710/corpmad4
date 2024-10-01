//bootstrap
import { Card } from "react-bootstrap";
//interfaces
import { productImage } from "../interfaces/productImage";
//css
import "./productImage.css";

const ProductImage = ({ path, size }: productImage) => {
  //const imgUrl = `public/images/products/${path}`;
  const imgUrl = `${import.meta.env.BASE_URL}images/products/${path}`;
  return (
    <>
      <div className="d-flex justify-content-center">
        <Card.Img
          variant="top"
          src={imgUrl}
          alt={path}
          className={`custom-card-image-${size}`}
        ></Card.Img>
      </div>
    </>
  );
};

export default ProductImage;
