import React, { Fragment, useState, useEffect } from "react";
import classes from "../../components/Form/Form.module.css";
import authService from "../Authentication/AuthService";
import OrderLoginIn from "./OrderLoginIn";
import OrderLoggedIn from "./OrderLoggedIn";
import OrderQuest from "./OrderQuest";
const OrderForm = (props) => {
  const [isloggedin, setIsloggedin] = useState(false);

  useEffect(() => {
    if (authService.getCurrentUser() !== null) {
      setIsloggedin(true);
    }
  }, []);
  useEffect(() => {
    authService.AuthVerify();
  }, []);

  return (
    <Fragment>
      <div className={classes.Container}>
        <div className={classes.FormContainer}>
          {isloggedin ? <OrderLoggedIn /> : <OrderQuest />}
        </div>
        {isloggedin ? null : <OrderLoginIn setIsloggedin={setIsloggedin} />}
      </div>
    </Fragment>
  );
};

export default OrderForm;
