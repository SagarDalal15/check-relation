import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

import { currentUserContext, listContext } from "../context";

export default function Friends() {
  const [loggedInUser, setLoggedInUser] = useContext(currentUserContext);
  const [list, setList] = useContext(listContext);
  var temp = [];

  list.forEach((element) => {
    loggedInUser.friends.forEach((e) => {
      if (e === element.username) {
        temp.push(element.name);
      }
    });
  });

  const [friends, setFriends] = useState(temp);
  const [friendsUsername, setFriendsUsername] = useState(loggedInUser.friends);
  const history = useHistory();

  const btnHandler = (e, friend) => {
    e.preventDefault();
    history.push(`/home/friends/${friend}`);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ padding: "40px", fontSize: "30px" }}>Friend List</div>

      <div style={{ display: "flex" }}>
        <div style={{ paddingRight: "40px", paddingTop: "7px" }}>
          {friends.map((friend, idx) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  fontSize: "20px",
                  padding: "21px",
                }}
                key={idx}
              >
                {friend}
              </div>
            );
          })}
        </div>
        <div>
          {friendsUsername.map((friend) => (
            <div key={friend}>
              <Button
                style={{ margin: "18px 0px" }}
                varient="primary"
                onClick={(e) => btnHandler(e, friend)}
              >
                Change Relation
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
