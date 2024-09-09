import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Service from "./pages/ServicesPage/Service";
import Pg from "./pages/PgComponent/Pg";
import { Home } from "./pages/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <div className="appWrap">
            <Routes>
              <Route path="/homepage" element={<HomePage />} />
              <Route
                path="/pg-in-old-rajinder-nagar"
                element={<Pg type="rj" />}
              />
              <Route path="/pg-in-karol-bagh" element={<Pg type="kb" />} />
              <Route path="/pg-in-patel-nagar" element={<Pg type="pn" />} />
              <Route path="/" element={<Home/>} />
              <Route
                path="/coaching-centres"
                element={
                  <Service
                    serviceType="coaching_centre"
                    serviceTitle="Coaching Centres"
                    serviceSubTitle="Study centres in Upsc hub"
                    servicePageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit"
                  />
                }
              />
              <Route
                path="/tiffin-services"
                element={
                  <Service
                    serviceType="tiffin_service"
                    serviceTitle="Tiffin Services"
                    serviceSubTitle="Tiffin and Mess service nearby"
                    servicePageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit"
                  />
                }
              />
              <Route
                path="/upsc-study-material"
                element={
                  <Service
                    serviceType="study_material"
                    serviceTitle="Upsc Study material"
                    serviceSubTitle="All notes & books available"
                    servicePageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit"
                  />
                }
              />
              <Route
                path="/library"
                element={
                  <Service
                    serviceType="library"
                    serviceTitle="Library"
                    serviceSubTitle="Comfortable and well equipped libraries"
                    servicePageText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit"
                  />
                }
              />
            </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
