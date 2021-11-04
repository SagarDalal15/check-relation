import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import { currentUserContext } from "../context";
import "./home.css";

export default function Home() {
  const history = useHistory();

  const [loggedInUser, setLoggedInUser] = useContext(currentUserContext);

  const showList = (e) => {
    e.preventDefault();
    history.push("/home/list");
  };

  const goToRelationCheck = (e) => {
    e.preventDefault();
    history.push("/home/relation-check");
  };
  const goToFriends = (e) => {
    e.preventDefault();
    history.push("/home/friends");
  };

  if (!loggedInUser) {
    history.push("/");
  } else {
    return (
      <div>
        ID: {loggedInUser.username}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "30px",
          }}
        >
          Logged In User: {loggedInUser.name}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            justifyContent: "center",
          }}
        >
          <div className="btn">
            <div
              style={{
                padding: "20px",
                height: "250px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Click here to view the list of people.
              <img
                style={{ width: "100%" }}
                src="https://image.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg"
                alt="List of people"
              />
            </div>
            <Button variant="primary" onClick={showList}>
              Show List
            </Button>
          </div>
          <div className="btn">
            <div
              style={{
                padding: "20px",
                height: "250px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Click here to see my friend list.
              <img
                style={{ width: "100%" }}
                src="https://us.123rf.com/450wm/lovedoodle/lovedoodle1707/lovedoodle170700005/81500339-group-of-children-and-a-dog-holding-letters-saying-friends-cute-diverse-cartoon-illustration-of-litt.jpg?ver=6"
                alt="List of people"
              />
            </div>
            <Button variant="primary" onClick={goToFriends}>
              Go to Friends
            </Button>
          </div>
          <div className="btn">
            <div
              style={{
                padding: "20px",
                height: "250px",
                width: "350px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              Click here to check the relations of people.
              <img
                style={{ width: "100%", height: "210px" }}
                src="https://thumbs.dreamstime.com/b/people-happy-couple-cartoon-relationship-characters-lifestyle-vector-illustration-relaxed-friends-group-adult-together-95169766.jpg"
                alt="List of people"
              />
            </div>
            <Button variant="primary" onClick={goToRelationCheck}>
              Check Relation
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
