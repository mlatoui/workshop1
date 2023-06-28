import React, { useState } from 'react';
import { Hello } from './hello';
import { BusinessCard } from './BusinessCard';

export const Main = ({ name, profiles }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name &&
      profile.name.toLowerCase().trim().includes(searchTerm.toLowerCase())
  );

  const sortedProfiles = filteredProfiles.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return sortOrder === 'ascending'
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
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
      </div>
      <ul className="business-cards-container">
        {sortedProfiles.length === 0 ? (
          <p>No matching profiles</p>
        ) : (
          sortedProfiles.map((profile, index) => (
            <li key={index}>
              <BusinessCard
                name={profile.name}
                email={profile.email}
                tel={profile.tel}
                photo={profile.photo}
              />
            </li>
          ))
        )}
      </ul>
    </main>
  );
};
