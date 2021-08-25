import React, {Component, Fragment,Suspense,useRef,useState} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';

import ps4 from '../../Content/Images/LogoForNavConsole/ps4.jpg';
import ps3 from '../../Content/Images/LogoForNavConsole/ps3.jpg';
import ps2 from '../../Content/Images/LogoForNavConsole/ps2.jpg';
import ps1 from '../../Content/Images/LogoForNavConsole/ps1.jpg';

import logoimage from '../../Content/Images/playstationback.jpg';


    const playstation=[
        {
            name:"Playstation 4",
            image: `${ps4}`,
            consoleid:"4"
        },
        {
            name:"Playstation 3",
            image: `${ps3}`,
            consoleid:"3"
        },   
        {
            name:"Playstation 2",
            image: `${ps2}`,
            consoleid:"2"
        },
        {
            name:"Playstation 1",
            image: `${ps1}`,
            consoleid:"1"
        }

    ];
    const xbox={

    
    }

function Console1Stage({setConsoleId},whichConsole) {
    
    console.log(whichConsole);
return <Fragment>
  

<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Wybierz swoją konsole!</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>

{playstation.map((playstation)=>
 <div className={classes.block}>
 <a  onClick={() => setConsoleId(playstation.consoleid)}>
<img src={playstation.image} />
<h3 className={classes.console_name}>{playstation.name}</h3>
</a>
</div>
)}

</div>
</div>

</Fragment>

}




export default Console1Stage;