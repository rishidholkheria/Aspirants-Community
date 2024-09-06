import React from 'react'
import roomImg from "../../assets/roomImg.jpg"
import "./RoomLayout.css"

const RoomLayout = ({data}) => {
    // console.log(data)
    return (
        <div className="singleServ">
            <img className="servImg" src={data.images} alt="RoomImage" />
            <p className="servTitle">{data.name}</p>
            <p className="servAddressPg">{data.address}</p>
            <p className="servDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda earum sed ratione illum, animi aut similique minus molestiae voluptates. Illum, nihil rerum ratione repudiandae est qui ad expedita iusto amet?</p>
        </div>
    )
}

export default RoomLayout
