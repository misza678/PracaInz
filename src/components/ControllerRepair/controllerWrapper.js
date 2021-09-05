import React, { Fragment, Suspense, useRef, useState } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import { Link, scroller } from 'react-scroll';
import Console1Stage from '../ConsoleRepair/Console1Stage';
import Controller2Stage from '../ControllerRepair/Controller2Stage';
import logoimage from '../../Content/Images/playstationback.jpg';
import Console3Stage from '../ConsoleRepair/Console3Stage';
import Console4Stage from '../ConsoleRepair/Console4Stage';
import { useForm } from 'react-hook-form';
import { useParams } from "react-router-dom";
import Form from '../Form/Form'

const ControllerWrapper = props => {
  const [consoleid, setConsoleId] = useState(0);
  const [version, setversion] = useState(0);
  const [defect, setdefect] = useState(0);
  const [shipping, setshipping] = useState(0);
  let { mod } = useParams();
  const [firststep, setfirststep] = useState(false);
  const [secondstep, setsecondstep] = useState(false);
  const [thirdstep, setthirdstep] = useState(false);
  const [fourthstep, setfourthstep] = useState(false);
  return <Fragment>

    <div className={classes.wrapper}>

      <Console1Stage whichConsole={mod} setConsoleId={setConsoleId} setstep={setfirststep}/>
      {firststep? <Controller2Stage whichmodel={consoleid} setversion={setversion} setdefect={setdefect} categoryid={2} setstep={setsecondstep}/>:null}
      {secondstep?  <Console3Stage whichmodel={defect} setdefect={setdefect} setstep={setthirdstep} />:null}
      {thirdstep? <Console4Stage whichmodel={defect} setshipping={setshipping} setclass={setfourthstep}/>:null}
      {fourthstep?<Link to="/form"  whichconsole={version} whichdefect={defect} whichshipping={shipping} className={classes.nextStep}>Przejdź dalej</Link>:null}

    </div>



  </Fragment>





};

export default ControllerWrapper;