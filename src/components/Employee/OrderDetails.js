import React, { Fragment } from "react";
import classes from "../MyAccount/MyAccountSection.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import { useLocation } from "react-router-dom";

const OrderDetails = (props) => {
  const handle = useLocation();

  console.log(handle.table);
  const table = [handle.table];
  const statuses = [
    { StatusID: 1, name: "Nowe" },
    { StatusID: 2, name: "Zrealizowane" },
    { StatusID: 3, name: "W realizacji" },
  ];
  const handleChange = (e) => {
    let repair = {
      repairID: handle.table.repairID,
      modelID: handle.table.modelID,
      shippingMetodID: handle.table.shippingMetodID,
      customerID: handle.table.customer.customerID,
      defectID: handle.table.defectID,
      statusID: e.target.value,
      price: 0,
      description: handle.table.description,
    };
    createApiEndpoint(ENDPOINTS.Repair)
      .update(repair.repairID, repair)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

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
            <th>Zmień status</th>
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
              <td>
                <select value={item.StatusID} onChange={handleChange}>
                  {statuses.map((item) => {
                    return (
                      <option key={item.StatusID} value={item.StatusID}>
                        {item.name}
                      </option>
                    );
                  })}{" "}
                </select>
              </td>
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
