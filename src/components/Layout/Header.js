import {Fragment} from "react";
import logoImage from '../../Content/Images/playstation.png';
import classes from '../../components/Layout/header.module.css';
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { BsThreeDots } from 'react-icons/bs';






const Header= props => {
const clickHandler=() =>{
    console.log('Clicked');
};

return <Fragment>
<header className={classes.header}>
    <nav className={classes.nav}>
<a href="#">
                <img src={logoImage} />
                <h1>ConsoleStore</h1>
            </a>
            <div className={classes.menu}>
                <ul>
                    <li>
                        <a className={classes.napis} href="#">Konsole</a>
                        <ul className={classes.list}>
                            <li><FaPlaystation /><a onClick={clickHandler} href="#">PLAYSTATION</a></li>
                            <li><FaXbox/><i class="fab fa-xbox"></i><a href="#">XBOX</a></li>
                            <li><SiNintendoswitch/><a href="#">NINTENDO</a></li>
                            <li><BsThreeDots/><a href="#">INNE</a></li>
                        </ul>
                    </li>
                    <li>
                        <a className={classes.napis} href="#">Kontrolery</a>
                        <ul className={classes.list}>
                        <li><FaPlaystation /><a href="#">PLAYSTATION</a></li>
                            <li><FaXbox/><i class="fab fa-xbox"></i><a href="#">XBOX</a></li>
                            <li><SiNintendoswitch/><a href="#">NINTENDO</a></li>
                            <li><BsThreeDots/><a href="#">INNE</a></li>
                        </ul>
                    </li>
                    <li><a className={classes.napis} href="#">Nasze Oferty</a></li>
                    <li><a className={classes.napis} href="#">Skup</a></li>
                    <li><a className={classes.napis} href="#">Kontakt</a></li>
                </ul>
            </div>
            </nav>
</header>

</Fragment>

};

export default Header;