import {Fragment} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';
import ps4 from '../../Content/Images/LogoForNavConsole/ps4.jpg';
import ps3 from '../../Content/Images/LogoForNavConsole/ps3.jpg';
import ps2 from '../../Content/Images/LogoForNavConsole/ps2.jpg';
import ps1 from '../../Content/Images/LogoForNavConsole/ps1.jpg';
import Console2Stage from '../ConsoleRepair/Console2Stage';
import logoimage from '../../Content/Images/playstationback.jpg';
import Console3Stage from '../ConsoleRepair/Console3Stage';
import Console4Stage from '../ConsoleRepair/Console4Stage';
import React, { useState } from 'react';
import {useForm} from 'react-hook-form';


const ConsoleChoose= props => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [consoleid,setConsoleId]=useState(0);
    const [version,setversion]=useState(0);
    console.log(version);    
    console.log(consoleid);
  
return <Fragment>
    
  <div style={{ 
      backgroundImage: `url(${logoimage})`
    }} className={classes.wrapper}>
      
  
<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Wybierz swoją konsole!</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>
 
<div className={classes.block}>

<Link  to="Console2Stage" duration={100} offset={-180} spy={true} smooth={true}>
    <a  onClick={() => setConsoleId(4)}>
       <img src={ps4} />
        <h3 className={classes.console_name}>PlayStation 4</h3>
        </a>
        </Link>
</div>

<div className={classes.block}>
    
<Link  to="Console2Stage" duration={100} offset={-180} spy={true} smooth={true}>
<a onClick={() => setConsoleId(3)}>
    <img src={ps3} />
        <h3 className={classes.console_name}>PlayStation 3</h3>
        </a></Link>
</div>
<div className={classes.block}>
    
<Link  to="Console2Stage" duration={100} offset={-180} spy={true} smooth={true}>
<a onClick={() => setConsoleId(2)}>
    <img src={ps2} />
        <h3 className={classes.console_name}>PlayStation 2</h3>
        </a></Link>
</div>
<div className={classes.block}>
    
<Link  to="Console2Stage" duration={100} offset={-180} spy={true} smooth={true}>
<a onClick={() => setConsoleId(1)}>
    <img src={ps1} />
        <h3 className={classes.console_name}>PlayStation 1</h3>
        </a></Link>
</div>



</div>
</div>
<Console2Stage setversion={setversion}/>
<Console3Stage/>
<Console4Stage/>

<form onSubmit={handleSubmit()}>
    <label>
    
       
    </label>
     <button type="submit">Wyslij</button>
</form>


</div>




</Fragment>





};

export default ConsoleChoose;