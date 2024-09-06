import React from 'react'
import "./ContactUs.css"

const ContactUs = () => {
    return (
        <div className="contactUs">
            <p className="contDetailHeading">Contact Us</p>

            <div className="contUsWrap">
                <div className="conDetailWrap">
                    <i class="fas fa-phone-alt fa-2x"></i>
                    <p>Phone Number</p>
                    <a className="contDetail" href="tel: 9871915608">9871915608</a>
                </div>

                <div className="conDetailWrap">
                    <i class="fas fa-envelope fa-2x"></i>
                    <p>Email</p>
                    <a className="contDetail" href="mailto: orn.connect@gmail.com">orn.connect@gmail.com</a>
                </div>

            </div>
        </div>
    )
}

export default ContactUs
