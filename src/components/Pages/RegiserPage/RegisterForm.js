import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import "./RegisterForm.css"

const RegisterForm = () => {

    const colorsForBootstrap = {
        button: "#007A78"
    }
    const [signinUsername, setSigninUsername] = useState("");
    const [signinPassword, setSigninPassword] = useState("");

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
            </>
        </div>
    )
} 

export default RegisterForm;