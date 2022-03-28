import { Fragment, useEffect, useState } from "react";
import classes from "../../components/Layout/header.module.css";
import { Link } from "react-router-dom";
import AuthService from "../Authentication/AuthService";
const Header = (props) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const res = AuthService.AuthVerify();
    if (res === false) {
      setCurrentUser(true);
      console.log(currentUser);
    } else setCurrentUser(false);
  }, currentUser);
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <Link className={classes.headerLogo} to="/StronaGlowna">
            ConsoleStore
          </Link>
          <div className={classes.menu}>
            <ul>
              <li>
                <Link to="/konsole">KONSOLE</Link>
              </li>
              <li>
                <Link to="/kontrolery">KONTROLERY</Link>
              </li>

              <li>
                <Link to="/skup">SKUP</Link>
              </li>
              <li>
                <Link to="/kontakt">KONTAKT</Link>
              </li>

              {currentUser ? (
                <li className={classes.Account}>
                  <Link to="/konto">MOJE KONTO</Link>
                </li>
              ) : (
                <li className={classes.Account}>
                  <Link
                    to={{
                      pathname: "/login",
                      currentuser: setCurrentUser,
                    }}
                  >
                    ZALOGUJ SIĘ
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
