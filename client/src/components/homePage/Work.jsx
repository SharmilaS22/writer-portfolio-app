import React, { useState, useEffect } from "react";
import Card from "../layout/Card";

import axios from "axios";

const Work = () => {
  const [works, setWorks] = useState([]);
  const loadWorks = async () => {
    try {
      const res = await axios
        .get("/api/admin")
        .then((response) => response.data)
        .catch(err => console.log(err));
      setWorks(res);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    loadWorks();
  }, [works.length])
  return (
    <div className='container-fluid padding-10-5 bg-dark-theme'>
      <h3 className='mb-4 text-light-theme'>My best Works</h3>

      <div className='container'>
      
        <div className='d-flex justify-content-around flex-wrap'>
          {works.length !== 0 && works.map((work) => {
            return (
              <Card
                key={work._id}
                id={work._id}
                title={work.title}
                imageurl={work.image}
                content={work.contentArray[0].substring(0, 50)}
                imagealt={work.title}
                time={work.time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Work;