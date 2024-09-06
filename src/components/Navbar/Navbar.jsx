import logo from "../../assets/logo.png"
import "./Navbar.css";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    const ref1 = useRef();
    const ref2 = useRef();
  
    useEffect(() => {
      const el1 = ref1.current;
      const wrapper = ref2.current;
  
      gsap.fromTo(
        el1,
        { backgroundColor: "" },
        { backgroundColor: "#00000028", height: "90px", duration: 0.8 }
      );
  
      gsap.to(el1, {
        backgroundColor: "#000",
        height: "70px",
        duration: 0.6,
        scrollTrigger: {
          trigger: el1,
          scroller: window,
          start: "top -5%",
          end: "end -9%",
          scrub: 1.8,
          // markers: true
        },
      });
  
      gsap.to(wrapper, {
        backgroundColor: "#000",
        scrollTrigger: {
          trigger: wrapper,
          scroller: window,
          start: "top -20%",
          end: "top -100%",
          scrub: 1.2,
        },
      });
    }, []);

  return (
    <nav ref={ref1}>
      <a href="#">
        <img src={logo} alt="LOGO" />
      </a>
      <h4>Home</h4>

      <div className="pgContainer">
        <h4 className="pgList">PGs/Apartments</h4>
        <ul className="pgLocList">
          <li>
            <a href="/pg-in-old-rajinder-nagar">Old Rajinder Nagar</a>
          </li>
          <li>
            <a href="/pg-in-karol-bagh">Karol Bagh</a>
          </li>
          <li>
            <a href="/pg-in-patel-nagar">Patel Nagar</a>
          </li>
          <li>
            <a href="#">Mukherji Nagar</a>
          </li>
        </ul>
      </div>

      <h4>Services</h4>
      <h4>Contact Us</h4>
    </nav>
  );
};

export default Navbar;
