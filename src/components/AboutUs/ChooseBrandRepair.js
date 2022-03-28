import classes from "../../components/AboutUs/ChooseBrandRepair.module.css";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import React, { Fragment, useState, useEffect } from "react";

const ChooseBrandRepair = (props) => {
  const [companieslist, setCompanieslist] = useState([]);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Companies)
      .fetchAll()
      .then((res) => {
        let companieslist = res.data.map((item) => ({
          id: item.companyID,
          name: item.name,
        }));
        setCompanieslist(companieslist);
      })
      .catch((err) => console.log(err));
  }, [companieslist === [0]]);

  return (
    <Fragment>
      <h1>Wybierz producenta konsoli:</h1>
      <div className={classes.CompanyContainer}>
        {companieslist.map((companies) => (
          <div key={companies.id} className={classes.Logo}>
            <a href={"/konsole/" + companies.name}>
              <img
                alt=""
                src={
                  require("../../Content/Images/" + companies.name + ".png")
                    .default
                }
              />
            </a>
            <h1>{companies.name}</h1>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ChooseBrandRepair;
