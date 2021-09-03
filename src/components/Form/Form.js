import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import classes from '../../components/Form/Form.Module.css';
import { createApiEndpoint, ENDPOINTS } from "../../api";





const Form = (props) => {
  const { whichconsole, whichshipping, whichdefect } = props;
  const { register, handleSubmit, formState: { errors } } = useForm();




  const addRepair = data => {
    let repair = {
      RepairId: 0,
      ProductToViewId: whichconsole,
      ShippingMetodId: whichshipping,
      CustomerId: 0,
      Customer: {
        customerId: 0,
        name: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        addressID: 0,
        address: {
          addressID: 0,
          city: data.city,
          postalAddress: data.postaladdress,
          street: data.street,
          houseNumber: data.housenumber,
          flatNumber: 0
        }
      },
      DefefectId: whichdefect,
      Price: 0,
      Description: "",
    }

    console.log(repair);
    createApiEndpoint(ENDPOINTS.Repair).create(repair).catch(err => console.log(err));
  }


  return (
    <Fragment>
      <div className={classes.container}>


        <h1>Uzupełnij dane adresowe:</h1>

        <form className={classes.form} onSubmit={handleSubmit(addRepair)}>

          <label htmlFor="firstName">Imię:</label>
          <input id="firstName" {...register("firstName", { required: true })} />

          <label htmlFor="lastName">Nazwisko:</label>
          <input id="lastName" {...register("lastName", { required: true })} />

          <label htmlFor="email">Email:</label>
          <input id="email" {...register("email", { required: true })} />

          <label htmlFor="phone">Numer telefonu:</label>
          <input id="phone" {...register("phone", { required: true })} />

          <label htmlFor="street">Ulica:</label>
          <input id="street" {...register("street", { required: true })} />

          <label htmlFor="housenumber">Nr domu:</label>
          <input id="housenumber" {...register("housenumber", { required: true })} />

          <label htmlFor="flatnumber">Nr mieszkania:</label>
          <input id="flatnumber" {...register("flatnumber")} />

          <label htmlFor="city">Miasto:</label>
          <input id="city" {...register("city", { required: true })} />

          <label htmlFor="postaladdress">Kod pocztowy:</label>
          <input id="postaladdress" {...register("postaladdress", { required: true })} />



          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </Fragment>
  );

}
export default Form;