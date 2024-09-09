import React, { useEffect, useState } from "react";
// import { database, storage } from "../../firebase";
import "./Service.css";
import { database, ref, onValue } from "../../firebaseConfig";
import ServiceLayout from "../../components/ServiceLayout/ServiceLayout";
import { PageHeader } from "../../components/PageHeader/PageHeader";

const Service = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, props.serviceType);
    console.log(props.serviceType);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setPosts(data);
    });

    return () => unsubscribe();
  }, [props.serviceType]);

  return (
    <div className="services">
      <PageHeader title={props.serviceTitle} type="service" />

      <div className="servicesAdded">
        {posts.map((service, index) => {
          return <ServiceLayout key={index} data={service} />;
        })}
      </div>
    </div>
  );
};

export default Service;
