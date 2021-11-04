import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import List from "./components/List";
import Friends from "./components/Friends";
import UserProfile from "./components/UserProfile";
import RelationCheck from "./components/RelationCheck";
import { CurrentUserContextProvider, ListContextProvider } from "./context";

export default function App() {
  return (
    <ListContextProvider>
      <CurrentUserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <Login />} />
            <Route exact path="/home" render={(props) => <Home />} />
            <Route exact path="/home/list" render={(props) => <List />} />
            <Route exact path="/home/friends" render={(props) => <Friends />} />
            <Route
              exact
              path="/home/friends/:id"
              render={(props) => <UserProfile />}
            />
            <Route
              exact
              path="/home/relation-check"
              render={(props) => <RelationCheck />}
            />
          </Switch>
        </BrowserRouter>
      </CurrentUserContextProvider>
    </ListContextProvider>
  );
}
