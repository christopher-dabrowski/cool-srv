import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Layout/Header";
import NavigationDrawer from "./Layout/NavigationDrawer";
import Networks from "./Networks";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <main className="d-flex">
          <NavigationDrawer />
          <Networks className="flex-grow-1" />
        </main>

      </Router>
      Nice servers and happy admins.
    </div>
  );
}

export default App;
