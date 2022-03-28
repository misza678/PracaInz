import React, { Fragment, useState, useEffect } from "react";
import { createApiEndpoint, ENDPOINTS } from "../../api";
import MyAccountNoData from "./MyAccountNoData";
import MyAccountEditAddress from "./MyAccountEditAddress";

const MyAccountSectionNoData = (props) => {
  const [addressError, setAddressError] = useState(false);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    createApiEndpoint(ENDPOINTS.Customer)
      .fetchAll()
      .then((res) => {
        let customer = [
          {
            addressID: res.data.address.addressID,
            street: res.data.address.street,
            city: res.data.address.city,
            housenumber: res.data.address.houseNumber,
            postal: res.data.address.postalAddress,
            flat: res.data.address.flatNumber,
            name: res.data.name,
            lastname: res.data.lastName,
            phone: res.data.phone,
            email: res.data.email,
            customerid: res.data.customerID,
          },
        ];
        setAddress(customer);
      })
      .catch((err) => {
        setAddressError(true);
        console.log(err);
      });
  }, []);

  return (
    <Fragment>
      {addressError ? (
        <MyAccountNoData />
      ) : (
        <MyAccountEditAddress useraddress={address} />
      )}
    </Fragment>
  );
};

export default MyAccountSectionNoData;
