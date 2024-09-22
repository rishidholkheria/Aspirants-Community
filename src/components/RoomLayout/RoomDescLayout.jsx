import React from "react";

const RoomDescLayout = ({ key, data }) => {
    console.log("HEELLLoo")
  return (
    <div>
      <img className="servImg" src={data.images} alt="RoomImage" />
      <p className="servTitle">{data.name}</p>
      <p className="servAddressPg">{data.address}</p>
      <p className="servDesc">{data.description}</p>
    </div>
  );
};

export default RoomDescLayout;
