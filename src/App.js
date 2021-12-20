import React from "react";
import {
  Route
} from "react-router-dom";
import { Header } from './components';
import { Cart, Home } from './pages';


function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" element={<Home />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </div>
    </div>
  );
}

export default App;
