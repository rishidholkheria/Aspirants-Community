import "./Pg.css";
import RoomLayout from "../../components/RoomLayout/RoomLayout";
import { BenefitsOfLocation } from "../BenefitsOfLocation";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import Loader from "../../components/Loader/Loader";
import useFirebaseDb from "../../CustomHooks/useFirebaseDb";

const Pg = ({ type }) => {

  const {data, loading} = useFirebaseDb("pg")
  var filteredData = data.filter((item) => item.type === type)

  return (
    <div className="pgkb">
      <PageHeader title={type} type="pg" />

      {loading ? (
        <div className="showLoader">
          <Loader />
        </div>
      ) : (
        <div className="rooms">
          {filteredData.map((pg, index) => {
            return <RoomLayout key={index} data={pg} />;
          })}
        </div>
      )}

      <BenefitsOfLocation />
    </div>
  );
};

export default Pg;
