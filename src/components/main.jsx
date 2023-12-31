import React, { useState, useEffect } from 'react';
import { Hello } from './hello';
import { BusinessCard } from './BusinessCard';
import isEqual from 'lodash/isEqual';
import { Link } from 'react-router-dom';

export const Main = ({ name, profiles }) => {
  const [fetchedProfiles, setFetchedProfiles] = useState([]);

  useEffect(() => {
    setFetchedProfiles(
      profiles.map((profile) => ({ ...profile, favorite: false }))
    );
  }, [profiles]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  const filteredProfiles = fetchedProfiles.filter(
    (profile) =>
      profile.name &&
      profile.name.toLowerCase().trim().includes(searchTerm.toLowerCase())
  );

  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    const nameAsc = a.name.toLowerCase();
    const nameDesc = b.name.toLowerCase();
    return sortOrder === 'ascending'
      ? nameAsc.localeCompare(nameDesc)
      : nameDesc.localeCompare(nameAsc);
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCardClick = (profile) => {
    setSelectedProfile(profile);
    const updatedProfiles = fetchedProfiles.map((p) =>
      isEqual(p, profile) ? { ...p, favorite: !p.favorite } : p
    );
    setFetchedProfiles(updatedProfiles);
  };

  const handleShowFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  return (
    <main className="main">
      <Hello name={name} />
      <div className="search-and-sort">
        <input
          type="text"
          placeholder="Search contacts"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <input
          type="checkbox"
          checked={showFavorites}
          onChange={handleShowFavorites}
        />
        Show Favorites only
      </div>
      <ul className="business-cards-container">
        {sortedProfiles.length === 0 ? (
          <p>No matching profiles</p>
        ) : (
          sortedProfiles.map((profile) => (
            <li key={profile.id} onClick={() => handleCardClick(profile)}>
              {((profile.favorite === true && showFavorites) ||
                !showFavorites) && (
                <div>
                  <BusinessCard
                    name={profile.name}
                    email={profile.email}
                    tel={profile.tel}
                    photo={profile.photo}
                  />
                  <Link to={`/profile/${profile.id}`}>details...</Link>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </main>
  );
};
