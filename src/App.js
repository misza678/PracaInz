
import './App.css';
import Header from './components/Layout/Header';
import React from 'react';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Consolewrapper from './components/ConsoleRepair/Consolewrapper';
import form from './components/Form/Form';
import controllerwrapper from './components/ControllerRepair/controllerWrapper';
import Contactus from'./components/ContactUs/ContactUs';
import CollectionCentre from'./components/CollectionCentre/CollectionCentre';


function App() {




  return (
    <Router>
      
        <Header />
        <Switch>
        
          <main>
            <Route path="/StronaGlowna" exact component={AboutUs} />
            <Route path="/konsole/:mod" exact component={Consolewrapper} />
            <Route path="/form" exact component={form} />
            <Route path="/kontrolery/:mod" exact component={controllerwrapper} />
            <Route path="/kontakt" exact component={Contactus} />
            <Route path="/skup" exact component={CollectionCentre} />
          </main>
        </Switch>
        <Footer />
      
    </Router>
  );
}

export default App;








