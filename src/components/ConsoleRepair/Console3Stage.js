import {Fragment} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';

const defects=[
     
        {
            name:'Nie czyta płyt',
            defectid:'4',
            supportedconsoles:[1,3,5,6]
        },
        {
            name:"Nie włącza się",
            defectid:"3"
        },   
        {

            name:"Nie łączy się z padem",
            defectid:"2"
        },
        {

            name:"Przegrzewa się",
            defectid:"1"
        },

    
        {    
            name:"Coś innego",
            defectid:"5"
        },
      
      
    ];

    
const ConsoleDefectChoose = (props)=>{
    const{whichmodel,setdefect}=props;
  console.log(whichmodel);
return <Fragment>
  
<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Co nie działa?</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>


{defects.filter(defects => defects.supportedconsoles=whichmodel).map((whichmodel)=>
 <div key={whichmodel.consoleid} className={classes.block}>

 <a  onClick={() => setdefect(whichmodel.defectid)}>
{/* <img src={whichConsole.image} /> */}
<h3 className={classes.console_name}>{whichmodel.name}</h3>
</a>

</div>
)}

</div>
</div>

</Fragment>

}




export default ConsoleDefectChoose;
