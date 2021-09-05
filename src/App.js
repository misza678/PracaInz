
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



function App() {




  return (
    <Router>
      <div className={'body'}>

        <Header />
        <Switch>
          <main>

            <Route path="/" exact component={AboutUs} />
            <Route path="/konsole/:mod" exact component={Consolewrapper} />
            <Route path="/form" exact component={form} />
            <Route path="/kontrolery/:mod" exact component={controllerwrapper} />
            <Route path="/kontakt" exact component={Contactus} />
          </main>
        </Switch>
        <Footer />

      </div>
    </Router>
  );
}

export default App;








