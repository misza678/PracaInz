import React, { Fragment, useState } from "react";
import classes from "./MyAccountSection.module.css";
import { useForm } from "react-hook-form";
import { createApiEndpoint, ENDPOINTS } from "../../api";

const MyAccountSectionNoData = (props) => {
  const [success, setSuccess] = useState(false);

  const AddAddress = (data) => {
    let newaddress = {
      addressID: 0,
      city: data.city,
      postalAddress: data.postaladdress,
      street: data.street,
      houseNumber: data.housenumber,
      flatNumber: data.flatnumber,
    };

    createApiEndpoint(ENDPOINTS.Address)
      .create(newaddress)
      .then((response) => {
        let Customer = {
          customerId: 0,
          name: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          addressID: response.data.addressID,
        };
        createApiEndpoint(ENDPOINTS.Customer)
          .create(Customer)
          .then((res) => {
            setSuccess(true);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Fragment>
      <div className={classes.FormContainer}>
        {success ? <h1 className={classes.Header}>Adres zmieniony</h1> : null}
        <h1>Uzupełnij dane do wysyłki</h1>
        <form onSubmit={handleSubmit(AddAddress)}>
          <input
            placeholder="Imię:"
            id="firstName"
            {...register("firstName", { required: true })}
          />

          <input
            id="lastName"
            placeholder="Nazwisko:"
            {...register("lastName", { required: true })}
          />

          <input
            placeholder="Email:"
            id="email"
            {...register("email", { required: true })}
          />

          <input
            placeholder="Numer telefonu:"
            id="phone"
            {...register("phone", { required: true })}
          />

          <input
            placeholder="Ulica:"
            id="street"
            {...register("street", { required: true })}
          />

          <input
            placeholder="Nr domu:"
            id="housenumber"
            {...register("housenumber", { required: true })}
          />

          <input
            placeholder="Nr mieszkania:"
            id="flatnumber"
            {...register("flatnumber")}
          />

          <input
            placeholder="Miasto:"
            id="city"
            {...register("city", { required: true })}
          />

          <input
            placeholder="Kod pocztowy:"
            id="postaladdress"
            {...register("postaladdress", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default MyAccountSectionNoData;
