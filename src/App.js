
import './App.css';
import Header from './components/Layout/Header';
import React from 'react';
import Footer from './components/Layout/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Consolewrapper from './components/ConsoleRepair/Consolewrapper';






function App() {




  return (   
    <Router>  
      <div className={'body'}>
    
<Header/>
<Switch>
  <main>
   
<Route path="/" exact component={AboutUs}/> 
<Route path="/konsole/:mod" exact component={Consolewrapper}/> 
</main>
</Switch>
<Footer />
     
    </div>  
    </Router>
  );
}

export default App;








