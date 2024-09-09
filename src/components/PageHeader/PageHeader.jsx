import { locationNameFromType } from "../../utlis/pgMapper";
import "./PageHeader.css";

export const PageHeader = ({ type, title }) => {
  return (
    <>
      <p className="pageHead">
        {type === "pg" ? `PG in ${locationNameFromType(title)}` : title}
      </p>
    </>
  );
};
