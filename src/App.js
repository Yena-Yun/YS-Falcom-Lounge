import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Roo from "./pages/Roo";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/roo" component={Roo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
