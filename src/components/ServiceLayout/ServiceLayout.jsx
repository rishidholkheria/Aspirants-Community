import React from 'react'
import "./ServiceLayout.css"

const ServiceLayout = ({data}) => {
    return (
        <div className="serviceLayout">
            <div className="serviceNameDetails">
                <p className="foodServiceName">{data.name}</p>
                <a className="foodServiceAddress" href={data.description}>{data.address}</a>
            </div>
            <div className="serviceContactDetails">
                <a className="foodServiceContact" >{data.contact}</a>
                <a className="foodServiceContact" href={data.location} target="_blank">Website</a>
            </div>
        </div>
    )
}

export default ServiceLayout
