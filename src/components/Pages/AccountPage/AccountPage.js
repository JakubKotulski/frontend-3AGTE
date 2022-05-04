import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";
import { Container, Col, Row } from "react-bootstrap";
import HistoryOfPurchases from "../../HistoryOfPurchases/HistoryOfPurchases";
import AccountBalance from "../../AccountBalance/AccountBalance";
import AddingToBalance from "../../AddingToBalace/AddingToBalance";

const AccountPage = () => {

    const navigate = useNavigate()
    const [history, setHistory] = useState([]);
    const [balance, setBalance] = useState(0);

    const getUSser = useCallback(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user/me"
        }).then((res) => {
            if(!res.data.username){
                navigate("/");
            }
        })
    }, [navigate]);

    const fetchHistory = useCallback(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/history/my",
          }).then((res) => {
            setHistory(res.data);
          });
    }, [])

    const getBalance = useCallback(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/get-balance",
        }).then((res) => {
            setBalance(res.data[0].money);
        })
    }, []);

    const updateBalance = (cash) => {
        console.log(parseInt(cash))
        axios({
          method: "PUT",
          data: {
            balance: balance + parseInt(cash),
          },
          withCredentials: true,
          url: "http://localhost:4000/balance-update",
        }).then((res) => {
          setBalance(res.data);
        });
      };

    useEffect(() => {
        getUSser();
    }, [getUSser]);

    useEffect(() => {
        fetchHistory();
    }, [fetchHistory]);

    useEffect(() => {
        getBalance();
    }, [getBalance]);

    return(
        <div> 
            <Container fluid className="mp-container">
            <Row>
                <Col>
                    <AddingToBalance />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AccountBalance putBalance = {updateBalance} balance = {balance}/>
                    
                </Col>
            </Row>
            
            <Row className="row-customized">
                <Col>
                    <h3>History of your transactions</h3>
                    <HistoryOfPurchases list = {history}/>
                </Col>
            </Row>
            
            </Container>
        </div>
    )
}

export default AccountPage;