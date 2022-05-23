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

      console.log(products.filter(item => item.section === "AOS"), " PRODUCTS");

    //   products.map((product)
      
    return(
        <>
            <h3 className="galery-h3">MTG zone</h3>
            <Container className="galery">  
            {products.filter(product => product.section === "MTG").map((product) => (
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
        <h3 className="galery-h3">AOS zone</h3>
        <Container className="galery">
            {products.filter(product => product.section === "AOS").map((product) => (
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
        </>
    )
}

export default Galery;