import { Container } from "react-bootstrap";
import { useState } from "react";
import "./Galery.css"
import ModalCard from "../ModalCard/ModalCard";

const Galery = ({ products }) => {

    const [modalStatus, setModalStatus] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const onHide = () => {
        setModalStatus(false);
      };

    return(
        <Container className="galery">
            {products.map((product) => (
                <div
                    key = {product._id}
                    className = "product-container"
                    onClick={() => {
                        setSelectedProduct(product);
                        setModalStatus(true);
                      }}
                >
                    <img className="product-img" src={product.url} alt="card from main page" />
                    <p className = "product-name">{product.name}</p>
                </div>
            ))}
            {modalStatus && <ModalCard onHide={onHide} showModal={modalStatus} product={selectedProduct} />}
        </Container>
    )
}

export default Galery;