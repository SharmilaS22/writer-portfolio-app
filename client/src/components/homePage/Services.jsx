import React from "react";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const Services = () => {
  return (
    <div className='container-fluid padding-10-15 bg-light-theme text-dark-theme'>
      <div className='text-center my-4'>
        <h2>Want me to write for your company?</h2>
        <h3>Want some content for your website?</h3>
        <button className='btn btn-primary m-2'>
          Hire me
          <TrendingFlatIcon />
        </button>
      </div>
    </div>
  );
};
export default Services;
