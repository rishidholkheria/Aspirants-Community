import logo from "../../assets/logo.png";
import "./Navbar.css";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
      { backgroundColor: "#00000028", height: "70px", duration: 0.8 }
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
      <img className="logoIcon" src={logo} alt="LOGO" />

      <input type="checkbox" id="sidebar-active" />
      <label for="sidebar-active" class="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
      <label id="overlay" for="sidebar-active"></label>

      <div class="links-container">
        <label for="sidebar-active" class="close-sidebar-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </label>
        <Link class="menu_item" to="/">
          Home
        </Link>

        <div className="pgContainer">
          <a class="menu_item">PGs/Apartments</a>
          <ul className="pgLocList">
            <li>
              <Link to="/pg-in-old-rajinder-nagar">Old Rajinder Nagar</Link>
            </li>
            <li>
              <Link to="/pg-in-karol-bagh">Karol Bagh</Link>
            </li>
            <li>
              <Link to="/pg-in-patel-nagar">Patel Nagar</Link>
            </li>
          </ul>
        </div>
        <div className="pgContainer">
          <a class="menu_item">Services</a>
          <ul className="pgLocList">
            <li>
              <Link to="/tiffin-services">Tiffin/Mess</Link>
            </li>
            <li>
              <Link to="/library">Libraries nearby</Link>
            </li>
            <li>
              <Link to="/upsc-study-material">Free Study Material</Link>
            </li>
            <li>
              <Link to="/coaching-centres">Nearby Coachings</Link>
            </li>
          </ul>
        </div>
        <a class="menu_item" to="">
          Contact Us
        </a>
      </div>

      {/* <h3>
        <a to="/current-affairs">Current Affairs</a>
      </h3> */}
    </nav>
  );
};

export default Navbar;
