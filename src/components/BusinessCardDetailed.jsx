import React from 'react';
import { useParams } from 'react-router-dom';

const BusinessCardDetailed = ({ profiles }) => {
  const { id } = useParams();
  const profileId = parseInt(id);
  const selectedProfile = profiles.find((profile) => profile.id === profileId);

  const { name, email, tel, photo } = selectedProfile;

  return (
    <div className="business-card">
      <div className="image-container">
        <img src={photo} alt="Profile" />
      </div>
      <div className="info-container">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Tel: {tel}</p>
      </div>
    </div>
  );
};

export default BusinessCardDetailed;
