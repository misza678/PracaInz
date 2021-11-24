import React, { Component, Fragment, Suspense, useRef, useState, useEffect } from "react";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import classes from '../../components/ConsoleRepair/ConsoleChoose.module.css';



const Console1Stage = (props) => {
    const { whichConsole, setConsoleId,setstep,classChange} = props;

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



console.log(classChange);

    return <Fragment>

        <div className={classChange ?classes.container_consoleCC:classes.container_console}>
            <div className={classChange ?classes.h1CC:classes.container_h1}>
                {classChange? null:<h1>Wybierz swoją konsole!</h1>}
            </div>
            {classChange? null:<hr className={classChange ?classes.marginCC:classes.margin}></hr>}
            <div className={classChange ?classes.menuCC:classes.menu}>
                {consoleList.map((whichConsole) =>
                    <div key={whichConsole.id} className={classChange ?classes.blockCC:classes.block}>
                        <a onClick={() => {setConsoleId(whichConsole.id);  setstep(true)  }}>
                            <img src={require("../../Content/Images/LogoForNavConsole/" + whichConsole.image + ".jpg").default} />
                            <h3 className={classChange ?classes.console_nameCC:classes.console_name}>{whichConsole.consolename}</h3>
                        </a>
                    </div>
                )}
            </div>
        </div>
    </Fragment>


}


export default Console1Stage;
