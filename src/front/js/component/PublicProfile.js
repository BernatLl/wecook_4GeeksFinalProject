import "../../styles/formProfile.css";
import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";

export const PublicProfile = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.loadUser();
  }, [store.token]);

  return (
    <>
    <div className="container pt-10">
      <div className="titulo-profile">
          <h1>Public profile</h1>
        </div>
      
        
        {store.user.map((select, i) => (
          <div className="container-fluid" key={i}>
            <Row >
              <Col className="col-6 pb-2">
                <div>
                  <img src={select.image} className="fotoperfil" />
                </div>
              </Col>
              <Col>
                
                  <h4>Name: {select.full_name}</h4>
                  
                  <h4>Description: {select.student_description}</h4>
                  
                  <h4>User Name: {select.username}</h4>
                  
                  <h4>Email: {select.email}</h4>
                  
                
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </>
  );
};
