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
import Blog1 from './views/Blog1';
import About from './views/About';
import Donate from './views/Donate';
import Cart from './views/Cart';


const App = () => {
  // define state for my app using useState
  // const [<state_variable_name>, <setter function>] = useState(<initial_value>);
  // DO NOT DIRECTLY MUTATE STATE (aka dont directly redefine a state varaible)
  // always use the setter (in this case setfoods) to mutate state -> this will cause a rerender
  const [foods, setFoods] = useState(['Strawberry', 'Blueberries', 'Oranges', 'Lemons']);


  // cart state hook -> creation of our initial cart
  const [cart, setCart] = useState({
    total: 0,
    size: 0,
    items: {}
  })

  return (
    <div className="App">
      <Logo />
      <Navbar cart={cart} />



      <Routes>
        <Route children path='/' element={<Home foods={foods} setFoods={setFoods}/>}/>
        <Route children path='/services' element={<Services cart={cart} setCart={setCart} />}/>
        <Route children path='/blogs' element={<Blogs />}/>
        <Route children path='/blog1' element={<Blog1 />}/>
        <Route children path='/about' element={<About />}/>
        <Route children path='/donate' element={<Donate />}/>
        <Route children path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>

      <Socialmedia />
      <Footer />
    </div>

  );
}



export default App;

// under line for donate <Route children path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>