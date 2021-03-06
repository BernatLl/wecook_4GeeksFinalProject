import React, { useContext, useEffect, useState} from "react";
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/formProfile.css"
import Form from 'react-bootstrap/Form'


export const LoginStudent = ()=>{
    const { store, actions } = useContext(Context);

	
	useEffect (()=>{
		actions.login();
	},[])
    return (
        <>
        <h4>Student Login</h4>
        <Form>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="User"></Form.Label>
                     <Form.Control id="TextInput" placeholder="User" />
                </Form.Group>
                               
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="Email"></Form.Label>
                     <Form.Control id="email" placeholder="Add an email" />
                </Form.Group>
                <Row>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Password"></Form.Label>
                        <Form.Control id="Password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label htmlFor="Password2"></Form.Label>
                        <Form.Control id="Password2" placeholder="Repeat Password" />
                    </Form.Group>
                </Row>
                <Row>
                    <Link >
                    <Button as="input" type="submit" value="Send" />
                    </Link>
                
                </Row>
                
 
            </fieldset>
        </Form>
        </>
    )

}

