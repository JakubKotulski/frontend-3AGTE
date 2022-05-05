import { Container, Button } from "react-bootstrap";
import { useState } from "react";
import "./SearchField.css";
import ModalCard from "../ModalCard/ModalCard";


const SearchField = ({ products }) => {

    const [name, setName] = useState("");
    const [resultPositive, setResultPositive] = useState([]);

    const [modalStatus, setModalStatus] = useState(false);

    const onHide = () => {
        setModalStatus(false);
      };

    const compare = () => {
        setResultPositive([]);
        const result = products.find(element => element.name.toLowerCase() === name.toLowerCase());
        if(result) {
            setResultPositive(result);
        }      
    }

    const getName = (event) => {
        setName(event.target.value);
    }

    return(
        <Container className="search-container">
            <input className="search-field" placeholder="search..." onChange={getName}/>
            <Button className="button-search" variant = "dark"
            onClick={() => {
                compare();
                setModalStatus(true);
            }}>Search</Button>
            {modalStatus && <ModalCard onHide={onHide} showModal={modalStatus} product={resultPositive}/>}
        </Container>
    )
}

export default SearchField