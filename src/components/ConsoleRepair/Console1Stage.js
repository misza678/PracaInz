import React, { Component, Fragment, Suspense, useRef, useState, useEffect } from "react";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';

import ps4 from '../../Content/Images/LogoForNavConsole/ps4.jpg';
import ps3 from '../../Content/Images/LogoForNavConsole/ps3.jpg';
import ps2 from '../../Content/Images/LogoForNavConsole/ps2.jpg';
import ps1 from '../../Content/Images/LogoForNavConsole/ps1.jpg';

import xboxone from '../../Content/Images/LogoForNavConsole/xboxone.jpg';
import xbox360 from '../../Content/Images/LogoForNavConsole/xbox360.jpg';
import xclassic from '../../Content/Images/LogoForNavConsole/xclassic.jpg';
import { createApiEndpoint, ENDPOINTS } from "../../api";




const Console1Stage = (props) => {
    const { whichConsole, setConsoleId,setstep } = props;

    const [consoleList, setconsoleList] = useState([]);

    useEffect(() => {
        createApiEndpoint(ENDPOINTS.MainProduct).fetchById(whichConsole).then(res => {
            let consoleList = res.data.map(item => ({
                id: item.productsToViewId,
                consolename: item.name,
                image: item.photoSRC
            }))
            setconsoleList(consoleList);

        })
            .catch(err => console.log(err))

    }, [whichConsole>0])





    return <Fragment>

        <div className={classes.container_console}>
            <div className={classes.h1}>
                <h1>Wybierz swoją konsole!</h1>
            </div>
            <hr className={classes.margin}></hr>
            <div className={classes.menu}>
                {consoleList.map((whichConsole) =>
                    <div key={whichConsole.id} className={classes.block}>
                        <a onClick={() => {setConsoleId(whichConsole.id);  setstep(true)  }}>
                            <img src={require("../../Content/Images/LogoForNavConsole/" + whichConsole.image + ".jpg").default} />
                            <h3 className={classes.console_name}>{whichConsole.consolename}</h3>
                        </a>
                    </div>
                )}
            </div>
        </div>
    </Fragment>
}




export default Console1Stage;