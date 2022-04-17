import "./ModalCard.css"
import { Modal, Button } from "react-bootstrap";

const ModalCard = ({ showModal, product, onHide }) => {
    return(
        <Modal show={showModal} onHide={onHide} keyboard={false} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>{product.name}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="modal-body">
                <img src={product.url} alt="card"></img>
                <div className="modal-description">
                    <p className="modal-paragraf"><b>Price:</b> {product.price} pln</p>
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