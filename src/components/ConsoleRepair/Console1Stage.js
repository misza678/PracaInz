import React, {Component, Fragment,Suspense,useRef,useState} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';

import ps4 from '../../Content/Images/LogoForNavConsole/ps4.jpg';
import ps3 from '../../Content/Images/LogoForNavConsole/ps3.jpg';
import ps2 from '../../Content/Images/LogoForNavConsole/ps2.jpg';
import ps1 from '../../Content/Images/LogoForNavConsole/ps1.jpg';

import xboxone from '../../Content/Images/LogoForNavConsole/xboxone.jpg';
import xbox360 from '../../Content/Images/LogoForNavConsole/xbox360.jpg';
import xclassic from '../../Content/Images/LogoForNavConsole/xclassic.jpg';

const consoles=[
     
        {
            company:'playstation',
            name:'Playstation 4',
            image: `${ps4}`,
            consoleid:'4'
        },
        {
            company:'playstation',
            name:"Playstation 3",
            image: `${ps3}`,
            consoleid:"3"
        },   
        {
            company:'playstation',
            name:"Playstation 2",
            image: `${ps2}`,
            consoleid:"2"
        },
        {
            company:'playstation',
            name:"Playstation 1",
            image: `${ps1}`,
            consoleid:"1"
        },

    
        {
            company:'xbox',
            name:"Xbox One",
            image: `${xboxone}`,
            consoleid:"5"
        },
        {
            company:'xbox',
            name:"Xbox 360",
            image: `${xbox360}`,
            consoleid:"6"
        },   
        {
            company:'xbox',
            name:"Xbox classic",
            image: `${xclassic}`,
            consoleid:"7"
        }
      
    ];

    
const Console1Stage = (props)=>{
    const{whichConsole,setConsoleId}=props;
  
return <Fragment>
  
<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Wybierz swoją konsole!</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>


{consoles.filter(console => console.company == whichConsole).map((whichConsole)=>
 <div key={whichConsole.consoleid} className={classes.block}>

 <a  onClick={() => setConsoleId(whichConsole.consoleid)}>
<img src={whichConsole.image} />
<h3 className={classes.console_name}>{whichConsole.name}</h3>
</a>

</div>
)}

</div>
</div>

</Fragment>

}




export default Console1Stage;