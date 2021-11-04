import React, { createContext, useState } from "react";

export const friendsContext = createContext();
export const currentUserContext = createContext();
export const listContext = createContext();

export function Friends({ children }) {
  const [friends, setFriends] = useState([]);

  return (
    <friendsContext.Provider value={(friends, setFriends)}>
      {children}
    </friendsContext.Provider>
  );
}

export const ListContextProvider = ({ children }) => {
  const [list, setList] = useState([
    {
      username: "sameer",
      name: "Sameer",
      friends: ["aayushi", "kamalnath"],
    },
    { username: "kamalnath", name: "Kamalnath Sharma", friends: ["shanti"] },
    { username: "aayushi", name: "Aayushi", friends: ["bhaskar"] },

    { username: "shanti", name: "Shanti Kumar", friends: ["bhaskar"] },
    { username: "bhaskar", name: "Bhaskar", friends: [] },
  ]);

  console.log("This is list");
  console.log(list);

  return (
    <listContext.Provider value={[list, setList]}>
      {children}
    </listContext.Provider>
  );
};

export const CurrentUserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "",
    name: "",
    friends: ["sameer"],
  });
  console.log("This is LoggedInUser");
  console.log(loggedInUser);

  return (
    <currentUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {children}
    </currentUserContext.Provider>
  );
};
