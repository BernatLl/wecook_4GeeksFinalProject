import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Context } from "../store/appContext";
import "../../styles/student.css"
import { Link } from "react-router-dom";
import "../../styles/listadoCursos.css"
import { ChefProfile } from "../component/chefProfile.js";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";
import { ListadoCursos } from "../component/listadoCursos.js";
import { ProgressBar } from "react-bootstrap";
import { CreateCourse } from "./CreateCourse";

export const  Chef = ()=>{
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if (store.token && store.token != "" && store.token != undefined)
          actions.loadChefs();
      }, [store.token]);

   
    return (
        <>
        <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      <h1 className="titulo">This is your chef profile page</h1>
      <div className="container p-1 my-5">
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
          className="container-menu"
        >
          <Row className="marco">
            <Col sm={3} className="contenido-menu">
              <Nav justify variant="pills" className="flex-column menu">
                <Nav.Item>
                  <Nav.Link eventKey="first">Create Chef Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="2">Create Course</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="3">Close account</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="contenido">
              <Tab.Content>
               
                <Tab.Pane eventKey="first">
                  <ChefProfile />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <CreateCourse />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <CloseAccount />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      {/* <h1 className="titulo">My Courses</h1>
      <div className="container">
        <div className="row">
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Master Cutting Class</h5>
              <ProgressBar
                animated
                striped
                variant="danger"
                now={45}
                label={"45%"}
              />
            </div>
          </div>
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Master Class Stock</h5>
              <ProgressBar
                animated
                striped
                variant="danger"
                now={60}
                label={"60%"}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Beginner Course Risotto</h5>
              <ProgressBar
                animated
                striped
                variant="success"
                now={100}
                label={"100%"}
              />
            </div>
          </div>
          <div className="card col-6 m-0.5">
            <img
              src="https://c.pxhere.com/photos/31/c5/bowl_cabbage_cuisine_delicious_dish_food_healthy_lunch-1498621.jpg!d"
              className="card-img-top p-5"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Advanced Cook</h5>
              <ProgressBar
                animated
                striped
                variant="danger"
                now={10}
                label={"10%"}
              />
            </div>
          </div>
        </div>
      </div> */}

      <h1 className="titulo">Recomended for you</h1>
      <div className="container-fluid p-1 my-5">
        <ListadoCursos />
      </div>
    </>
  );

    }