import React from "react";
import "./LoginForm.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

const LoginForm = () => {

    const navigate = useNavigate();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const getUsername = (event) => {
        setLoginUsername(event.target.value);
    }

    const getPassword = (event) => {
        setLoginPassword(event.target.value);
    }

    const login = () => {
        axios({
            method: "POST",
            data:{
                username: loginUsername,
                password: loginPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/users/login",
        }).then((res) => {
            if(res.data._id){
                localStorage.setItem("user", JSON.stringify(res.data))
                navigate("/account")
                window.location.reload();
            }
        })
    }

    return(
        <div className="login-form">
            <>
                <Form className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" onChange={getUsername} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={getPassword}/>
                    </Form.Group>
                    <Button className="button-color" type="submit" onClick={login}>
                        Submit
                    </Button>
                </Form>
            </>
        </div>
    )
} 

export default LoginForm;