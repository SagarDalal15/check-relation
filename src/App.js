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
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={Login}
            />
            <Route exact path="/home" component={Home} />
            <Route exact path="/home/list" component={List} />
            <Route exact path="/home/friends" component={Friends} />
            <Route exact path="/home/friends/:id" component={UserProfile} />
            <Route
              exact
              path="/home/relation-check"
              component={RelationCheck}
            />
          </Switch>
        </BrowserRouter>
      </CurrentUserContextProvider>
    </ListContextProvider>
  );
}
