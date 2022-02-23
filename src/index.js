import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProviderLayer from './ProviderLayer'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire'; // remember to install tslib alongside reactfire
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB-p7rGyEgrAFzm52L4_0aBd_omwNpHl8",
  authDomain: "sda-nutrition.firebaseapp.com",
  databaseURL: "https://sda-nutrition-default-rtdb.firebaseio.com",
  projectId: "sda-nutrition",
  storageBucket: "sda-nutrition.appspot.com",
  messagingSenderId: "999299793035",
  appId: "1:999299793035:web:1df55436b8f4d7343e548e",
  measurementId: "G-BFTTPR5K1N"
};


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <FirebaseAppProvider firebaseConfig = {firebaseConfig}>
      <ProviderLayer />
    </FirebaseAppProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
