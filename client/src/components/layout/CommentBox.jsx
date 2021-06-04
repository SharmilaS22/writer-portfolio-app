import React from "react";

const CommentCard = ({ userName, userComment, date }) => {
  return (
    <div className='card mb-2' id='comment-card'>
        <div className='card-body border-none shadow'>
            <p>{userComment}</p>
        </div>
        <div className='card-footer bg-dark-theme text-white py-0'>
            <div className='row p-0'>
                <div className='col-md-6'>
                    <p id='time1'>{date}</p>
                </div>
                <div className='col-md-6 text-right'>
                    <p>{userName}</p>
                </div>
            </div>
        </div>
  </div>
  );
};
export default CommentCard;