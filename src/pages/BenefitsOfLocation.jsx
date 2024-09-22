import "./PgComponent/Pg.css";
import img1 from "../assets/textImage1.svg";
import img2 from "../assets/textImage2.svg";
import img3 from "../assets/textImage3.svg";
import "./BenefitsOfLocation.css";

export const BenefitsOfLocation = () => {
  return (
    <>
      <div className="benefitsLoc">
        <div className="benefit">
          <div>
            <p className="pgContentSubhead">Old Rajinder Nagar</p>
            <p className="pageContent">
              Rajinder Nagar has earned its reputation as the epicenter of UPSC
              and other civil service exam preparation in Delhi. This bustling
              neighborhood is teeming with coaching centers, libraries, and
              study spaces dedicated to aspiring civil servants. The area's
              streets are often filled with students carrying hefty books and
              study materials, creating an atmosphere of intense focus and
              determination. Numerous PG accommodations and small apartments
              cater specifically to students, while cafes and eateries have
              adapted their menus and hours to suit the grueling study schedules
              of UPSC aspirants. The competitive yet collaborative environment
              of Rajinder Nagar has made it a magnet for ambitious individuals
              from across India who dream of serving their country through the
              civil services.
            </p>
          </div>
          <img className="contentImage" src={img1} alt="Image" />
        </div>

        <div className="benefit">
          <div>
            <p className="pgContentSubhead">Karol Bagh</p>
            <p className="pageContent">
              Karol Bagh, situated adjacent to Rajinder Nagar, offers a more
              cost-effective alternative for students preparing for competitive
              exams while still providing easy access to the coaching hubs. This
              vibrant locality is known for its diverse mix of residential
              areas, markets, and commercial spaces, making it a self-contained
              ecosystem for students and residents alike. Karol Bagh boasts a
              wide array of affordable accommodation options, budget-friendly
              eateries, and essential services tailored to meet the needs of
              students. Its proximity to Rajinder Nagar allows aspirants to
              benefit from the coaching facilities while enjoying a more
              economical lifestyle. The area's well-connected public
              transportation system, including metro stations, makes it
              convenient for students to commute to coaching centers and explore
              other parts of Delhi.
            </p>
          </div>
          <img className="contentImage" src={img2} alt="Image" />
        </div>

        <div className="benefit">
          <div>
            <p className="pgContentSubhead">Patel Nagar</p>
            <p className="pageContent">
              Patel Nagar is rapidly emerging as an attractive option for UPSC
              students, capitalizing on its strategic location near Karol Bagh
              and Rajinder Nagar. This evolving neighborhood is witnessing a
              surge in population density as more students recognize its
              potential as a study hub. Patel Nagar offers a blend of
              residential tranquility and urban conveniences, making it an ideal
              choice for those seeking a balance between a focused study
              environment and city life. The area is seeing an increase in
              student-oriented amenities, including new PG accommodations, small
              libraries, and study-friendly cafes. As word spreads about Patel
              Nagar's advantages, including its relatively lower costs compared
              to Rajinder Nagar and its proximity to key exam preparation
              resources, it is steadily becoming a preferred destination for
              UPSC aspirants looking for a conducive yet affordable place to
              pursue their dreams.
            </p>
          </div>
          <img className="contentImage" src={img3} alt="Image" />
        </div>
      </div>
    </>
  );
};
