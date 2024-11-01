//bootstrap
import { Container } from "react-bootstrap";
//css
import "./footer.css";
import { Link } from "react-router-dom";
//fa
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <Container fluid className="footer-container d-flex">
        <div className="footer-socials-container ms-2">
          <p className="custom-footer-title mb-1">Siguenos:</p>
          <div className="socials-container d-flex justify-content-around">
            <a
              href="https://www.facebook.com/p/Corpmad-Bolivia-100094199303080/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="socials-icon mx-2"
              />
            </a>
            <a
              href="https://www.instagram.com/corpmadbolivia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                className="socials-icon mx-2"
              />
            </a>
            <a
              href="https://www.tiktok.com/@corpmad.bolivia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                size="lg"
                className="socials-icon mx-2"
              />
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
