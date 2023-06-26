import React from 'react';

class BusinessCard extends React.Component {
  state = {
    isVisible: true,
  };

  render() {
    const { name, email, tel, photo } = this.props;
    const { isVisible } = this.state;

    return (
      isVisible && (
        <div className="business-card">
          <div className="image-container">
            <img src={photo} alt="Profile" />
          </div>
          <div className="info-container">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Tel: {tel}</p>
            <button onClick={() => this.setState({ isVisible: false })}>
              Remove
            </button>
          </div>
        </div>
      )
    );
  }
}

export default BusinessCard;
