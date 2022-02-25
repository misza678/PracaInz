import React, { Fragment, useState, useEffect } from "react";
import classes from "./MyAccountSection.module.css";
import { useForm } from "react-hook-form";
import { createApiEndpoint, ENDPOINTS } from "../../api";

const MyAccountSection = (props) => {
  const type = props.type;
  console.log(type);

  const [address, setAddress] = useState([]);
  const editAddress = (data) => {
    const customer = address.map((id) => id.customerid).toString();
    const adressid = address.map((id) => id.id).toString();
    let Customer = {
      customerId: customer,
      name: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      addressID: adressid,
    };
    let newaddress = {
      addressID: adressid,
      city: data.city,
      postalAddress: data.postaladdress,
      street: data.street,
      houseNumber: data.housenumber,
      flatNumber: data.flatnumber,
    };
    createApiEndpoint(ENDPOINTS.Customer)
      .update(customer, Customer)
      .then((response) => {
        console.log(response.data.token);
      })
      .catch((err) => console.log(err));

    createApiEndpoint(ENDPOINTS.Address)
      .update(adressid, newaddress)
      .then((response) => {
        console.log(response.data.token);
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
        console.log(err);
      });
  }, address === 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Fragment>
      <section className={classes.MainSection}>
        {type === "naprawy" ? (
          <div className={classes.Container}>sdf</div>
        ) : null}
        {type === "skup" ? <div className={classes.Container}></div> : null}
        {type === "wysylka" ? (
          <div className={classes.FormContainer}>
            <h1>Uzupełnij dane do wysyłki</h1>
            {address.map((address) => (
              <form onSubmit={handleSubmit(editAddress)}>
                <input
                  placeholder="Imię:"
                  defaultValue={address.name}
                  id="firstName"
                  {...register("firstName", { required: true })}
                />

                <input
                  id="lastName"
                  defaultValue={address.lastname}
                  placeholder="Nazwisko:"
                  {...register("lastName", { required: true })}
                />

                <input
                  placeholder="Email:"
                  id="email"
                  defaultValue={address.email}
                  {...register("email", { required: true })}
                />

                <input
                  placeholder="Numer telefonu:"
                  id="phone"
                  defaultValue={address.phone}
                  {...register("phone", { required: true })}
                />

                <input
                  placeholder="Ulica:"
                  id="street"
                  defaultValue={address.street}
                  {...register("street", { required: true })}
                />

                <input
                  placeholder="Nr domu:"
                  id="housenumber"
                  defaultValue={address.housenumber}
                  {...register("housenumber", { required: true })}
                />

                <input
                  placeholder="Nr mieszkania:"
                  id="flatnumber"
                  defaultValue={address.flat}
                  {...register("flatnumber")}
                />

                <input
                  placeholder="Miasto:"
                  id="city"
                  defaultValue={address.city}
                  {...register("city", { required: true })}
                />

                <input
                  placeholder="Kod pocztowy:"
                  id="postaladdress"
                  defaultValue={address.postal}
                  {...register("postaladdress", { required: true })}
                />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
              </form>
            ))}
          </div>
        ) : null}
      </section>
    </Fragment>
  );
};

export default MyAccountSection;
