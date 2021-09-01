import {Fragment, useState,useEffect } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';
import { createApiEndpoint, ENDPOINTS } from "../../api";

const ConsoleShippinghChoose= (props)=>{
    const{whichmodel,setshipping}=props;
  
    const[shippingList,setshippingList]=useState([]);
      
    
useEffect(() => {
    
    createApiEndpoint(ENDPOINTS.Shipping).fetchAll().then(res=>{
        let shippingList=res.data.map(item=>({
            id:item.shippingMetodId,
            name:item.name,
            image:item.photoSRC,
        }))
        setshippingList(shippingList);
        
    })
    .catch(err=>console.log(err))

console.log({whichmodel});
},[whichmodel])

return <Fragment>
<div className={classes.container_console}>
 <div className={classes.h1}><h1>Jak dostarczysz konsolę?</h1></div>
 <hr className={classes.margin}></hr>
 <div className={classes.menu}>


 {shippingList.map((shippingList)=>
 <div key={shippingList.id} className={classes.block}>

 <a  onClick={() => setshipping(shippingList.id)}>
 <img src={require("../../Content/Images/"+shippingList.image+".jpg").default}/> 
<h3 className={classes.console_name}>{shippingList.name}</h3>
</a>

</div>
)}




</div>


</div>
    
    
    
    </Fragment>
    
    };
    
    export default ConsoleShippinghChoose;