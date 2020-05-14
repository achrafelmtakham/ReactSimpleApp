import React from 'react';
import {Navbar,NavbarBrand} from "reactstrap"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar color="light" light expand="md">
          <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
