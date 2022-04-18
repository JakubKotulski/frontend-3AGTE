import "./ModalCard.css"
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import pobrane from "../../pobrane.png"



const ModalCard = ({ showModal, product, onHide }) => {

    if(Object.entries(product) == 0){
        product = { name: "we don't have what you are looking for ",
                    price: "-",
                    url: pobrane }
    }

    return(
        <Modal show={showModal} onHide={onHide} keyboard={false} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="modal-body">
                <img src={product.url} alt="brak produktu"></img>
                <div className="modal-description">
                    <p className="modal-paragraf"><b>Price:</b> {product.price}</p>
                </div>
                </div>
            </Modal.Body>

            <Modal.Footer className="modal-footer-flex">
                <Button variant="secondary" onClick={onHide}>
                Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalCard;