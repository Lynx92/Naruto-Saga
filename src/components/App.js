import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "../styles/App.scss";
import Loader from "./presentations/Loader";
import HomePage from "./presentations/HomePage";
import Nav from "./presentations/Nav";
const DetailCont = lazy(() => import("./containers/DetailCont"));
const ListCont = lazy(() => import("./containers/ListCont"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router>
          <Nav />
          <Redirect from="/" to="/home" />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/list" component={ListCont} />
            <Route path="/detail/:id" component={DetailCont} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
