import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Base from "./Pages/Base";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Base} />
      </Switch>
    </BrowserRouter>
  );
}
