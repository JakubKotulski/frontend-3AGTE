import "./AccountBalance.css";
import BankTransfer from "../BankTransferComponent/BankTransfer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AccountBalance = ({balance, putBalance}) => {

    const [modalStatus, setModalStatus] = useState(false);

    const onHide = () => {
        setModalStatus(false);
      };

    return(
        <div className="circle-balance">
            <FontAwesomeIcon className="wallet-icon" icon = {faWallet} onClick = {() => {setModalStatus(true)}} />
            <p className="balance-description">Actuall balance: {balance} zł</p>
            {modalStatus && <BankTransfer onHide={onHide} showModal={modalStatus} addMeans = {putBalance}/>}
        </div>
    )
}

export default AccountBalance;