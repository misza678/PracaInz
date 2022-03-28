import React, { Fragment } from "react";
import classes from "./MyAccountSection.module.css";
import MyAccountSectionRepairs from "./MyAccountRepairs";
import MyAccountSectionCollection from "./MyAccountCollection";
import MyAccountAddressWrapper from "./MyAccountAddressWrapper";
const MyAccountSection = (props) => {
  const type = props.type;

  return (
    <Fragment>
      <section className={classes.MainSection}>
        {type === "naprawy" ? <MyAccountSectionRepairs /> : null}
        {type === "skup" ? <MyAccountSectionCollection /> : null}
        {type === "wysylka" ? <MyAccountAddressWrapper /> : null}
      </section>
    </Fragment>
  );
};

export default MyAccountSection;
