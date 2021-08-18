import {Fragment} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';


const ConsoleModelChoose= props => {
    return <Fragment>
      
<div className={classes.container_console}>
 <div className={classes.h1}><h1>Jak dostarczysz konsolę?</h1></div>
 <hr className={classes.margin}></hr>
 <div className={classes.menu}>
<div className={classes.block}>
    <a>     
        <h3 className={classes.console_name}>Zamawiam kuriera</h3>
        </a>
</div>
<div className={classes.block}>
<a>
        <h3 className={classes.console_name}>Nadam z paczkomatu</h3>
        </a>
</div>
<div className={classes.block}>
<a>
        <h3 className={classes.console_name}>Przyniosę osobiście</h3>
        </a>
</div>

</div>


</div>
    
    
    
    </Fragment>
    
    };
    
    export default ConsoleModelChoose;