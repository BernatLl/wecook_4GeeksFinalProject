import React, { useContext, useEffect, useState } from "react";
import "../../styles/formProfile.css";
import Form from "react-bootstrap/Form";
import { Context } from "../store/appContext";
import { Row, Col } from "react-bootstrap";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  const [newStudent, setNewStudent] = useState({});

  return (
    <>
      <div className="container">
        <h1>User Profile</h1>
        <Form>
          <fieldset>
            <Form.Group className="mb-3">
              <Form.Control
                id="TextInput"
                placeholder="Add a Username"
                onChange={(e) => {
                  e.preventDefault();
                  setNewStudent({ ...newStudent, username: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3 ">
              <Form.Control
                id="TextInput"
                placeholder="FullName"
                onChange={(e) => {
                  e.preventDefault();
                  setNewStudent({ ...newStudent, full_name: e.target.value });
                }}
              />
            </Form.Group>

            <Row>
              <Col className="col-6">
                <Form.Group className="mb-3 col-6">
                  <Form.Control
                    id="TextInput"
                    placeholder="Add an email"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewStudent({ ...newStudent, email: e.target.value });
                    }}
                  />
                </Form.Group>
              </Col>

              <Col className="col-6">
                <Form.Group className="mb-3 col-6">
                  <Form.Control
                    id="TextImput"
                    placeholder="Password"
                    onChange={(e) => {
                      e.preventDefault();
                      setNewStudent({
                        ...newStudent,
                        password: e.target.value,
                      });
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                id="TextInput"
                placeholder="Add a image url"
                onChange={(e) => {
                  e.preventDefault();
                  setNewStudent({ ...newStudent, image: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Something about you</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(e) => {
                  e.preventDefault();
                  setNewStudent({
                    ...newStudent,
                    student_description: e.target.value,
                  });
                }}
              />
            </Form.Group>

            {!store.token ? (
              <Link to="/login">
                <button
                  id="TextInput"
                  type="button"
                  className="bcart col"
                  onClick={() => {
                    actions.createUser(newStudent);
                  }}
                >
                  Create
                </button>
              </Link>
            ) : (
              <button
                id="Save"
                type="button"
                onClick={() => actions.editUser()}
                className="bcart col"
              >
                Save Changes
              </button>
            )}
          </fieldset>
        </Form>
      </div>
    </>
  );
};
