import React, { Fragment, useState } from "react";
import classes from "./MyAccountSection.module.css";
import { useForm } from "react-hook-form";
import { createApiEndpoint, ENDPOINTS } from "../../api";

const MyAccountEditAddress = (props) => {
  const [success, setSuccess] = useState(false);
  const { useraddress } = props;

  const AddAddress = (data) => {
    let newaddress = {
      addressID: useraddress.map((item) => item.addressID).toString(),
      city: data.city,
      postalAddress: data.postaladdress,
      street: data.street,
      houseNumber: data.housenumber,
      flatNumber: data.flatnumber,
    };

    createApiEndpoint(ENDPOINTS.Address)
      .update(useraddress.map((item) => item.addressID).toString(), newaddress)
      .then((response) => {
        let Customer = {
          customerId: useraddress.map((item) => item.customerid).toString(),
          name: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          addressID: useraddress.map((item) => item.addressID).toString(),
        };
        createApiEndpoint(ENDPOINTS.Customer)
          .update(
            useraddress.map((item) => item.customerid).toString(),
            Customer
          )
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
        {useraddress.map((address) => (
          <form className={classes.form} onSubmit={handleSubmit(AddAddress)}>
            <h2 className={classes.Header}>Edytuj adres:</h2>
            <input
              placeholder={address.name}
              id="firstName"
              {...register("firstName", { required: true })}
            />

            <input
              id="lastName"
              placeholder={address.lastname}
              {...register("lastName", { required: true })}
            />

            <input
              id="email"
              placeholder={address.email}
              {...register("email", { required: true })}
            />

            <input
              id="phone"
              placeholder={address.phone}
              {...register("phone", { required: true })}
            />

            <input
              id="street"
              placeholder={address.street}
              {...register("street", { required: true })}
            />

            <input
              id="housenumber"
              placeholder={address.housenumber}
              {...register("housenumber", { required: true })}
            />

            <input
              id="flatnumber"
              placeholder={address.flat}
              {...register("flatnumber")}
            />

            <input
              id="city"
              placeholder={address.city}
              {...register("city", { required: true })}
            />

            <input
              id="postaladdress"
              placeholder={address.postal}
              {...register("postaladdress", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        ))}
      </div>
    </Fragment>
  );
};

export default MyAccountEditAddress;
