import axios from "axios";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";

const AccountPage = () => {

    const navigate = useNavigate()

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

    useEffect(() => {
        getUSser();
    }, [getUSser]);

    return(
        <h1>account</h1>
    )
}

export default AccountPage;