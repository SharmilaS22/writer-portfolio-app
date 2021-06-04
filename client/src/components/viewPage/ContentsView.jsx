import React from "react";

const ContentsView = ({ title, imageurl, imagealt, contents }) => {
  console.log(contents)
    return (
      <div style={{ margin: "3rem 0 1rem 0" }}>
        <h1 className=''>{title}</h1>
        <div className='underline mb-5'></div>
        <img
          src={imageurl}
          alt={imagealt}
          style={{ margin: "3rem 0", height: "auto", width: "100%" }}
        />
        
        {
          contents &&
          contents.map((content, index) => {
            return (
              content !== "" && <h5 key={index} className='mb-4 line-15'>{content}</h5>
            );
          })}
        
      </div>
    );
}
export default ContentsView;