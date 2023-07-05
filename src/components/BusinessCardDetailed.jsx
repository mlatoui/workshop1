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
        <img src={photo ? photo : '/default-no-photo.jpg'} alt="Profile" />
      </div>
      <div className="info-container">
        <h2>{name ? name : 'Not Specified'}</h2>
        <p>Email: {email ? email : 'Not Specified'}</p>
        <p>Tel: {tel ? tel : 'Not Specified'}</p>
      </div>
    </div>
  );
};

export default BusinessCardDetailed;
