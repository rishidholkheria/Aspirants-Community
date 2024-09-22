import React, { useEffect } from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { axiosInstance } from "../../utlis/axiosInstance";

const CurrentAffairs = () => {
    useEffect(() => {
        axiosInstance.get('').then((response) => {
            console.log(response.data)
        }).catch(()=>{
            console.log("Something went wrong")
        })
  }, []);

  return (
    <>
      <div className="current_affairs">
        <PageHeader title="Current Affairs" type="curr_aff" />

        <div></div>
      </div>
    </>
  );
};

export default CurrentAffairs;
