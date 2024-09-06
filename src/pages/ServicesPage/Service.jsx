import React, { useEffect, useState } from "react";
// import { database, storage } from "../../firebase";
import "./Service.css";
import ContactUs from "../../components/ContactUs/ContactUs";
import { database, ref, onValue } from "../../firebaseConfig";
import ServiceLayout from "../../components/ServiceLayout/ServiceLayout";

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
      <div className="pageHead">
        <p id="pageHead">{props.serviceTitle}</p>
        <p id="pageSubhead">{props.serviceSubTitle}</p>
      </div>

      <p className="servicePageText">{props.servicePageText}</p>

      <div className="servicesAdded">
        {posts.map((service, index) => {
          return <ServiceLayout key={index} data={service} />;
        })}
      </div>

      <p className="pageContentHead">
        Want to show your service on OldRajinderNagar.com?
      </p>
      <p className="wtaText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorem
        porro molestiae nulla, saepe, excepturi impedit consequatur vitae
        adipisci animi, debitis aliquid unde reiciendis culpa recusandae quae
        temporibus! Nostrum, est. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Consectetur nulla repudiandae qui voluptatum illum
        possimus quo cum porro accusamus magnam quidem ex maxime, iure
        praesentium quae voluptatibus. Magnam, iure exercitationem?
      </p>
    </div>
  );
};

export default Service;
