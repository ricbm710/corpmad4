import { Container } from "react-bootstrap";

const PurchasePage = () => {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="global-title">Ubicacion:</h1>
        <div>Google Maps</div>
        <h1 className="global-title">Contacto:</h1>
        <div>Whatsapp</div>
      </Container>
    </>
  );
};

export default PurchasePage;
