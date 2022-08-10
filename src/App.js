// import logo from './logo.svg';
// import './App.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CreateShopping from "./components/create-shopping.component";
import EditShopping from "./components/edit-shopping.component";
import ShoppingList from "./components/shopping-list.component";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Inventory Management System</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <a className="nav-item nav-link active" href="/">Todos </a>
              <a className="nav-item nav-link" href="/create">Create Todo</a>
            </div>
          </div>
        </nav>
        <br />
        <Routes>
          <Route path="/" exact element={<ShoppingList />} />
          <Route path="/edit/:id" element={<EditShopping />} />
          <Route path="/create" element={<CreateShopping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
