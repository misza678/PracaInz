import {Fragment, useState } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';




const consoles=[
     
    {
        name:'Playstation 4',  
        consoleid:'4',
        modelid:'1'

    },
    {
        name:'Playstation 4 Slim',   
        consoleid:'4',
        modelid:'2'
    },
    {
        name:'Playstation 4 Pro',
        consoleid:'4',
        modelid:'3'
    },



    {
        name:"Playstation 3 Fat",
        consoleid:"3",
        modelid:'4'
    },   
    {
        name:"Playstation 3 Slim",
        consoleid:"3",
        modelid:'5'
    },   
    {
        name:"Playstation 3 SuperSlim",
        consoleid:"3",
        modelid:'6'
    },   
    {
        name:"Playstation 2 Fat",
        consoleid:"2",
        modelid:'7'
    },
    {
        name:"Playstation 2 Slim",
        consoleid:"2",
        modelid:'8'
    },
    {
        name:"PSX",
        consoleid:"1",
        modelid:'9'
    },
    {
        name:"PsOne",
        consoleid:"1",
        modelid:'10'
    },


    {
        name:"Xbox One",
        consoleid:"5",
        modelid:'11'
    },
    {
        name:"Xbox One S",
        consoleid:"5",
        modelid:'12'
    },
    {
        name:"Xbox One X",
        consoleid:"5",
        modelid:'13'
    },
    {
        name:"Xbox 360 Arcade/Core",
        consoleid:"6",
        modelid:'14'
    },   
    {
        name:"Xbox 360 Premium",
        consoleid:"6",
        modelid:'15'
    },  
    {
        name:"Xbox 360 Elite",
        consoleid:"6",
        modelid:'16'
    },  
    {
        name:"Xbox 360 S",
        consoleid:"6",
        modelid:'17'
    },  
    {
        name:"Xbox 360 E",
        consoleid:"6",
        modelid:'18'
    },  
    {
        name:"Xbox Classic",
        modelid:'19',
        consoleid:"7"
    }
  
];



const ConsoleModelChoose = (props)=>{
    const{whichmodel,setversion}=props;
return <Fragment>
  
<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Jaka wersja?</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>


{consoles.filter(console => console.consoleid == whichmodel).map((whichmodel)=>
 <div key={whichmodel.modelid} className={classes.block}>
<a  onClick={() => setversion(1)} >     
        <h3 className={classes.console_name}>{whichmodel.name}</h3>
        </a>

</div>
)}

</div>
</div>

</Fragment>

}




export default ConsoleModelChoose;







