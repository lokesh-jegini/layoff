import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routedata from './Routedata';
import Navbar from "./components/navbar/Navbar"
import "./designsystem/reset.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Routedata/>
  <Navbar/>
  </React.StrictMode>
);


reportWebVitals();
