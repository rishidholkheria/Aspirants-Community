import React, { useRef, useState, useEffect } from "react";
import "./HomePage.css";
import heroCommImage from "../../assets/heroCommImage.svg";
import rajnagImage1 from "../../assets/rajnagImage1.jpg";
import kbImage1 from "../../assets/kbImage1.jpg";
import pnImage1 from "../../assets/pnImage1.jpg";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUs/ContactUs";
import { useScroll } from "../../CustomHooks/useScroll";
import { BrowserRouter, Link } from "react-router-dom";
import ORN from "../../assets/ORN.jpeg";
import "../../components/Navbar/Navbar.css";

const HomePage = () => {
  // const isMobile = (vw <= 540) ? true : false;
  const [isMobile, setMobile] = useState(false);

  function responsiveMenu() {
    const menu = document.querySelector("#mobile-menu");
    const menuLinks = document.querySelector(".navbar__menu");
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  }

  useEffect(() => {
    if (
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ) <= 540
    ) {
      setMobile(true);
    } else setMobile(false);
  }, []);

  return (
    <div className="homePage">
      <nav className="navbar">
        <div class="navbar__container">
          <div className="navbar__logo">
            <a href="#">LOGO</a>
          </div>

          {/* <!-- Hamburger menu --> */}
          <div class="navbar__toggle" id="mobile-menu" onClick={responsiveMenu}>
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>

          <ul class="navbar__menu">
            <Link to="/">
              <li class="navbar__item">
                <p href="/" class="navbar__links">
                  {" "}
                  Home{" "}
                </p>
              </li>
            </Link>

            <Link to="/">
              <li class="navDropDown">
                <p class="navbar__links">PGs/Apartments</p>
                <div class="dropdown-content">
                  <Link to="pg-in-old-rajinder-nagar">Rajinder Nagar</Link>
                  <Link to="pg-in-karol-bagh">Karol Bagh</Link>
                  <Link to="pg-in-patel-nagar">Patel Nagar</Link>
                </div>
              </li>
            </Link>

            <li class="navDropDown">
              <p class="navbar__links">Services</p>
              <div class="dropdown-content">
                <Link to="coaching-centres">Coaching Centres</Link>
                <Link to="tiffin-services">Tiffin and Mess</Link>
                <Link to="upsc-study-material">Study Material</Link>
                <Link to="library">Libraries</Link>
              </div>
            </li>
            <li class="navbar__btn">
              <p class="button" id="navbar__btn">
                {" "}
                Call Us{" "}
              </p>
            </li>
          </ul>
        </div>
      </nav>

      {/* Landing Page */}
      <div className="landingPage">
        <div className="landingDesc">
          <div className="landingDescWrapper">
            <p className="upscTag">
              {" "}
              Ideal Stay and Services for <span>UPSC Aspirants</span>
            </p>

            <p className="landingDescription">
              Connect with a dedicated community of UPSC students and find safe,
              secure, and affordable PG accommodations curated by our partnering
              NGO to support your preparation journey.
            </p>

            <div className="landingContactWrapper">
              <p className="contactBtnTag">Call Now</p>
              <p className="contactBtnTag">Mail Us</p>
            </div>
          </div>
        </div>
        <div className="landingCarousel">
          <img className="landingCarouselImg" src={heroCommImage} alt="Image" />
        </div>
      </div>

      {/* Services Provided */}
      <div className="servicePage">
        <div className="servicesHead">
          <p id="servicesHead">ATTRACTIONS</p>
        </div>

        <div className="servicesWrapper">
          <div className="singleService">
            <div className="serviceIcon">
              <i class="fas fa-home fa-3x"></i>
            </div>
            <p>
              Best coaching institutes for UPSC preparation across India with
              reputed faculty known to deliver results.
            </p>
          </div>

          <div className="singleService">
            <div className="serviceIcon">
              <i class="fas fa-book-reader fa-3x"></i>
            </div>
            <p>
              A number of 24x7 libraries for aspirants with Wi-Fi and all
              amenities to ensure aspirants can focus on their goals.
            </p>
          </div>

          <div className="singleService">
            <div className="serviceIcon">
              <i class="fas fa-star fa-3x"></i>
            </div>
            <p>
              A wide variety of Restaurants and Tiffin Services for students
              with all kind of budgets and catering to all tastes and cuisines.
            </p>
          </div>

          <div className="singleService">
            <div className="serviceIcon">
              <i class="fas fa-utensils fa-3x"></i>
            </div>
            <p>
              Safe neighborhood with almost as many female aspirants as the male
              ones, going about their business without any concerns for their
              safety and security.
            </p>
          </div>
        </div>
      </div>

      {/* Locations Description */}

      <div className="aboutLocations">
        <div className="aboutLocSingle">
          <div className="aboutLocationDesc">
            <p id="rajinderNagar" className="aboutLocHead">
              Rajinder Nagar
            </p>
            <p className="aboutLocDesc">
              Old Rajinder Nagar has slowly but surely cemented its place as the
              topmost hub for civil services aspirants all over the country.
              Thousands of aspirants reach Old Rajinder Nagar Every Year with a
              single minded purpose of cracking the civil services exam. A
              phenomenon that started years ago with a single institute called
              Vajiram & Ravi has transformed the area into the most sought after
              destination for the most bright, talented and gifted students from
              all across the country, turning it into a cosmopolitan,
              multi-ethnic melting pot teeming with aspirants full of hope and
              dreams. The area boasts of some of the best coaching institutes
              for UPSC preparation. While taking a small walk through the
              streets of Old Rajinder Nagar, one is almost instantaneously
              taken-in by the vibe of the place. Overflowing with a deluge of
              young aspirants, the place is buzzing almost 24X7 with an array of
              coaching institutes, book stores, photocopy shops, libraries and a
              bevy of restaurants/ Dhabas/ Convenience stores catering to all
              tastes. Located in the heart of central Delhi, Old Rajinder Nagar
              is easily accessible through all modes of transportation, Delhi
              Metro being the most convenient of them. With almost 80 percent of
              the aspirants in the area being from outside Delhi, many of the
              houses in the locality have turned into PG’s, opening their doors
              for students of all ethnic backgrounds. Most libraries in the area
              are open 24x7 and you can see students on the streets even well
              after midnight. While Delhi has had a questionable reputation in
              terms of security of women, in Old Rajinder Nagar you will not
              even realize that as the cosmopolitan nature of the area ensures
              that you can find female aspirants walk about carefree from
              libraries to accommodation even well after midnight.
            </p>
            <p className="pageLink">Check Pgs/Apartments</p>
            <p className="pageLink">Check Non Brokerage PGs</p>
          </div>
          <div className="locImage">
            <img id="locImage" src={rajnagImage1} alt="Image" />
            <a
              href="https://www.google.com/maps/place/Rajinder+Nagar,+New+Delhi,+Delhi/data=!4m2!3m1!1s0x390d02bcbb3b6d6b:0xaac7850da2a43dd9?sa=X&ved=2ahUKEwjnuJu-ut3zAhUW6XMBHUxXDAcQ8gF6BAgREAE"
              target="_blank"
            >
              <p className="locMap">Location on Map</p>
            </a>
          </div>
        </div>

        <div id="karolBagh" className="aboutLocSingle">
          <div className="locImage">
            <img id="locImage" src={kbImage1} alt="Image" />
            <a
              href="https://www.google.com/maps/place/Karol+Bagh,+New+Delhi,+Delhi/@28.6517972,77.1758121,14z/data=!3m1!4b1!4m5!3m4!1s0x390d029c5f402ed3:0x942174294c9dd946!8m2!3d28.6550458!4d77.1888201"
              target="_blank"
            >
              <p className="locMap">Location on Map</p>
            </a>
          </div>
          <div className="aboutLocationDesc">
            <p className="aboutLocHead">Karol Bagh</p>
            <p className="aboutLocDesc">
              Karol Bagh is a popular locality in Central Delhi and has always
              been well known for its markets and great food. In the last few
              years Karol Bagh has gained prominence as a much favoured
              destination for UPSC aspirants. The primary reason being its
              location right next to Old Rajinder Nagar. Located just across the
              road right opposite to Old Rajinder Nagar, most areas in Karol
              Bagh are equidistant from the top coaching institutes as those in
              Old Rajinder Nagar. Since the number of aspirants coming in every
              year is simply too high, naturally not all of them cannot get
              accommodation in Old Rajinder Nagar. Also because of the deluge of
              aspirants, the rental prices have also tended to go higher in
              Rajinder Nagar. Beacause of its location and the space constraints
              in Old Rajinder Nagar, a number of reputed UPSC coaching
              institutes have opened their centres in Karol Bagh. As you go for
              a quick walk in the area you will realise that a very large number
              of aspirants now reside in Karol Bagh. This had led to the
              proliferation of an entire ecosystem catering to the needs of UPSC
              aspirants. The area now boasts of a number of PG’s and apartments,
              24x7 Libraries/ Reading Rooms, bookshops and restaurants and
              tiffin services catering to aspirants. Aspirants residing in Karol
              Bagh can enjoy a little more space comparatively, while being just
              2-5 minutes walk away from all major coaching institutes. In fact
              most students who prefer to rent out an apartment instead of a PG
              prefer Karol Bagh as the rental prices would be too high in
              Rajinder Nagar.
            </p>
            <p className="pageLink">Check Pgs/Apartments</p>
            <p className="pageLink">Check Non Brokerage PGs</p>
          </div>
        </div>

        <div id="patelNagar" className="aboutLocSingle">
          <div className="aboutLocationDesc">
            <p className="aboutLocHead">Patel Nagar</p>
            <p className="aboutLocDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab
              praesentium iste libero, voluptas neque pariatur minus corporis ut
              expedita eligendi quidem totam inventore alias assumenda adipisci
              impedit ea. Libero.
            </p>
            <p className="pageLink">Check Pgs/Apartments</p>
            <p className="pageLink">Check Non Brokerage PGs</p>
          </div>
          <div className="locImage">
            <img id="locImage" src={pnImage1} alt="Image" />
            <a
              href="https://www.google.com/maps/place/Patel+Nagar,+New+Delhi,+Delhi/data=!4m2!3m1!1s0x390d02ec77443acb:0xc3e201a78b8d9851?sa=X&ved=2ahUKEwjA6KrLut3zAhVagtgFHcIFCxsQ8gF6BAgMEAE"
              target="_blank"
            >
              <p className="locMap">Location on Map</p>
            </a>
          </div>
        </div>
      </div>

      {/* Why choose Us */}
      <div className="whyChooseUS">
        <div className="wcuWrapper">
          <p className="whyChooseUSHeading">Why Choose Us?</p>
          <p className="whyChooseUSDesc">
            If you, as a student prefer to stay in PG, Karol Bagh is the best
            location for you to find it. More importantly once a student
            finishes his studies there are always a number of job openings in
            Karol Bagh itself. There are many hotels and eateries in proximity
            to the student hostels. Almost all top coaching institutes are
            located in Karol Bagh and because of that there are number of
            facilities provided to students example libraries; kitchens etc.
            Scroll down to know why students stay in Karol Bagh and which is the
            best PG in Karol Bagh
          </p>
        </div>
        <div className="servicePageLinks">
          <div className="servicePageSingleLink">
            <div className="wcuService">PGs & Apartments</div>
          </div>
          <div className="servicePageSingleLink">
            <div className="wcuService">Daily Accomodities</div>
          </div>
          <div className="servicePageSingleLink">
            <div className="wcuService">UPSC Study Material</div>
          </div>
          <div className="servicePageSingleLink">
            <div className="wcuService">Advertise your Services</div>
          </div>
        </div>
      </div>

      <ContactUs />
    </div>
  );
};

export default HomePage;
