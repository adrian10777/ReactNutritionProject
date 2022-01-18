import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Socialmedia from './components/socialmedia';
import Footer from './components/Footer';
import Home from './views/Home';
import Services from './views/Services';
import Blogs from './views/Blogs';
import About from './views/About';
import Donate from './views/Donate';

const App = () => {
  // define state for my app using useState
  // const [<state_variable_name>, <setter function>] = useState(<initial_value>);
  // DO NOT DIRECTLY MUTATE STATE (aka dont directly redefine a state varaible)
  // always use the setter (in this case setfoods) to mutate state -> this will cause a rerender
  const [foods, setFoods] = useState(['Strawberry', 'Blueberries', 'Oranges', 'Lemons']);

  return (
    <div className="App">
      <Logo />
      <Navbar />

      

      <Routes>
        <Route path='/' element={<Home foods={foods} setFoods={setFoods}/>}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/blogs' element={<Blogs />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/donate' element={<Donate />}/>
      </Routes>

      <Socialmedia />
      <Footer />
    </div>

  );
}



export default App;
