import React, { Fragment, Suspense, useRef, useState } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';

import Console1Stage from '../ConsoleRepair/Console1Stage';
import Console2Stage from '../ConsoleRepair/Console2Stage';
import logoimage from '../../Content/Images/playstationback.jpg';
import Console3Stage from '../ConsoleRepair/Console3Stage';
import Console4Stage from '../ConsoleRepair/Console4Stage';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import Form from '../Form/Form'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
const ConsoleWrapper = props => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [consoleid, setConsoleId] = useState(0);
  const [version, setversion] = useState(0);
  const [defect, setdefect] = useState(0);
  const [shipping, setshipping] = useState(0);
  const [firststep, setfirststep] = useState(false);
  const [secondstep, setsecondstep] = useState(false);
  const [thirdstep, setthirdstep] = useState(false);
  const [fourthstep, setfourthstep] = useState(false);
  console.log("numer konsoli " + consoleid);
  console.log("numer wersji " + version);
  console.log(defect);
  console.log(shipping);

  let { mod } = useParams();
  console.log(mod);

  return <Fragment>

    <div style={{
      backgroundImage: `url(${logoimage})`
    }} className={classes.wrapper}>

      <Console1Stage whichConsole={mod} setConsoleId={setConsoleId} setstep={setfirststep}/>
      {firststep? <Console2Stage whichmodel={consoleid} setversion={setversion} setdefect={setdefect} categoryid={1} setstep={setsecondstep} />:null}
      {secondstep?  <Console3Stage whichmodel={defect} setdefect={setdefect} setstep={setthirdstep} />:null}
      {thirdstep?  <Console4Stage whichmodel={defect} setshipping={setshipping} setclass={setfourthstep}   />:null}

{fourthstep?<Link to="/form"  whichconsole={version} whichdefect={defect} whichshipping={shipping} className={classes.nextStep}>Przejdź dalej</Link>:null}





    </div>



  </Fragment>





};

export default ConsoleWrapper;