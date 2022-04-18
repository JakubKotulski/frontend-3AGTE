import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import "./SearchField.css";
import ModalCard from "../ModalCard/ModalCard";


const SearchField = ({ products }) => {

    const [name, setName] = useState("");
    const [resultPositive, setResultPositive] = useState([]);
    const [resultNegative, setResultNegative] = useState("");

    const [modalStatus, setModalStatus] = useState(false);

    const onHide = () => {
        setModalStatus(false);
      };

    const compare = () => {
        setResultPositive([]);
        const result = products.find(element => element.name == name);
        if(result) {
            setResultPositive(result);
            setResultNegative("");
        } else {
            setResultNegative("Sorry, we don't…");
        }       
    }

    const getName = (event) => {
        setName(event.target.value);
    }

    return(
        <Container className="search-container">
            <input className="search-field" placeholder="search..." onChange={getName}/>
            <Button 
            onClick={() => {
                compare();
                setModalStatus(true);
            }}>Search</Button>
            {modalStatus && <ModalCard onHide={onHide} showModal={modalStatus} product={resultPositive}/>}
        </Container>
    )
}

export default SearchField