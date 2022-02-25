import { Fragment, useState, React } from "react";
import { useForm } from "react-hook-form";
import classes from "../CollectionCentre/CollectionCentre.module.css";
import ImageUploading from "react-images-uploading";
import { createApiEndpoint, ENDPOINTS } from "../../api";

const CollectionCentre = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [images, setImages] = useState([]);
  const maxNumber = 8;
  const { whichmodel, withController } = props;

  const addOrder = (data) => {
    let imagesOrder = {
      imageId: 0,
      imageSrc: 0,
      images: images,
      collectionItem: {
        collectionItemId: 0,
        imageId: 0,
        productToViewId: whichmodel,
        CustomerId: 0,
        Customer: {
          customerId: 0,
          name: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          addressID: 0,
          address: {
            addressID: 0,
            city: data.city,
            postalAddress: data.postaladdress,
            street: data.street,
            houseNumber: data.housenumber,
            flatNumber: data.flatNumber,
          },
        },
        withController: withController,
      },
    };
    console.log(imagesOrder);
    createApiEndpoint(ENDPOINTS.Images)
      .create(imagesOrder)
      .catch((err) => console.log(err));
  };

  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Fragment>
      <div className="App">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>

      <div className={classes.formcontainer}>
        <form className={classes.form} onSubmit={handleSubmit(addOrder)}>
          <label htmlFor="firstName">Imię:</label>
          <input
            id="firstName"
            {...register("firstName", { required: true })}
          />

          <label htmlFor="lastName">Nazwisko:</label>
          <input id="lastName" {...register("lastName", { required: true })} />

          <label htmlFor="email">Email:</label>
          <input id="email" {...register("email", { required: true })} />

          <label htmlFor="phone">Numer telefonu:</label>
          <input id="phone" {...register("phone", { required: true })} />

          <label htmlFor="street">Ulica:</label>
          <input id="street" {...register("street", { required: true })} />

          <label htmlFor="housenumber">Nr domu:</label>
          <input
            id="housenumber"
            {...register("housenumber", { required: true })}
          />

          <label htmlFor="flatnumber">Nr mieszkania:</label>
          <input id="flatnumber" {...register("flatnumber")} />

          <label htmlFor="city">Miasto:</label>
          <input id="city" {...register("city", { required: true })} />

          <label htmlFor="postaladdress">Kod pocztowy:</label>
          <input
            id="postaladdress"
            {...register("postaladdress", { required: true })}
          />

          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default CollectionCentre;
