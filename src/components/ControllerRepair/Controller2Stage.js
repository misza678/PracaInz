import {Fragment, useState,useEffect } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';
import { createApiEndpoint, ENDPOINTS } from "../../api";



const Controller2stage = (props)=>{
    const{whichmodel,setversion,setdefect}=props;
    const[consoleList,setconsoleList]=useState([]);


    

    
useEffect(() => {
    
    createApiEndpoint(ENDPOINTS.ProductsToViews).fetchById(whichmodel).then(res=>{
        let consoleList=res.data.map(item=>({
            id:item.modlesToViewId,
            consolename:item.name,
            image:item.photoSRC,
            defectid:item.defectType
        }))
        setconsoleList(consoleList);
        
    })
    .catch(err=>console.log(err))


},[whichmodel>0])


 
    return <Fragment>
  
<div  className={classes.container_console}>
 <div className={classes.h1}><h1>Jaki model?</h1>
 </div>
 <hr className={classes.margin}></hr>
 
 <div className={classes.menu}>


{consoleList.map((whichmodel)=>
 <div key={whichmodel.id} className={classes.block}>
  
<a  onClick={() => {setversion(whichmodel.id); setdefect(whichmodel.defectid) } }>
<img src={require("../../Content/Images/LogoForNavConsole/"+whichmodel.image+".jpg").default} />
        <h3 className={classes.console_name}>{whichmodel.consolename}</h3>
        </a>

</div>
)}

</div>
</div>

</Fragment>

}






export default Controller2stage;


