//

import React, { useState } from "react";

export const BusinessCard = ({
  name = "Not Specified",
  email = "Not Specified",
  tel = "Not Specified",
  photo = "/default-no-photo.jpg",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedTel, setEditedTel] = useState(tel);

  const handleRemoveClick = () => {
    setIsVisible(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedName(name);
    setEditedEmail(email);
    setEditedTel(tel);
  };

  const handleNameChange = (event) => {
    setEditedName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };

  const handleTelChange = (event) => {
    setEditedTel(event.target.value);
  };

  return (
    isVisible && (
      <div className="business-card">
        <div className="image-container">
          <img src={photo} alt="Profile" />
        </div>
        <div className="info-container">
          {isEditing ? (
            <>
              <input value={editedName} onChange={handleNameChange} />
              <input value={editedEmail} onChange={handleEmailChange} />
              <input value={editedTel} onChange={handleTelChange} />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </>
          ) : (
            <>
              <h2>{editedName}</h2>
              <p>Email: {editedEmail}</p>
              <p>Tel: {editedTel}</p>
              <button onClick={handleRemoveClick}>Remove</button>
              <button onClick={handleEditClick}>Edit</button>
            </>
          )}
        </div>
      </div>
    )
  );
};
