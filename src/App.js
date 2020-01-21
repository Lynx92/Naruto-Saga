import React from "react";
import List from "./components/List";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Redirect from="/" to="/home" />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
