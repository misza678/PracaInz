import React, { Fragment, Suspense, useRef, useState, useEffect } from "react";
import classes from "../../components/ConsoleRepair/ConsoleChoose.module.css";
import { Link } from "react-scroll";
import ProductChoose from "../ConsoleRepair/ProductChoose";
import Controller2Stage from "../ControllerRepair/Controller2Stage";
import DefectChoose from "../ConsoleRepair/DefectChoose";
import ShippingChoose from "../ConsoleRepair/ShippingChoose";
import { useParams } from "react-router-dom";
import ConsoleBrand from "./ControllerBrand";
const ControllerWrapper = (props) => {
  const [consoleid, setConsoleId] = useState(0);
  const [version, setversion] = useState(0);
  const [defect, setdefect] = useState(0);
  const [shipping, setshipping] = useState(0);
  let { mod } = useParams();
  const [zerostep, setzerostep] = useState(false);
  const [firststep, setfirststep] = useState(false);
  const [secondstep, setsecondstep] = useState(false);
  const [thirdstep, setthirdstep] = useState(false);
  const [fourthstep, setfourthstep] = useState(false);

  useEffect(() => {
    if ((mod === "Sony") | (mod === "Microsoft") | (mod === "Nintendo")) {
      setzerostep(true);
    }
  });
  return (
    <Fragment>
      <div className={classes.ConsoleBrand}>
        <ConsoleBrand />
      </div>
      <div className={classes.wrapper}>
        {zerostep ? (
          <ProductChoose
            whichConsole={mod}
            setConsoleId={setConsoleId}
            setStep={setfirststep}
          />
        ) : null}

        {firststep ? (
          <Controller2Stage
            whichmodel={consoleid}
            setversion={setversion}
            setdefect={setdefect}
            categoryid={2}
            setStep={setsecondstep}
          />
        ) : null}
        {secondstep ? (
          <DefectChoose
            whichmodel={defect}
            setdefect={setdefect}
            setStep={setthirdstep}
          />
        ) : null}
        {thirdstep ? (
          <ShippingChoose
            whichmodel={defect}
            setshipping={setshipping}
            setStep={setfourthstep}
          />
        ) : null}
        {fourthstep ? (
          <Link
            to="/form"
            whichconsole={version}
            whichdefect={defect}
            whichshipping={shipping}
            className={classes.nextStep}
          >
            Przejdź dalej
          </Link>
        ) : null}
      </div>
    </Fragment>
  );
};

export default ControllerWrapper;
