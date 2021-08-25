
import './App.css';
import Header from './components/Layout/Header';
import React,{ Component, Fragment, useState } from 'react';
import Footer from './components/Layout/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Consolewrapper from './components/ConsoleRepair/Consolewrapper';






function App() {
const [consoleid,setConsoleId]=useState(0);




  return (   
    <Router>  
      <div className={'body'}>
    
<Header setConsoleId={setConsoleId}/>
<Switch>
  <main>
   
<Route path="/" exact component={AboutUs}/> 
<Route path="/konsole/playstation" exact component={Consolewrapper}/> 
</main>
</Switch>
<Footer />
     
    </div>  
    </Router>
  );
}

export default App;








