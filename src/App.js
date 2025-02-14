import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { useDatabase, useUser } from 'reactfire';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Socialmedia from './context/socialmedia';
import Footer from './components/Footer';
import Home from './views/Home';
import Services from './views/Services';
import Blogs from './views/Blogs';
import Blog1 from './views/Blog1';
import About from './views/About';
import Donate from './views/Donate';
import Cart from './views/Cart';
import ComingSoonBlog from './views/ComingSoonBlog';
import { get, child, ref, set } from 'firebase/database';
import Checkout from './views/Checkout';
import PaymentConfirmation from './components/PaymentConfirmation';
import { DataContext } from './context/DataProvider';
import SearchBar from './projectparts/SearchBar';
import SearchData from './Data.json'

const App = () => {


  const db = useDatabase();
  const { data: user } = useUser();
  const { checkoutSignin } = useContext(DataContext);

  // define state for my app using useState
  // const [<state_variable_name>, <setter function>] = useState(<initial_value>);
  // DO NOT DIRECTLY MUTATE STATE (aka dont directly redefine a state varaible)
  // always use the setter (in this case setfoods) to mutate state -> this will cause a rerender



  // cart state hook -> creation of our initial cart
  const [cart, setCart] = useState({
    total: 0,
    size: 0,
    items: {}
  })

  // 1. we have a situational check that we want to do -> if there is a change in a user status, ( sign in or sign out)
  //we then want to compare current cart to db cart, aka if user signs in grab old cart from db
  // if user signs out, do nothing 
  //useeffect hook with 2nd parameter [user] aka run the effect when there is a change in the user object
  useEffect(() => {
    if (checkoutSignin) {
      if (user) {
        set(ref(db, `carts/${user.uid}`), cart);
      }
    }
    else if (user) { // if there is a user logged in, check the db for a cart belonging to this user, then do some stuff to make the local state cart match the db cart 
      //how do we read our db? so far we've only written to it -> read docs
      get(child(ref(db), `carts/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val()); // instead of console log the snapshot's value -> lets set the cart state
          let dbcart = snapshot.val()
          // we need to make sure that cart.items exists
          if (!dbcart['items']) {
            dbcart['items'] = {};
          }
          setCart(dbcart);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      })
    }
  }, [user]);

  //2. anytime  we modify cart, if user signed in we must also modify db
  // modifiying the 5 functions that allow us to change cart state (shop.addToCart, cart.clearcart, cart.removeProgram, cart.decreaseOne, cart.increaseOne)

  return (
    <div className="App">
      <Logo />
      <Navbar cart={cart} />
      {/* <SearchBar placeholder="Search..." data={SearchData} /> */}
 


      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/services' element={<Services cart={cart} setCart={setCart} />} />
        <Route children path='/blogs' element={<Blogs />} />
        <Route children path='/blog1' element={<Blog1 />} />
        <Route children path='ComingSoonBlog' element={<ComingSoonBlog />} />
        <Route children path='/about' element={<About />} />
        {/* <Route children path='/donate' element={<Donate cart={cart} setCart={setCart} />} /> */}
        <Route children path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route children path='/checkout' element={<Checkout cart={cart} setCart={setCart} />} />
        <Route children path='/confirmation' element={<PaymentConfirmation cart={cart} setCart={setCart} />} />
      </Routes>

      <Socialmedia />
      <Footer />
    </div>

  );
}

export default App;

// under line for donate <Route children path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>