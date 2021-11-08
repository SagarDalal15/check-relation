import React, { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { listContext } from "../context";

export default function RelationCheck() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [temp2State, setTemp2State] = useState([]);
  const [bool, setBool] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const [list, setList] = useContext(listContext);

  let node1, node2;

  var temp = [];
  var temp2 = [];

  const recursion = (node) => {
    if (node && node2) {
      node.friends.forEach((e) => {
        if (node2.username === e) {
          temp.push(e);
          temp2.push("break");
          return 0;
        }

        let a = list.find((element) => element.username === e);
        temp2.push(a.name);

        var newNode = list.find((ee) => ee.username === e);

        return recursion(newNode);
      });
      if (temp.length === 0) {
        temp2 = [];
      }
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    node1 = list.find((e) => e.name === input1);
    node2 = list.find((e) => e.name === input2);

    temp = [];
    temp2 = [];
    recursion(node1);

    setTemp2State(temp2);
    if (temp.length === 0) {
      setErrorMessage("Couldn't find data");
    } else {
      setBool(true);
    }
  };

  console.log(temp2State);

  var len = temp2State.length;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ fontSize: "30px", padding: "10px" }}> Select 2 people</div>
      <br />
      <Form.Control
        style={{ width: "200px" }}
        placeholder="First Person"
        type="text"
        onClick={() => {
          setBool(false);
          setErrorMessage(null);
        }}
        onChange={(e) => setInput1(e.target.value)}
      ></Form.Control>
      <br />
      <Form.Control
        style={{ width: "200px" }}
        placeholder="Second Person"
        type="text"
        onClick={() => {
          setBool(false);
          setErrorMessage(null);
        }}
        onChange={(e) => setInput2(e.target.value)}
      ></Form.Control>
      <br />
      <Button variant="primary" onClick={onClickHandler}>
        Check Relation
      </Button>
      <br />
      {errorMessage && errorMessage}
      {bool && temp2State.length !== 0 && input1 + "->"}
      {bool &&
        temp2State.length !== 0 &&
        temp2State.map((e, i) => {
          if (e === "break") {
            if (len - 1 === i) {
              return (
                <div key={i}>
                  {input2}
                  <br />
                  <br />
                </div>
              );
            } else {
              return (
                <div key={i}>
                  {input2}
                  <br />
                  <br />
                  {input1}
                  {"->"}
                </div>
              );
            }
          }
          return (
            <div key={i}>
              {e}
              {"->"}
            </div>
          );
        })}
    </div>
  );
}
