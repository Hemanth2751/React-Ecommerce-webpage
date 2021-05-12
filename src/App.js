import './App.css';
import React from 'react';
import Header from './Components/Header';
import Product from './Components/Product'
// import Box from './Components/Product-Box/Box'
import {BrowserRouter as Router} from 'react-router-dom';
import Route from  'react-router-dom/Route';


function App(){
return(
  <Router>
  <div className='App'>
    
    <Route path='/Header' component={Header} />
    <Route path='/Product'exact component={Product} />
  </div>
  </Router>
);
}

export default App;
