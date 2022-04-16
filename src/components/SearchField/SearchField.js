import { Container, Button } from "react-bootstrap"
import "./SearchField.css"
import { useState, useEffect } from "react";

const SearchField = ({ products }) => {

    const [name, setName] = useState("");
    const [resultPositive, setResultPositive] = useState([]);
    const [resultNegative, setResultNegative] = useState("");

    const compare = () => {
        setResultPositive([]);
        products.forEach(element => {
            if(element.name == name){
                setResultPositive(element);
            }
            
        });
    }

    console.log(resultPositive)

    const getName = (event) => {
        setName(event.target.value);
    }

    return(
        <Container className="search-container">
            <input className="search-field" placeholder="search..." onChange={getName}/>
            <Button onClick={compare}>Search</Button>
        </Container>
    )
}

export default SearchField