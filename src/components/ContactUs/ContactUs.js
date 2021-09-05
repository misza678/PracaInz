import React, { Fragment } from "react";
import classes from '../ContactUs/ContactUs.module.css';
import { useForm } from "react-hook-form";

const ContactUs = props=>
{
    const { register, handleSubmit, formState: { errors } } = useForm();


return <Fragment>
 <h1 className={classes.header}>Skontaktuj się z nami:</h1>
    <div className={classes.container}>
   
    <form className={classes.form} onSubmit={handleSubmit()}>
        <div className={classes.name}>
            <fieldset>
          <label htmlFor="firstName">Imię<span className={classes.star}>*</span></label>
          <input id="firstName" {...register("firstName", { required: true })} />
          </fieldset>
          <fieldset>
          <label htmlFor="lastName">Nazwisko<span className={classes.star}>*</span></label>
          <input id="lastName" {...register("lastName", { required: true })} />
          </fieldset>
          </div>
          <fieldset>
          <label htmlFor="email">Email<span className={classes.star}>*</span></label>
          <input id="email" {...register("email", { required: true })} />
          </fieldset>
          <fieldset>
          <label htmlFor="text">Wiadomość<span className={classes.star}>*</span></label>
          <textarea  id="text" {...register("text", { required: true })} />
          </fieldset>


          {errors.exampleRequired && <span>This field is required</span>}

          <input className={classes.button} type="submit" value="Wyślij wiadomość" />
        </form>
    <div className={classes.Info}>
<h1>asdasd</h1>
    </div>
    </div>
</Fragment>


}

export default ContactUs;