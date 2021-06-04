import React from "react"
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

const About = () => {
  return (
    <div className='text-center padding-10-15' id='home'>
      <h1 id='name'>Sharon Robert</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </h3>
      <button className='btn btn-sec m-3'>
        Hire me
        <TrendingFlatIcon />
      </button>
    </div>
  );
};
export default About; 