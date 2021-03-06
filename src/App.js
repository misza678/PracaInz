import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AboutUsWrapper from "./components/AboutUs/AboutUsWrapper";
import ConsoleWrapper from "./components/ConsoleRepair/ConsoleWrapper";
import OrderForm from "./components/Form/OrderFormWrapper";
import controllerwrapper from "./components/ControllerRepair/controllerWrapper";
import Contactus from "./components/ContactUs/ContactUs";
import CollectionCentreWrapper from "./components/CollectionCentre/CollectionCentreWrapper";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import MyAccount from "./components/MyAccount/MyAccountWrapper";
import Employee from "./components/Employee/Employee";
import Details from "./components/Employee/OrderDetails";
import MyaccountOrderDetails from "./components/MyAccount/MyAccountOrderDetails";
import CollectionForm from "./components/CollectionForm/CollectionFormWrapper";
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route exact path="/">
          <Redirect to="/StronaGlowna" />
        </Route>
        <Route path="/StronaGlowna" exact component={AboutUsWrapper} />
        <Route path="/konsole" exact component={ConsoleWrapper} />
        <Route path="/konsole/:mod" exact component={ConsoleWrapper} />
        <Route path="/form" exact component={OrderForm} />
        <Route path="/kontrolery" exact component={controllerwrapper} />
        <Route path="/kontrolery/:mod" exact component={controllerwrapper} />
        <Route path="/kontakt" exact component={Contactus} />
        <Route path="/skup" exact component={CollectionCentreWrapper} />
        <Route path="/skup/:mod" exact component={CollectionCentreWrapper} />
        <Route path="/konto" exact component={MyAccount} />
        <Route path="/konto/:mod" exact component={MyAccount} />
        <Route path="/login" exact component={Login} />
        <Route path="/rejestracja" exact component={Register} />
        <Route path="/pracownik/szczegoly" exact component={Details} />
        <Route path="/szczegoly" exact component={MyaccountOrderDetails} />
        <Route path="/pracownik" exact component={Employee} />
        <Route path="/CollectionForm" exact component={CollectionForm} />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
