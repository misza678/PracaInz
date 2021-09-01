import React, {Fragment,Suspense,useRef,useState} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link,scroller } from 'react-scroll';
import Console1Stage from '../ConsoleRepair/Console1Stage';
import Console2Stage from '../ConsoleRepair/Console2Stage';
import logoimage from '../../Content/Images/playstationback.jpg';
import Console3Stage from '../ConsoleRepair/Console3Stage';
import Console4Stage from '../ConsoleRepair/Console4Stage';
import {useForm} from 'react-hook-form';
import { useParams } from "react-router-dom";


const ConsoleChoose= props => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [consoleid,setConsoleId]=useState(0);
     const [version,setversion]=useState(0);
     const [defect,setdefect]=useState(0);
     const [shipping,setshipping]=useState(0);


     console.log("numer konsoli "+consoleid);
     console.log("numer wersji "+version);  







       
  
     console.log(defect);
     console.log(shipping);
    
    let {mod}=useParams();
  console.log(mod);



return <Fragment>
   
  <div style={{ 
      backgroundImage: `url(${logoimage})`
    }} className={classes.wrapper}>

      <Console1Stage whichConsole={mod} setConsoleId={setConsoleId} />
      <Console2Stage whichmodel={consoleid} setversion={setversion} setdefect={setdefect} />
      <Console3Stage whichmodel={defect} setdefect={setdefect}/>
      <Console4Stage whichmodel={defect} setshipping={setshipping}/>
      
<form onSubmit={handleSubmit()}>
    <label>
    
       
    </label>
     <button type="submit">Wyslij</button>
</form>


</div>



</Fragment>





};

export default ConsoleChoose;