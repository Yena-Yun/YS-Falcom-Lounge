import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Roo from "./pages/Roo";
import History from "./pages/History";
import Goddesses from "./pages/Goddesses";
import Lacrimosa from "./pages/Lacrimosa";
import Monstrum from "./pages/Monstrum";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/goddesses" exact component={Goddesses} />
        <Route path="/lacrimosa" exact component={Lacrimosa} />
        <Route path="/monstrum" exact component={Monstrum} />
        <Route path="/roo" component={Roo} />
        <Route path="/history" component={History} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
