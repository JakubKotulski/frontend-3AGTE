import "./AcceptTransactionPanel.css"
import { Button } from "react-bootstrap";

const AcceptTransactionPanel = ({accept, decline}) => {
    return(
        <div className="finalise-panel">
            <Button onClick={accept} variant="success">Order and pay</Button>
            <Button onClick={decline} variant="danger">Remove all items from the list</Button>
        </div>
    )
}

export default AcceptTransactionPanel;