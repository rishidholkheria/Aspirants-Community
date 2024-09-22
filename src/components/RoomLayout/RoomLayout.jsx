import React from "react";
import roomImg from "../../assets/roomImg.jpg";
import "./RoomLayout.css";
import RoomDescLayout from "./RoomDescLayout";

const RoomLayout = ({ key, data }) => {
  // console.log(data)

  const onPgClick = () => {
     <RoomDescLayout key={key} data={data} />;
  };

  return (
    <div onClick={onPgClick} className="singleServ">
      <img className="servImg" src={data.images} alt="RoomImage" />
      <p className="servTitle">{data.name}</p>
      <p className="servAddressPg">{data.address}</p>
      <p className="servDesc">{data.description}</p>
    </div>
  );
};

export default RoomLayout;
