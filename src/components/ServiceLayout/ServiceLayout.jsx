import React from "react";
import "./ServiceLayout.css";

const ServiceLayout = ({ data }) => {
  return (
    <div className="serviceLayout">
      <div className="serviceImg">
        <img src={data.images} alt="img_service" />
      </div>
      <div className="serviceInfoContainer">
        <div className="serviceName">{data.name}</div>
        <div className="serviceContact">{data.contact}</div>
      </div>
    </div>
  );
};

export default ServiceLayout;