import {Fragment} from "react";
import classes from '../../components/AboutUs/AboutUs.module.css';
import image from '../../Content/Images/aboutusphoto.jpg';
import logoimage from '../../Content/Images/AboutusLogo.jpg';
import {Link} from 'react-scroll';

const AboutUs= props => {
return <Fragment>
  <div style={{ 
      backgroundImage: `url(${logoimage})`
    }} className={classes.frontimage}> 
  <Link  to="about" duration={100} offset={-180} spy={true} smooth={true}><a className={classes.button}>POZNAJ NASZ SERWIS!</a></Link>
  </div>
<div className={classes.container}>
<div id="about" itemID={classes.about} className={classes.Aboutsection}>
    <div className={classes.text}>
    <h1>Poznaj nas</h1>
<p>lorem ips</p>
    </div>

<img src={image}></img>

</div>

<div className={classes.Aboutsection}>
    <div className={classes.text}>
    <h1>Poznaj nas</h1>
<p>lorem ips</p>
    </div>

<img src={image}></img>

</div>

<div className={classes.Aboutsection}>
    <div className={classes.text}>
    <h1>Poznaj nas</h1>
<p>lorem ips</p>
    </div>

<img src={image}></img>

</div>
</div>


</Fragment>

};

export default AboutUs;