import React, { Fragment, useState, useEffect } from "react";
import classes from "./MyAccountSection.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import { Link } from "react-router-dom";
const MyAccountSectionCollection = (props) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.CollectionByID)
      .fetchAll()
      .then((res) => {
        let collection = res.data.map((item) => ({
          modelID: item.modelID,
          statusID: item.statusID,
          statusname: item.status.name,
          modelname: item.model.name,
          customer: item.customer,
          price: item.price,
          model: item.model,
        }));
        setCollection(collection);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      <div className={classes.TableContainer}>
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

export default MyAccountSectionCollection;
