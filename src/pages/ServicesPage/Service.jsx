import React, { useEffect, useState } from "react";
// import { database, storage } from "../../firebase";
import "./Service.css";
import { database, ref, onValue } from "../../firebaseConfig";
import ServiceLayout from "../../components/ServiceLayout/ServiceLayout";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import Loader from "../../components/Loader/Loader";
import useFirebaseDb from "../../CustomHooks/useFirebaseDb";

const Service = (props) => {
  const { data, loading } = useFirebaseDb(props.serviceType);

  return (
    <div className="services">
      <PageHeader title={props.serviceTitle} type="service" />

      <div className="servicesAdded">
        {loading ? (
          <div className="showLoader">
            <Loader />
          </div>
        ) : (
          data.map((service, index) => {
            return <ServiceLayout key={index} data={service} />;
          })
        )}
      </div>
    </div>
  );
};

export default Service;
