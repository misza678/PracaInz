import React, { Fragment, useState, useEffect } from "react";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import classes from "../../components/ConsoleRepair/ConsoleChoose.module.css";

const ProductChoose = (props) => {
  const { whichConsole, setProductID, setStep, classChange } = props;

  const [consoleList, setconsoleList] = useState([]);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Product)
      .fetchById(whichConsole)
      .then((res) => {
        let consoleList = res.data.map((item) => ({
          id: item.productID,
          consolename: item.name,
          image: item.photoSRC,
        }));
        setconsoleList(consoleList);
      })
      .catch((err) => console.log(err));
  }, [whichConsole > 0]);
  return (
    <Fragment>
      <div
        className={
          classChange ? classes.container_consoleCC : classes.container_console
        }
      >
        <div className={classChange ? classes.h1CC : classes.container_h1}>
          {classChange ? null : <h1>Wybierz swoją konsole!</h1>}
        </div>
        {classChange ? null : (
          <hr className={classChange ? classes.marginCC : classes.margin}></hr>
        )}
        <div className={classChange ? classes.menuCC : classes.menu}>
          {consoleList.map((product) => (
            <div
              key={product.id}
              className={classChange ? classes.blockCC : classes.block}
            >
              <a
                onClick={() => {
                  setProductID(product.id);
                  setStep(true);
                }}
              >
                <img
                  src={
                    require("../../Content/Images/LogoForNavConsole/" +
                      product.image +
                      ".jpg").default
                  }
                />
                <h3
                  className={
                    classChange ? classes.console_nameCC : classes.console_name
                  }
                >
                  {product.consolename}
                </h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductChoose;
