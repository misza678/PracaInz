import {Fragment} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';


const ConsoleModelChoose= props => {
    return <Fragment>
      
    <div className={classes.container_console}>
    <div className={classes.block}>
        <a>
           {/* <img src={} /> */}
            <h3 className={classes.console_name}>PlayStation 4</h3>
            </a>
    </div>
    <div className={classes.block}>
    <a>
        {/* <img src={} /> */}
            <h3 className={classes.console_name}>PlayStation 3</h3>
            </a>
    </div>
    <div className={classes.block}>
    <a>
        {/* <img src={} /> */}
            <h3 className={classes.console_name}>PlayStation 2</h3>
            </a>
    </div>
    <div className={classes.block}>
    <a>
        {/* <img src={} /> */}
            <h3 className={classes.console_name}>PlayStation 1</h3>
            </a>
    </div>
    </div>
    
    
    
    
    </Fragment>
    
    };
    
    export default ConsoleModelChoose;