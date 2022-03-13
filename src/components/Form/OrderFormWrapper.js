import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "../../components/Form/Form.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import authService from "../Authentication/AuthService";
import { Link, useLocation, Redirect } from "react-router-dom";
import OrderLoginIn from "./OrderLoginIn";
import OrderQuest from "./OrderQuest";
const OrderForm = (props) => {
  const handle = useLocation();
  const [isloggedin, setIsloggedin] = useState(false);
  const [addressChange, setAddressChange] = useState(false);
  const [addressError, setAddressError] = useState(undefined);
  const [address, setAddress] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [repairSuccessful, setrepairSuccessful] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });
  const {
    register: register3,
    formState: { errors: errors3 },
    handleSubmit: handleSubmit3,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    let credentials = {
      username: data.username,
      password: data.password,
    };

    createApiEndpoint(ENDPOINTS.Login)
      .create(credentials)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          setIsloggedin(true);
        }
        return response.data;
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Customer)
      .fetchById(0)
      .then((res) => {
        let customer = res.data.map((item) => ({
          id: item.addressID,
          street: item.street,
          city: item.city,
          housenumber: item.houseNumber,
          postal: item.postalAddress,
          flat: item.flatNumber,
          name: item.name,
          lastname: item.lastName,
          phone: item.phone,
          email: item.email,
          customerid: item.customerID,
        }));
        setAddress(customer);
        console.log(address);
      })
      .catch((err) => {
        setAddressError(true);
        console.log(err);
      });
  }, isloggedin);

  const addRepair = (data) => {
    const customer = address.map((id) => id.customerid).toString();
    console.log(customer);
    let repair = {
      repairID: 0,
      productID: handle.modelid,
      shippingMetodID: handle.shippingid,
      customerID: customer,
      defectID: handle.defectid,
      price: 0,
      description: data.description,
    };
    createApiEndpoint(ENDPOINTS.Repair)
      .create(repair)
      .then((res) => {
        setrepairSuccessful(true);
        setIsloggedin(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (authService.getCurrentUser() !== null) {
      setIsloggedin(true);
    }
  }, []);
  useEffect(() => {
    authService.AuthVerify();
  }, []);

  if (redirect) {
    return <Redirect push to="/konto/wysylka" />;
  }
  return (
    <Fragment>
      <div className={classes.Container}>
        <div className={classes.FormContainer}>
          {repairSuccessful ? (
            <h1 className={classes.Header}>Zamówienie przyjęte</h1>
          ) : null}
          {isloggedin ? null : <OrderQuest />}
        </div>
        {addressError ? <OrderLoginIn setIsloggedin={setIsloggedin} /> : null}
      </div>
    </Fragment>
  );
};

export default OrderForm;
