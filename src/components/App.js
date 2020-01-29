import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Layout/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

      </Router>
      Nice servers and happy admins.
    </div>
  );
}

export default App;
