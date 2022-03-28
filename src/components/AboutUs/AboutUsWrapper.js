import { Fragment, useEffect } from "react";
import Banner from "./Banner";
import ChooseBrandRepair from "./ChooseBrandRepair";
import WhyChooseUs from "./WhyChooseUs";
import classes from "./AboutUsWrapper.module.css";
import AboutCompany from "./AboutCompany";
import CollectionService from "./CollectionService";
import authService from "../Authentication/AuthService";
const AboutUs = (props) => {
  useEffect(() => {
    const odp = authService.AuthVerify();
    console.log(odp);
  });
  return (
    <Fragment>
      <section className={classes.MainSection}>
        <Banner />
        <ChooseBrandRepair />
        <AboutCompany />
        <WhyChooseUs />
        <CollectionService />
      </section>
    </Fragment>
  );
};

export default AboutUs;
