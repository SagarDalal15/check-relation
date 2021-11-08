import React, { createContext, useState } from "react";

export const currentUserContext = createContext();
export const listContext = createContext();

// list of all the people with their friends
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

  return (
    <listContext.Provider value={[list, setList]}>
      {children}
    </listContext.Provider>
  );
};

// current logged in user.
export const CurrentUserContextProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "",
    name: "",
    friends: [],
  });

  return (
    <currentUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {children}
    </currentUserContext.Provider>
  );
};
