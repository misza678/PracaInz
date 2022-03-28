import React, { Fragment, useState, useEffect } from "react";
import classes from "../../components/Form/Form.module.css";
import authService from "../Authentication/AuthService";
import CollectionLoginIn from "./CollectionLoginIn";
import CollectionLoggedIn from "./CollectionLoggedIn";
import CollectionQuest from "./CollectionQuest";
const CollectionForm = (props) => {
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
          {isloggedin ? <CollectionLoggedIn /> : <CollectionQuest />}
        </div>
        {isloggedin ? null : (
          <CollectionLoginIn setIsloggedin={setIsloggedin} />
        )}
      </div>
    </Fragment>
  );
};

export default CollectionForm;
