import React, { Fragment, useState, useEffect } from "react";
import classes from "./MyAccountSection.module.css";
import { useForm } from "react-hook-form";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import MyAccountNoData from "./MyAccountNoData";
import MyAccountSectionRepairs from "./MyAccountRepairs";
import MyAccountSectionCollection from "./MyAccountCollection";
const MyAccountSection = (props) => {
  const type = props.type;

  return (
    <Fragment>
      <section className={classes.MainSection}>
        {type === "naprawy" ? <MyAccountSectionRepairs /> : null}
        {type === "skup" ? <MyAccountSectionCollection /> : null}
        {type === "wysylka" ? <MyAccountNoData /> : null}
      </section>
    </Fragment>
  );
};

export default MyAccountSection;
