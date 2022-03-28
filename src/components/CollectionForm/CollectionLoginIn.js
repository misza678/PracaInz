import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import classes from "../../components/Form/Form.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import { Link } from "react-router-dom";
const CollectionLoginIn = (props) => {
  const { setIsloggedin } = props;

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
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

  return (
    <Fragment>
      <div className={classes.Container}>
        <div className={classes.FormContainer}>
          <div className={classes.Login}>
            <h2>Masz konto? Zaloguj się!</h2>
            <div className={classes.FormContainer}>
              <form key={2} onSubmit={handleSubmit2(onSubmit)}>
                <input
                  placeholder="Nazwa użytkownika"
                  {...register2("username")}
                />
                <input
                  placeholder="Hasło"
                  type="password"
                  {...register2("password", { required: true })}
                />
                {errors2.exampleRequired && <span>This field is required</span>}

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
        </div>
      </div>
    </Fragment>
  );
};

export default CollectionLoginIn;
