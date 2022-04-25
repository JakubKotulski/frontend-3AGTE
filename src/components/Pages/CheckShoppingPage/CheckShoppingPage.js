import "./CheckShoppingPage.css";
import CheckList from "../../CheckList/CheckList";
import AcceptTransactionPanel from "../../AcceptTransactionPanel/AcceptTransactionPanel";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CheckShoppingPage = () => {

    

    const navigate = useNavigate();

    if(localStorage.getItem("array") === null){
        navigate("/");
        window.location.reload(true);
    }


    const [list, setList] = useState([]);

    useEffect(() => {
        getItemsFromStorage();
    }, [])

    const getItemsFromStorage = () => {
        setList(JSON.parse(localStorage.getItem("array")));
    }

    const removeItem = (i) => {
        if(list.length === 1){
            localStorage.clear();
        }else{
            list.splice(i, 1);
            setList(list);
            localStorage.setItem("array", JSON.stringify(list));
        }
    }

    const acceptTransaction = () => {
        setList([]);
    }

    const declineTransaction = () => {
        setList([]);
        localStorage.clear();
    }

    return(
     <Container>
         <div id = "header-check-list">
            <h3>Check your list before you finalise the transaction</h3>     
        </div>
        <div>
            <CheckList list = { list } removeFunction = {removeItem} fetch = {getItemsFromStorage}/>
        </div>
        <div>
            <AcceptTransactionPanel accept = {acceptTransaction} decline = {declineTransaction} />
        </div>

     </Container>
    )
}

export default CheckShoppingPage;