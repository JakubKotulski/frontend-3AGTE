import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Form, Alert } from "react-bootstrap";
import "./RegisterForm.css"

const RegisterForm = () => {

    const [signinUsername, setSigninUsername] = useState("");
    const [signinPassword, setSigninPassword] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
    const [showSetback, setShowSetback] = useState(false);

    const getUsername = (event) => {
        setSigninUsername(event.target.value);
        console.log(signinUsername);
    }

    const getPassword = (event) => {
        setSigninPassword(event.target.value);
        console.log(signinPassword);
    }

    const signin = () => {
        axios({
            method: "POST",
            data:{
                username: signinUsername,
                password: signinPassword,
            },
            withCredentials: true,
            url: "http://localhost:4000/user",
        }).then((res) => {
            
            if(res.data.err === undefined){
                axios({
                    method: "POST",
                    data:{
                        id: res.data._id,
                    },
                    withCredentials: true,
                    url: "http://localhost:4000/balance",
                })
                setShowSuccess(true);
            }else{
                setShowSetback(true);
            }
        })
    }

    return(
        <div className="register-form">
            <>
                <Form className="form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={getUsername} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={getPassword}/>
                    </Form.Group>
                    <Button className="button-color" type="submit" onClick={signin}>
                        Submit
                    </Button>
                </Form>
                {showSuccess && 
                <Alert className = "bad-alert" variant = "success">
                    <p>Your account have been created!</p>
                    <Button variant = "success" onClick = {() => setShowSuccess(false)}>Close</Button>
                </Alert>}  
                {showSetback && 
                <Alert className = "bad-alert" variant = "warning">
                    <p>Account with that username already exist, try something else!</p>
                    <Button variant = "warning" onClick = {() => setShowSetback(false)}>Close</Button>
                </Alert>}  
            </>
        </div>
    )
} 

export default RegisterForm;