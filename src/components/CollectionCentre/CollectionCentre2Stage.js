import { Fragment,useState } from "react";

import { useForm } from "react-hook-form";
import { BsController } from 'react-icons/bs';
import { GiGameConsole } from 'react-icons/gi';
import { BiDotsHorizontal } from 'react-icons/bi';
import classes from '../CollectionCentre/CollectionCentre.module.css';

const CollectionCentre = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImages, setSelectedImage] = useState([]);
  



    return <Fragment>
        

<div className={classes.container}>

 <div className={classes.block}>
 <a onClick={() => {setConsoleId(whichConsole.id);  setstep(true)  }}>
                            <img src={require("../../Content/Images/LogoForNavConsole/" + whichConsole.image + ".jpg").default} />
                            <h3 className={classes.console_name}>{whichConsole.consolename}</h3>
                        </a>

  </div>
  <div className={classes.block}>
  

  </div>
	</div>

    </Fragment>

};

export default CollectionCentre;