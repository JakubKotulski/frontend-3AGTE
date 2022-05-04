import "./CheckShoppingPage.css";
import CheckList from "../../CheckList/CheckList";
import AcceptTransactionPanel from "../../AcceptTransactionPanel/AcceptTransactionPanel";
import { useState, useEffect, useCallback } from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CheckShoppingPage = () => {

    

    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [balance, setBalance] = useState(0);
    const [show, setShow] = useState(false);

    const getBalance = useCallback(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/get-balance",
        }).then((res) => {
            setBalance(res.data[0].money);
        })
    }, []);

    if(localStorage.getItem("array") === null){
        navigate("/");
        window.location.reload(true);
    }

    const getItemsFromStorage = () => {
        setList(JSON.parse(localStorage.getItem("array")));
    }

    const removeItem = (i) => {
        if(list.length === 1){
            localStorage.removeItem("array");
        }else{
            list.splice(i, 1);
            setList(list);
            localStorage.setItem("array", JSON.stringify(list));
        }
    }

    const acceptTransaction = () => {
        let price = 0;
        for(let i = 0; i < list.length; i++){
            price = price + list[i].price
        }

        const date = new Date().toLocaleDateString();

        if(localStorage.getItem("user")){
            if(price <= balance){
                axios({
                    method: "POST",
                    data: {
                        items: list,
                        price: price,
                        date: date
                    },
                    withCredentials: true,
                    url: "http://localhost:4000/history",
                }).then((res) => {
                    axios({
                        method: "PUT",
                        data: {
                            balance: balance - price,
                        },
                        withCredentials: true,
                        url: "http://localhost:4000/balance-update",
                    })
                    console.log(res)
                    setList([]);
                    localStorage.removeItem("array");
                    navigate("/");
                })
            }else{
                setShow(true);
            }
                
        }else{
            console.log("kupione");
            setList([]);
            localStorage.removeItem("array");
            navigate("/");
        }
        
    }

    const declineTransaction = () => {
        setList([]);
        localStorage.removeItem("array");
    }

    useEffect(() => {
        getItemsFromStorage();
    }, [])

    useEffect(() => {
        getBalance();
    }, [])

    return(
     <Container>
         <div id = "header-check-list">
            <h3>Check your list before you finalise the transaction</h3>   
            {show && 
                <Alert id = "bad-alert" variant = "danger">
                    <p>You don't have enough means in your wallet, just top it up or use traditional bank transfer</p>
                    <Button variant = "light" onClick = {() => setShow(false)}>Close</Button>
                </Alert>}  
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