import {Fragment, useState } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';


function ConsoleModelChoose({setversion,scrollto})  {
  
    return <Fragment>
      
<div id="Console2Stage" className={classes.container_console}>
 <div className={classes.h1}><h1>Jaka wersja?</h1></div>
 <hr className={classes.margin}></hr>
 <div className={classes.menu}>
<div className={classes.block}>

    <a ref={myRef} onClick={() => setversion(1),()=>scrollto("Console3Stage")} >     
        <h3 className={classes.console_name}>PSX</h3>
        </a>
       
</div>

<div className={classes.block}>
<a onClick={() => setversion(2)}>
   
        <h3 className={classes.console_name}>PSone</h3>
        </a>
</div>
<div className={classes.block}>
<a onClick={() => setversion(3)}>
   
        <h3 className={classes.console_name}>Nie wiem</h3>
        </a>
</div>

</div>


</div>
    
    
    
    </Fragment>
    
    };
    
    export default ConsoleModelChoose;