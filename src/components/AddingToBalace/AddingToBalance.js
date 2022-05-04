import "./AddingToBalance.css"
import { Container, Alert } from "react-bootstrap";

const AddingToBalance = () => {

    return(
        <div>
            <Container fluid className="description-box-for-balance">
                <Alert variant="success" className="balance-alerts">
                    <Alert.Heading>Payment</Alert.Heading>      
                    <hr />
                    <p>
                        Look how easy it is to pay using your web wallet, It never has been so fast, just try!
                    </p>
                </Alert>
                <Alert variant="success" className="balance-alerts">
                    <Alert.Heading>Top-up</Alert.Heading>      
                    <hr />
                    <p>
                        You can add some money by paysefcard or by bank transfer.
                    </p>
                </Alert>
                <Alert variant="success" className="balance-alerts">
                    <Alert.Heading>Traditional payment</Alert.Heading>      
                    <hr />
                    <p>
                        You can still buying our products even not using your web wallet, so don't worry!
                    </p>
                </Alert>
            </Container>

        </div>
    )
}

export default AddingToBalance;