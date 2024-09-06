import React, { useState, useEffect } from "react";
import "./Pg.css";
import RoomLayout from "../../components/RoomLayout/RoomLayout";
import { BenefitsOfLocation } from "../BenefitsOfLocation";
import { database, onValue, ref } from "../../firebaseConfig";
import { locationNameFromType } from "../../utlis/pgMapper";

const Pg = ({ type }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, "pg");

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      var filteredData = data.filter((item) => item.type === type);
      setRooms(filteredData);
    });

    // Cleanup listener on component unmount
    return () => unsubscribe();
  }, [type]);

  console.log(rooms);
  return (
    <div className="pgkb">
      <p className="pageHead">PG in {locationNameFromType(type)}</p>


      <div className="rooms">
        {rooms.map((pg, index) => {
          return <RoomLayout key={index} data={pg} />;
        })}
      </div>

      <BenefitsOfLocation />
    </div>
  );
};

export default Pg;
