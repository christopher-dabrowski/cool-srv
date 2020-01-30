import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Layout/Header";
import NavigationDrawer from "./Layout/NavigationDrawer";
import Networks from "./Networks";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="d-flex">
          <NavigationDrawer />

          <main className="flex-grow-1 container">
            <Switch>
              <Route exact path="/">
                <Redirect to="/networks" />
              </Route>
              <Route path="/networks">
                <Networks />
              </Route>
            </Switch>
          </main>
        </div>

      </Router>
      Nice servers and happy admins.
    </div>
  );
}

export default App;
