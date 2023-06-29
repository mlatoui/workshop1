import React, { useState } from 'react';

export const BusinessCard = ({
  name = 'Not Specified',
  email = 'Not Specified',
  tel = 'Not Specified',
  photo = '/default-no-photo.jpg',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRemoveClick = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="business-card">
        <div className="image-container">
          <img src={photo} alt="Profile" />
        </div>
        <div className="info-container">
          <h2>{name}</h2>
          {/* <p>Email: {email}</p>
          <p>Tel: {tel}</p> */}
          <button onClick={handleRemoveClick}>Remove</button>
        </div>
      </div>
    )
  );
};
