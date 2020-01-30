import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "./Layout/Header";
import NavigationDrawer from "./Layout/NavigationDrawer";
import Networks from "./networks/Networks";
import Devices from "./Devices";
import Nat from "./Nat";
import Vlan from "./Vlan";
import MessagesDisplay from "./MessagesDisplay";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="d-flex">
          <NavigationDrawer />

          <main className="flex-grow-1 container">
            <MessagesDisplay />

            <Switch>
              <Route exact path="/">
                <Redirect to="/networks" />
              </Route>
              <Route path="/networks">
                <Networks />
              </Route>
              <Route path="/devices">
                <Devices />
              </Route>
              <Route path="/nat">
                <Nat />
              </Route>
              <Route path="/vlan">
                <Vlan />
              </Route>
            </Switch>
          </main>
        </div>

      </Router>

      <Footer />
    </div>
  );
}

export default App;
