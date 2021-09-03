import {Fragment} from "react";
import logoImage from '../../Content/Images/playstation.png';
import classes from '../../components/Layout/header.module.css';
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import { BsThreeDots } from 'react-icons/bs';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';





 function Header(){
   


return <Fragment>
<header className={classes.header}>
    
    <nav className={classes.nav}>
<a href="/">
                <img src={logoImage} />
                <h1>ConsoleStore</h1>
            </a>
            <div className={classes.menu}>
                <ul>
                    <li>
                        <a className={classes.napis} >Konsole</a>
                        <ul className={classes.list}>
                            <li><FaPlaystation /><Link to="/konsole/playstation">PLAYSTATION</Link></li>
                            <li><FaXbox/><Link to="/konsole/xbox">XBOX</Link></li>
                            <li><SiNintendoswitch/><Link to="/konsole/nintendo">NINTENDO</Link></li>
                         
                        </ul>
                    </li>
                    <li>
                        <a className={classes.napis} >Kontrolery</a>
                        <ul className={classes.list}>
                        <li><FaPlaystation /><Link to="/kontrolery/playstation">PLAYSTATION</Link></li>
                            <li><FaXbox/><Link to="/kontrolery/xbox">XBOX</Link></li>
                            <li><SiNintendoswitch/><Link to="/kontrolery/nintendo">NINTENDO</Link></li>
                           
                        </ul>
                    </li>
                    <li><Link to="/konsole/playstation">Market</Link></li>
                    <li><Link to="/konsole/playstation">Skup</Link></li>
                    <li><Link to="/konsole/playstation">Kontakt</Link></li>
                </ul>
            </div>
            </nav>
            
</header>

</Fragment>

};

export default Header;