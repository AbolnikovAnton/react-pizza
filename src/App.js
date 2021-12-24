import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes
} from "react-router-dom";
import { Header } from './components';
import { Cart, Home } from './pages';
import { createStore } from 'redux'



function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => setPizzas(data.pizzas))
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

let store = createStore(counterReducer)
store.subscribe(() => console.log(store.getState()))

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}


export default App;
