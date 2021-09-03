import {Fragment,useState,useEffect } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';

import { createApiEndpoint, ENDPOINTS } from "../../api";
    
const ConsoleDefectChoose = (props)=>{
    const{whichmodel,setdefect}=props;
  
    const[consoleList,setconsoleList]=useState([]);


useEffect(() => {
    createApiEndpoint(ENDPOINTS.Defects).fetchById(whichmodel).then(res=>{
        let consoleList=res.data.map(item=>({
            id:item.defectId,
            name:item.name,
            
        }))
        setconsoleList(consoleList);
    
    })
    .catch(err=>console.log(err))
    
},[whichmodel>0])

return <Fragment>
  
<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Co nie działa?</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>


{consoleList.map((whichmodel)=>
 <div key={whichmodel.id} className={classes.block}>

 <a  onClick={() => setdefect(whichmodel.id)}>
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
