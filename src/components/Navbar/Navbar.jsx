import logo from "../../assets/logo.png";
import "./Navbar.css";
import React from "react";
import gsap from "gsap";
import cancel_icon from "../../assets/cancel_icon.svg";
import menu_icon from "../../assets/menu_icon.svg";
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
    <nav>
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
        <a class="/" href="index.html">
          Home
        </a>
        {/* <a href="/pg-in-old-rajinder-nagar">PGs/Apartments</a> */}
        <div className="pgContainer">
          <a>PGs/Apartments</a>
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
        <a href="/tiffin-services">Services</a>
        <a href="">Contact Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
