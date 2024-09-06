import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import pgCard from "../../assets/rentCard.jpg";
import smCard from "../../assets/studyMaterialCard.jpg";
import libCard from "../../assets/libCard.jpg";
import foodCard from "../../assets/foodCard.jpg";
import logo from "../../assets/logo.png";
import "./Home.css";
import tirangaVideo from "../../assets/tirangaVideo.mp4";
import { useEffect, useReducer, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const cardsRef = useRef();
  const singleCardRef = useRef();

  useEffect(() => {
    const el1 = ref1.current;
    const wrapper = ref2.current;

    gsap.fromTo(
      el1,
      { backgroundColor: "" },
      { backgroundColor: "#00000028", height: "90px", duration: 0.8 }
    );

    var blur = document.querySelector(".cursorBlur");
    document.addEventListener("mousemove", function (dets) {
      blur.style.left = dets.x - 200 + "px";
      blur.style.top = dets.y - 200 + "px";
    });

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
    <div className="home">
      {/* <nav ref={ref1}>
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
              <a href="/pg-in-patel-nagar#">Patel Nagar</a>
            </li>
            <li>
              <a href="#">Mukherji Nagar</a>
            </li>
          </ul>
        </div>

        <h4>Services</h4>
        <h4>Contact Us</h4>
      </nav> */}

      <div className="cursor"></div>
      <div className="cursorBlur"></div>

      <video autoPlay loop muted>
        <source src={tirangaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div ref={ref2} className="wrapper">
        <div className="landingContent">
          <h1>
            Community and Services for<br></br> <span>UPSC Aspirants</span>
          </h1>
          <p>
            Connect with a dedicated community of UPSC students and find safe,
            secure, and affordable PG accommodations curated by our partnering
            NGO to support your preparation journey.
          </p>
        </div>

        <div ref={cardsRef} className="servicesCards">
          <div ref={singleCardRef} className="card" id="card1">
            <img src={pgCard} alt="Image1" />
            <h2>PG/Rooms</h2>
          </div>

          <div className="card" id="card1">
            <img src={foodCard} alt="Image1" />
            <h2>Tiffin Service</h2>
          </div>

          <div className="card" id="card1">
            <img src={libCard} alt="Image1" />
            <h2>Libraries</h2>
          </div>

          <div className="card" id="card1">
            <img src={smCard} alt="Image1" />
            <h2>Study Material</h2>
          </div>
        </div>

        <div className="locationList">
          <h1>Locations available</h1>
          <div className="locWrap">
            <div className="locations">
              <div className="overlayLoc"></div>
              <h2>Old Rajinder Nagar</h2>
            </div>
            <div className="locations">
              <div className="overlayLoc"></div>
              <h2>Karol Bagh</h2>
            </div>
            <div className="locations">
              <div className="overlayLoc"></div>
              <h2>Patel Nagar</h2>
            </div>
            <div className="locations">
              <div className="overlayLoc"></div>
              <h2>Mukherji Nagar</h2>
            </div>
          </div>
        </div>

        <div className="aboutUS">
          <div className="aboutDesc">
            <h1>Who are we?</h1>
            <h2>
              We are a community dedicated to helping aspirants and students
              find safe, secure, and affordable residences, apartments, and
              services like food and libraries.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
