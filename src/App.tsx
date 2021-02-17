import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button, Counter } from "components";

import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <div className="app">
              <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="app-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>
          <Route path="/button">
            <Button>test</Button>
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
