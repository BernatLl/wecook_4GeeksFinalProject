import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/student.css";
import { Link } from "react-router-dom";
import "../../styles/listadoCursos.css";
import { ChefProfile } from "../component/chefProfile.js";
import HeaderImg from "../../img/HeaderImg.jpg";
import "../../styles/home.css";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { Row, Col } from "react-bootstrap";
import { ListadoCursos } from "../component/listadoCursos.js";
import { ProgressBar } from "react-bootstrap";
import { CreateCourse } from "./CreateCourse";
import { CloseAccount } from "../component/CloseAccount";
import Button from "react-bootstrap/Button";

export const Chef = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.loadChefs();
  }, [store.token]);

  return (
    <>
      <img id="BackHead" className="mt-m" src={HeaderImg}></img>
      {!store.token ? (
        <>
          <div className="container">
            <Row>
              <h1 className=" mt-5">Chef Information</h1>
              <div className="pb-5 ">
                <h5 className="StuTittle">Chefs</h5>
                <p>
                  Welcome to "We Cook", with us you will be able to access to a
                  digital library with hundreds of professional cooks around the
                  world, do you want to learn how to cut like a professional
                  Click here, Do you want to learn about Venezuelan food, New
                  Zeleand, Canada, Scotland, etc? We give the chance to
                  professional or no professional chefs around the world that
                  want to share for a modest price their recipe or skill with
                  the rest of the world!!!!
                </p>
                <p>
                  If you are a user yet, you can login, if not you can create
                  your profile at signIn button
                </p>

                <div className="buttonsLog">
                  {!store.token ? (
                    <Link to="/chefprofile">
                      <Button variant="outline-primary"  type="button">
                        Create a chef profile
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/chef">
                      <Button
                        
                        type="button"
                        onClick={() => actions.editUser()}
                        className="blogout "
                      >
                        Profile
                      </Button>
                    </Link>
                  )}
                  {!store.token ? (
                    <Link to="/login">
                      <Button variant="outline-primary"  type="button">
                        Login
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/">
                      <Button
                      variant="outline-primary"
                        
                        type="button"
                        onClick={() => actions.logout()}
                        className="blogin "
                      >
                        Logout
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </Row>
          </div>
        </>
      ) : (
        <>
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
                    
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </>
      )}
     

     
    </>
  );
};
