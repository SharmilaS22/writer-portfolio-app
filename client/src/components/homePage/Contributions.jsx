import React from "react";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const Contributions = () => {
  return (
    <div className='container-fluid text-center padding-10-15 bg-light-theme text-dark-theme'>
      <h3 className='mb-3'>Read the book I've contributed to</h3>
      <iframe
        id='wattpad-embed'
        title='Thrown into Terror'
        width='500'
        height='280'
        frameBorder='0'
        allowFullScreen=''
        src='https://embed.wattpad.com/story/63080759'></iframe>

      <img
        id='book-image'
        src='assets/thrownIntoTerror.png'
        alt='Thrown into Terror'
      />
      <div className='mt-4'>
        <a href='https://www.wattpad.com/420020540-thrown-into-terror-author%27s-note?utm_source=widget&utm_medium=reading'>
          <button className='btn btn-outline-primary'>
            Read on wattpad
            <LocalLibraryIcon />
          </button>
        </a>
      </div>
    </div>
  );
};
export default Contributions;