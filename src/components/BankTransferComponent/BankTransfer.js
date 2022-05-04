import "./BankTransfer.css"
import axios from "axios"
import { useState } from "react"
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap"


const BankTransfer = ({ showModal, onHide, addMeans }) => {

    const [means, setMeans] = useState(0);

    const getMeans = (event) => {
        setMeans(event.target.value)
    }

    return(
        <Modal show={showModal} onHide={onHide} keyboard={false} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Top-up for your wallet</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <div className="modal-body">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">Add means</InputGroup.Text>
                        <FormControl
                        onChange={getMeans}
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </div>
            </Modal.Body>

            <Modal.Footer className="modal-footer-flex">
                <Button variant="success" onClick={() => {addMeans(means); onHide(); window.location.reload(true)}}>
                    Finalise
                </Button>
            </Modal.Footer>
        </Modal>
    )

}

export default BankTransfer;