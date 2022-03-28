import React, { Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "../../components/Form/Form.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import authService from "../Authentication/AuthService";
import { useLocation, Redirect } from "react-router-dom";

const OrderForm = (props) => {
  const handle = useLocation();
  const [isloggedin, setIsloggedin] = useState(false);
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

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Customer)
      .fetchAll()
      .then((res) => {
        let customer = [
          {
            id: res.data.address.addressID,
            street: res.data.address.street,
            city: res.data.address.city,
            housenumber: res.data.address.houseNumber,
            postal: res.data.address.postalAddress,
            flat: res.data.address.flatNumber,
            name: res.data.name,
            lastname: res.data.lastName,
            phone: res.data.phone,
            email: res.data.email,
            customerid: res.data.customerID,
          },
        ];
        setAddress(customer);
      })
      .catch((err) => {
        setAddressError(true);
        console.log(err);
      });
  }, isloggedin);

  const addRepair = (data) => {
    const customer = address.map((id) => id.customerid).toString();
    let repair = {
      repairID: 0,
      modelID: handle.modelid,
      shippingMetodID: handle.shippingid,
      customerID: customer,
      defectID: handle.defectid,
      statusID: 1,
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
          {address.map((address) => (
            <form
              key={address.id}
              className={classes.form}
              onSubmit={handleSubmit(addRepair)}
            >
              <h2 className={classes.Header}>Sprawdź dane:</h2>
              <input
                readOnly="readOnly"
                placeholder="Imię:"
                defaultValue={address.name}
                id="firstName"
                {...register("firstName", { required: true })}
              />

              <input
                readOnly="readOnly"
                id="lastName"
                defaultValue={address.lastname}
                placeholder="Nazwisko:"
                {...register("lastName", { required: true })}
              />

              <input
                readOnly="readOnly"
                placeholder="Email:"
                id="email"
                defaultValue={address.email}
                {...register("email", { required: true })}
              />

              <input
                readOnly="readOnly"
                placeholder="Numer telefonu:"
                id="phone"
                defaultValue={address.phone}
                {...register("phone", { required: true })}
              />

              <input
                readOnly="readOnly"
                placeholder="Ulica:"
                id="street"
                defaultValue={address.street}
                {...register("street", { required: true })}
              />

              <input
                readOnly="readOnly"
                placeholder="Nr domu:"
                id="housenumber"
                defaultValue={address.housenumber}
                {...register("housenumber", { required: true })}
              />

              <input
                readOnly="readOnly"
                placeholder="Nr mieszkania:"
                id="flatnumber"
                defaultValue={address.flat}
                {...register("flatnumber")}
              />

              <input
                placeholder="Miasto:"
                readOnly="readOnly"
                id="city"
                defaultValue={address.city}
                {...register("city", { required: true })}
              />

              <input
                placeholder="Kod pocztowy:"
                readOnly="readOnly"
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

              {errors.exampleRequired && <span>This field is required</span>}
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
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default OrderForm;
