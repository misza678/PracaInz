import React, { Fragment, useState, useEffect } from "react";
import classes from "../MyAccount/MyAccountSection.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import { Link } from "react-router-dom";
const EmployeeRepairs = (props) => {
  const [repairs, setRepairs] = useState([]);
  const [collection, setCollection] = useState([]);
  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Repair)
      .fetchAll()
      .then((res) => {
        let repairs = res.data.map((item) => ({
          modelID: item.modelID,
          repairID: item.repairID,
          statusID: item.statusID,
          statusname: item.status.name,
          modelname: item.model.name,
          customer: item.customer,
          price: item.price,
          model: item.model,
          shippingMetodID: item.shippingMetodID,
          defectID: item.defectID,
        }));
        setRepairs(repairs);
        console.log(repairs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Collection)
      .fetchAll()
      .then((res) => {
        let collection = res.data.map((item) => ({
          modelID: item.modelID,
          repairID: item.repairID,
          statusID: item.statusID,
          statusname: item.status.name,
          modelname: item.model.name,
        }));
        setCollection(collection);
        console.log(collection);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <div className={classes.TableContainer}>
        <h1 className={classes.Header}>Aktualne naprawy</h1>
        <table className={classes.styledtable}>
          <tr>
            <th>Nazwa przedmiotu</th>
            <th>Aktualny status</th>
          </tr>

          {repairs.map((item) => (
            <tr key={item.repairID}>
              <td>{item.modelname}</td>
              <td>{item.statusname}</td>
              <Link
                className={classes.button}
                to={{
                  pathname: "/szczegoly",
                  table: item,
                }}
              >
                Przejdź dalej
              </Link>
            </tr>
          ))}
        </table>

        <h1 className={classes.Header}>Aktualne wyceny</h1>
        <table className={classes.styledtable}>
          <tr>
            <th>Nazwa przedmiotu</th>
            <th>Aktualny status</th>
          </tr>

          {collection.map((item) => (
            <tr key={item.repairID}>
              <td>{item.modelname}</td>
              <td>{item.statusname}</td>
              <Link
                className={classes.button}
                to={{
                  pathname: "/szczegoly",
                  table: item,
                }}
              >
                Przejdź dalej
              </Link>
            </tr>
          ))}
        </table>
      </div>
    </Fragment>
  );
};

export default EmployeeRepairs;
