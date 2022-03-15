import React, { Fragment, useState, useEffect } from "react";
import classes from "./MyAccountSection.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";

const MyAccountSectionCollection = (props) => {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Collection)
      .fetchById(0)
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
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const getData = () => {};

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
              <button>Szczegóły</button>
            </tr>
          ))}
        </table>
      </div>
    </Fragment>
  );
};

export default MyAccountSectionCollection;
