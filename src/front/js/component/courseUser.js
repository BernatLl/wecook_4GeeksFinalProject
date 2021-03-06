import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/listadoCursos.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

export const CourseUser = () => {
  const { store, actions } = useContext(Context);
  const id = useParams().id;

  useEffect(() => {
    actions.getCourseOfUser();
  }, []);

  
  return (
    <>
      <div className="container">
        <Row className="g-4 mb-5">
          {store.courseUser.map((select, i) => (
            <Col className="m-5" key={i}>
              <Card>
                <Card.Img
                  className="card-img-top p-3"
                  variant="top"
                  src={select.img}
                />
                <Card.Body>
                  <Card.Title>{select.title}</Card.Title>
                  <Card.Text>{select.description}</Card.Text>
                </Card.Body>
                <div className="buttoncourselist">
                  <Link to={"/courseview/" + select.id}>
                    <Button variant="outline-primary">View Course</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      actions.DeleteCourseUser(select.id);
                    }}
                    variant="outline-primary"
                  >
                    Delete from my Courses
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
