import React, { Fragment } from "react";
import classes from "../MyAccount/MyAccountSection.module.css";
import { useLocation } from "react-router-dom";

const OrderDetails = (props) => {
  const handle = useLocation();
  const table = [handle.table];

  return (
    <Fragment>
      <div className={classes.TableContainer}>
        <h1 className={classes.Header}>Szczegóły</h1>
        <table className={classes.styledtable}>
          <tr>
            <th>Zdjęcie</th>
            <th>Nazwa przedmiotu</th>
            <th>Aktualny status</th>
            <th>Cena</th>
          </tr>

          {table.map((item) => (
            <tr key={item.repairID}>
              <td>
                <img
                  alt=""
                  width="200px"
                  src={
                    require("../../Content/Images/" +
                      item.model.photoSRC +
                      ".jpg").default
                  }
                />
              </td>
              <td>{item.modelname}</td>
              <td>{item.statusname}</td>
              <td>{item.price}</td>
            </tr>
          ))}
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Numer telefonu</th>
            <th>Adres email</th>
          </tr>
          {table.map((item) => (
            <tr key={item.repairID}>
              <td>{item.customer.name}</td>
              <td>{item.customer.lastName}</td>
              <td>{item.customer.phone}</td>
              <td>{item.customer.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </Fragment>
  );
};

export default OrderDetails;
