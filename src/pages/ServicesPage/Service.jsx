import React, { useEffect, useState } from "react";
// import { database, storage } from "../../firebase";
import "./Service.css";
import { database, ref, onValue } from "../../firebaseConfig";
import ServiceLayout from "../../components/ServiceLayout/ServiceLayout";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import Loader from "../../components/Loader/Loader";

const Service = (props) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataRef = ref(database, props.serviceType); //(database, tableName)
    // console.log(props.serviceType);
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      setPosts(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [props.serviceType]);

  return (
    <div className="services">
      <PageHeader title={props.serviceTitle} type="service" />

      <div className="servicesAdded">
        {loading ? (
          <div className="showLoader">
            <Loader />
          </div>
        ) : (
          posts.map((service, index) => {
            return <ServiceLayout key={index} data={service} />;
          })
        )}
      </div>
    </div>
  );
};

export default Service;
