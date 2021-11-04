import React, { useContext } from "react";
import { currentUserContext, listContext } from "../context";
import { Button } from "react-bootstrap";

export default function List() {
  const [list, setList] = useContext(listContext);
  const [loggedInUser, setLoggedInUser] = useContext(currentUserContext);

  const addToFriends = (element) => {
    let bool = false;
    loggedInUser.friends.forEach((e) => {
      if (element.username === e) {
        alert("Already added!");
        bool = true;
      }
    });
    if (bool) {
      return 0;
    }

    // changing data of logged in user locally
    let tempLoggedInUser = loggedInUser;
    tempLoggedInUser.friends.push(element.username);
    setLoggedInUser(tempLoggedInUser);

    // changing data of logged in user + added friend user in list
    let tempList = list;
    tempList.forEach((e) => {
      if (e.username === loggedInUser.username) {
        e.friends.push(element.username);
      }
    });

    setList(tempList);
    alert("Added to Friend List");
  };

  //remove loggedin user from the list of users to add
  const filteredList = list.filter(
    (element) => element.username !== loggedInUser.username
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{ fontSize: "30px", display: "flex", justifyContent: "center" }}
      >
        Add People to Your Friend List
      </div>
      {filteredList.map((element) => {
        return (
          <div
            key={element.username}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <br />
            <div style={{ fontSize: "20px", marginBottom: "-10px" }}>
              {element.name}
            </div>
            <Button
              style={{ width: "200px" }}
              onClick={() => addToFriends(element)}
            >
              Add Friend
            </Button>
          </div>
        );
      })}
    </div>
  );
}
