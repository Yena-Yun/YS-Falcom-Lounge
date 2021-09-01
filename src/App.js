import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Roo from './pages/Roo';
import History from './pages/History';
import Goddesses from './pages/Goddesses';
import BoardList8 from './pages/ys8/BoardList8';
import Board8 from './pages/ys8/Board8';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/goddesses" exact component={Goddesses} />
        <Route path="/history" component={History} />
        <Route path="/boardlist8" exact component={BoardList8} />
        <Route path="/board8" exact component={Board8} />
        <Route path="/roo" component={Roo} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
