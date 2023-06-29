const BusinessCardDetailed = ({
  name = 'Not Specified',
  email = 'Not Specified',
  tel = 'Not Specified',
  photo = '/default-no-photo.jpg',
}) => {
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
