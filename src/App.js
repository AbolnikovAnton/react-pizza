import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import { Header } from './components';
import { Cart, Home } from './pages';


function App() {
  const [pizzas, setPizzas] = useState();

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((data) => data.json())
      .then(json => setPizzas(json))
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home items={pizzas} />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
    </div>
  );
}

export default App;
