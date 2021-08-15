
import './App.css';
import Header from './components/Layout/Header';
import React,{ Component, Fragment } from 'react';
import Footer from './components/Layout/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import ConsoleChoose from './components/ConsoleRepair/ConsoleChoose';






function App() {
  return (   
    <Router>  
      <div className={'body'}>
    
<Header />
<Switch>
  <main>
<Route path="/home" component={AboutUs}/> 
<Route path="/konsole" component={ConsoleChoose}/> 
</main>
</Switch>
<Footer />
     
    </div>  
    </Router>
  );
}

export default App;








