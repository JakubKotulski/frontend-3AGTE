import "./CheckShoppingPage.css";
import CheckList from "../../CheckList/CheckList";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const CheckShoppingPage = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getItemsFromStorage();
    }, [])

    const getItemsFromStorage = () => {
        setList(JSON.parse(localStorage.getItem("array")));
    }

    const removeItem = (i) => {
        setList(list.filter((item, index) => index !== i))
    }

    return(
     <Container>
         <div id = "header-check-list">
            <h3>Check your list before you finalise the transaction</h3>     
        </div>
        <div>
            <CheckList list = { list } removeFunction = {removeItem}/>
        </div>

     </Container>
    )
}

export default CheckShoppingPage;