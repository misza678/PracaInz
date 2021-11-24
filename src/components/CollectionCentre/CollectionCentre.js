import { Fragment,useState } from "react";
import { FaPlaystation } from 'react-icons/fa';
import { FaXbox } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si';
import Console1Stage from '../ConsoleRepair/Console1Stage';
import classes from '../CollectionCentre/CollectionCentre.module.css';

const CollectionCentre = props => {
  const [firststep, setfirststep] = useState(false);
  const [mod, setfirstmod] = useState();
    const [selectedImages, setSelectedImage] = useState([]);
    const [consoleid, setConsoleId] = useState(0);
    return <Fragment>
        

<div className={classes.container}>

<div className={classes.whatToSell}>
<h1>Chcesz sprzedać starą konsolę lub kontroler? Nic trudnego!</h1>
<p>Wystarczy, że wypełnisz ten formularz i w ciągu 24h dostaniesz wycenę!</p>
<div className={classes.choose}>

 <div className={classes.block}>
<a onClick={() => {setfirstmod("playstation"); setfirststep(true)  } }href="#"><FaPlaystation size="100px"/></a>
<a onClick={() => {setfirstmod("xbox");setfirststep(true)  } } href="#"><FaXbox size="100px"/></a>
<a onClick={() => {setfirstmod("nintendo"); setfirststep(true)  } }href="#"><SiNintendoswitch size="100px"/></a>
  </div>
 
    {firststep? <Console1Stage  whichConsole={mod} setConsoleId={setConsoleId} categoryid={1} setstep={0} classChange={true} />:null}
	</div>
</div>
</div>

  
       


    </Fragment>

};

export default CollectionCentre;