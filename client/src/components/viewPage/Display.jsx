import React, { useState, useEffect } from "react";
import axios from "axios";

import Comment from "./Comment";
import ContentsView from "./ContentsView";
import LikeComment from "./LikeComment";
import PhotoCredit from "./PhotoCredit";

const Display = ({ match }) => {
  const [works, setWorks] = useState({});
  const id = match.params.id;

  const loadWorks = async () => {
    const res = await axios
      .get(`/api/view/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err));
    setWorks(res);
  }
  useEffect(() => { loadWorks(); },
      [works]
    );
  return (
    <div>
      <ContentsView
        title={works.title}
        contents={works.contentArray}
        imagealt={works.title}
        imageurl={works.image}
          />
      <PhotoCredit name='Annie' />
      <LikeComment likes={works.likes} comments={works.comments} id={id} />
      <Comment id={id} />
    </div>
  );
};
export default Display;
