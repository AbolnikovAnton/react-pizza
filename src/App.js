import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Route,
  Routes
} from "react-router-dom";
import { Header } from './components';
import { Cart, Home } from './pages';
import pizzas from './redux/reducers/pizzas';
import { setPizzas } from './redux/actions/pizzas';



function App({ items }) {
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => dispatch(setPizzas(data.pizzas)))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home items={items} />} exact />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
    </div>
  );
}

export default App;
