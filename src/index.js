import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import App from './App';
import Home from './Home';
import Sign from './Sign';
import Login from './Login';
import Otp from './Otp';
import Passrecovery from './Passrecovery';
import {BrowserRouter as Router , Routes ,Route, useHistory} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <Router>
  <Routes>
 <Route exact path="/Home" element={<Home/>}/>
 <Route path="/Sign" element={<Sign/>}/>
 <Route path="/Login" element={<Login/>}/>
 <Route path="/Passrecovery" element={<Passrecovery/>}/>
 <Route path="/Otp" element={<Otp/>}/>
    </Routes></Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
