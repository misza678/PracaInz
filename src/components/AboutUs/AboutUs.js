import { Fragment } from "react";
import classes from '../../components/AboutUs/AboutUs.module.css';
import image from '../../Content/Images/aboutusphoto3.jpg';
import { Link } from 'react-scroll';

const AboutUs = props => {
    return <Fragment>
        <div style={{
            backgroundImage: `url(${image})`
        }} className={classes.frontimage}>
            <Link to="about" duration={100} offset={-180} spy={true} smooth={true}><a className={classes.button}>POZNAJ NASZ SERWIS!</a></Link>
        </div>



        <div className={classes.container}>
            <div  className={classes.Aboutsection}>
                
                    <h1>Poznaj nas</h1>
                    <p>lorem ips</p>
               

             

            </div>

           
        </div>


    </Fragment>

};

export default AboutUs;