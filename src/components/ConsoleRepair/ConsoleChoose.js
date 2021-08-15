import {Fragment} from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';
import {Link} from 'react-scroll';
import ps4 from '../../Content/Images/LogoForNavConsole/ps4.jpg'
import ps3 from '../../Content/Images/LogoForNavConsole/ps3.jpg'
import ps2 from '../../Content/Images/LogoForNavConsole/ps2.jpg'
import ps1 from '../../Content/Images/LogoForNavConsole/ps1.jpg'






const ConsoleChoose= props => {
return <Fragment>
  
<div className={classes.container_console}>
<div className={classes.block}>
    <a>
       <img src={ps4} />
        <h3 className={classes.console_name}>PlayStation 4</h3>
        </a>
</div>
<div className={classes.block}>
<a>
    <img src={ps3} />
        <h3 className={classes.console_name}>PlayStation 3</h3>
        </a>
</div>
<div className={classes.block}>
<a>
    <img src={ps2} />
        <h3 className={classes.console_name}>PlayStation 2</h3>
        </a>
</div>
<div className={classes.block}>
<a>
    <img src={ps1} />
        <h3 className={classes.console_name}>PlayStation 1</h3>
        </a>
</div>
</div>




</Fragment>

};

export default ConsoleChoose;