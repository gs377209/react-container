import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import { Button, Counter } from "components";

import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/button">Button</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="button" element={<Button>test</Button>} />
          <Route path="counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
