import React from "react";
const Social = () => {
  return (
    <div style={{padding: '1rem 0'}}>
      {/* <div style={{ margin: "3rem 0" }}>
        <p>
          Home section Photo by <strong>Matthew Moisant</strong> on unsplash,
          Contact section Photo by <strong>Annie Spratt</strong> on unsplash
        </p>
      </div> */}
      <h4 className='text-muted my-4'>Sharon JR © 2021</h4>
      <h5 className=''>
        <a className='text-light-theme' id="site-credit" style={{ textDecoration: 'none'}} href='https://sharmilas.herokuapp.com/'>
         Site made by <u>Sharmila S</u>
        </a>
      </h5>
    </div>
  );
};
export default Social;
