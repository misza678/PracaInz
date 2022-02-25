import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "../../components/Form/Form.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import authService from "../Authentication/AuthService";
import { Link, useLocation, Redirect } from "react-router-dom";
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
      console.log(isloggedin);
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
          {isloggedin
            ? address.map((address) => (
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(addRepair)}
                >
                  <h2 className={classes.Header}>Sprawdź dane:</h2>
                  <input
                    readonly="readonly"
                    placeholder="Imię:"
                    defaultValue={address.name}
                    id="firstName"
                    {...register("firstName", { required: true })}
                  />

                  <input
                    readonly="readonly"
                    id="lastName"
                    defaultValue={address.lastname}
                    placeholder="Nazwisko:"
                    {...register("lastName", { required: true })}
                  />

                  <input
                    readonly="readonly"
                    placeholder="Email:"
                    id="email"
                    defaultValue={address.email}
                    {...register("email", { required: true })}
                  />

                  <input
                    readonly="readonly"
                    placeholder="Numer telefonu:"
                    id="phone"
                    defaultValue={address.phone}
                    {...register("phone", { required: true })}
                  />

                  <input
                    readonly="readonly"
                    placeholder="Ulica:"
                    id="street"
                    defaultValue={address.street}
                    {...register("street", { required: true })}
                  />

                  <input
                    readonly="readonly"
                    placeholder="Nr domu:"
                    id="housenumber"
                    defaultValue={address.housenumber}
                    {...register("housenumber", { required: true })}
                  />

                  <input
                    readonly="readonly"
                    placeholder="Nr mieszkania:"
                    id="flatnumber"
                    defaultValue={address.flat}
                    {...register("flatnumber")}
                  />

                  <input
                    placeholder="Miasto:"
                    readonly="readonly"
                    id="city"
                    defaultValue={address.city}
                    {...register("city", { required: true })}
                  />

                  <input
                    placeholder="Kod pocztowy:"
                    readonly="readonly"
                    id="postaladdress"
                    defaultValue={address.postal}
                    {...register("postaladdress", { required: true })}
                  />
                  <textarea
                    id="description"
                    type="text"
                    placeholder="Opis usterki(opcjonalnie):"
                    {...register("description")}
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <div className={classes.Buttons}>
                    <button
                      className={classes.Edit}
                      onClick={() => {
                        setRedirect(true);
                      }}
                    >
                      Edytuj adres
                    </button>
                    <input type="submit" />
                  </div>
                </form>
              ))
            : null}
        </div>
        {addressError ? (
          <div className={classes.Login}>
            <h2>Masz konto? Zaloguj się!</h2>
            <div className={classes.FormContainer}>
              <form key={2} onSubmit={handleSubmit2(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  placeholder="Nazwa użytkownika"
                  {...register2("username")}
                />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                  placeholder="Hasło"
                  type="password"
                  {...register2("password", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
              <h2>
                Nie masz konta?{" "}
                <Link
                  to="/rejestracja"
                  style={{
                    color: "#378f7b",
                    textDecoration: "none",
                  }}
                >
                  Zarejestruj się!
                </Link>
              </h2>
            </div>
          </div>
        ) : null}{" "}
      </div>
    </Fragment>
  );
};

export default OrderForm;
