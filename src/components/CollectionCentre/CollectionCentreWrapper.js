import { Fragment, useState } from "react";
import ProductChoose from "../ConsoleRepair/ProductChoose";
import classes from "../CollectionCentre/CollectionCentreWrapper.module.css";
import CollectionCentreWithController from "./CollectionCentreWithController";
import CollectionCentreCategory from "../CollectionCentre/CollectionCentreCategory";
import CollectionCentreCompany from "../CollectionCentre/CollectionCentreCompany";
import CollectionCentreControllers from "./CollectionCentreControllers";
import CollectionCentreForm from "../CollectionCentre/CollectionCentreForm";

const CollectionCentre = (props) => {
  const [firststep, setFirstStep] = useState(false);
  const [secondstep, setSecondStep] = useState(false);
  const [thirdstep, setStep] = useState(false);
  const [fourthstep, setFourthStep] = useState(false);
  const [company, setCompany] = useState();
  const [category, setCategoryId] = useState();
  const [mod, setmod] = useState();
  const [consoleid, setConsoleId] = useState(0);
  const [withController, setwithController] = useState(false);
  return (
    <Fragment>
      <div className={classes.SectionWrapper}>
        <CollectionCentreCategory
          setCategoryId={setCategoryId}
          setFirstStep={setFirstStep}
        />
        {firststep ? (
          <CollectionCentreCompany
            setCompany={setCompany}
            setSecondStep={setSecondStep}
          />
        ) : null}
        {secondstep ? (
          <ProductChoose
            whichConsole={company}
            setConsoleId={setConsoleId}
            setStep={setStep}
            classChange={true}
          />
        ) : null}
        {thirdstep & (category == 1) ? (
          <CollectionCentreWithController
            setwithController={setwithController}
            setFourthStep={setFourthStep}
          />
        ) : null}
        {thirdstep & (category == 2) ? (
          <CollectionCentreControllers
            whichmodel={consoleid}
            categoryid={category}
            classChange={true}
            setFourthStep={setFourthStep}
          />
        ) : null}
        {fourthstep ? (
          <CollectionCentreForm
            whichmodel={consoleid}
            withController={withController}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default CollectionCentre;
