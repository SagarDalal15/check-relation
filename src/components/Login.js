import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { currentUserContext, listContext } from "../context";

export default function Login() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [loggedInUser, setLoggedInUser] = useContext(currentUserContext);
  const [list, setList] = useContext(listContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setLoggedInUser({ username: username, name: name, friends: [] });
    let tempArray = list;
    tempArray.push({ username: username, name: name, friends: [] });
    setList(tempArray);
    history.push("/home");
  };

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "100px",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Enter Your Details
        </div>
        <Form onSubmit={submitHandler}>
          <Form.Label style={{ fontSize: "18px" }}>
            Enter Your Username
          </Form.Label>
          <Form.Control
            style={{ width: "300px" }}
            type="text"
            placeholder="Enter Your Username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <Form.Label style={{ fontSize: "18px" }}>Enter Your Name</Form.Label>
          <Form.Control
            style={{ width: "300px" }}
            type="text"
            placeholder="Enter Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Button
            style={{ width: "100%", margin: "0px" }}
            varient="primary"
            type="submit"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}
