import "./AccountBalance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const AccountBalance = ({balance}) => {




    return(
        <div className="circle-balance">
            <FontAwesomeIcon className="wallet-icon" icon = {faWallet} />
            <p className="balance-description">Actuall balance: {balance}</p>
        </div>
    )
}

export default AccountBalance;