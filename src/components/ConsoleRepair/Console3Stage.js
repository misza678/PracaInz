import {Fragment} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';


const ConsoleModelChoose= props => {
    return <Fragment>
      
<div className={classes.container_console}>
 <div className={classes.h1}><h1>Co nie działa?</h1></div>
 <hr className={classes.margin}></hr>
 <div className={classes.menu}>
<div className={classes.block}>
    <a>     
        <h3 className={classes.console_name}>Nie czyta płyt</h3>
        </a>
</div>
<div className={classes.block}>
<a>
        <h3 className={classes.console_name}>Nie włącza się</h3>
        </a>
</div>
<div className={classes.block}>
<a>
        <h3 className={classes.console_name}>Nie łączy się z padem</h3>
        </a>
</div>
<div className={classes.block}>
<a>
        <h3 className={classes.console_name}>Przegrzewa się</h3>
        </a>
</div>
<div className={classes.block}>
    
<a>
        <h3 className={classes.console_name}>Coś innego</h3>
        </a>
</div>

</div>


</div>
    
    
    
    </Fragment>
    
    };
    
    export default ConsoleModelChoose;