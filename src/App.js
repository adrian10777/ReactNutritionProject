import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  // define state for my app using useState
  // const [<state_variable_name>, <setter function>] = useState(<initial_value>);
  const [foods, setFoods] = useState(['Strawberry', 'Blueberries', 'Oranges', 'Lemons']);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home foods={foods}/>}/>
        <Route path='/shop' element={<Shop />}/>
      </Routes>
    </div>
  );
}

export default App;
