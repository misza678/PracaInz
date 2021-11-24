import { Fragment,useState } from "react";

import { useForm } from "react-hook-form";
import { BsController } from 'react-icons/bs';
import { GiGameConsole } from 'react-icons/gi';
import { BiDotsHorizontal } from 'react-icons/bi';
import classes from '../CollectionCentre/CollectionCentre.module.css';

const CollectionCentre = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImages, setSelectedImage] = useState([]);

 const addRepair={

 }

const imageChangeHandle=(e)=>{
 
  if(e.target.files){
    const photoArray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
    console.log(photoArray)
    setSelectedImage((prevImages)=>prevImages.concat(photoArray))
  }
}

const showPhoto=(source)=>{
  return source.map((photo)=>{
    return <div> <img src={photo} key={photo} alt="" height="200px"/>
    <button onClick={delete_image}>asd</button></div>
  })
}

const delete_image=()=>{
  setSelectedImage((prevImages)=>prevImages.slice(1));
}




    return <Fragment>
        

<div className={classes.container}>

<div className={classes.whatToSell}>
<h1>Chcesz sprzedać starą konsolę lub kontroler? Nic trudnego!</h1>
<p>Wystarczy, że wypełnisz ten formularz i w ciągu 24h dostaniesz wycenę!</p>
<div className={classes.choose}>











<div className={classes.sellInput}>
  <input type="text" placeholder="Wpisz model(np. Playstation 4" />
  <button type="submit"/>
  </div>
 <div className={classes.block}>
  





  </div>
	</div>
</div>


        <div className={classes.formcontainer}>
       















<form className={classes.form} onSubmit={handleSubmit(addRepair)}>
<h1>Uzupełnij dane adresowe:</h1>
<label htmlFor="firstName">Imię:</label>
<input id="firstName" {...register("firstName", { required: true })} />

<label htmlFor="lastName">Nazwisko:</label>
<input id="lastName" {...register("lastName", { required: true })} />

<label htmlFor="email">Email:</label>
<input id="email" {...register("email", { required: true })} />

<label htmlFor="phone">Numer telefonu:</label>
<input id="phone" {...register("phone", { required: true })} />

<input id="photo" accept=".jpg, .jpeg, .png"  type="file" multiple onChange={imageChangeHandle}/>
{showPhoto(selectedImages)}
{errors.exampleRequired && <span>This field is required</span>}

<input type="submit" />
</form>
        </div>
           
        </div>


    </Fragment>

};

export default CollectionCentre;