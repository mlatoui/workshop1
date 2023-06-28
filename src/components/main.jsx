import { useState } from 'react';
import { Hello } from './hello';
import BusinessCard from './BusinessCard';

export const Main = (props) => {
  const { name, profiles } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('ascending');

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name &&
      profile.name.toLowerCase().trim(' ').includes(searchTerm.toLowerCase())
  );

  const sortedProfiles = filteredProfiles.sort((a, d) => {
    const nameDesc = a.name.toLowerCase();
    const nameAsc = d.name.toLowerCase();
    if (sortOrder === 'ascending') {
      return nameDesc.localeCompare(nameAsc);
    } else {
      return nameAsc.localeCompare(nameDesc);
    }
  });

  return (
    <main className="main">
      <Hello name={name} />
      <div className="search-and-sort">
        <input
          type="text"
          placeholder="Search contacts"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <label htmlFor="sortOrder">Sort by:</label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={(event) => {
            setSortOrder(event.target.value);
          }}
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <br />
      <br />
      <br />
      <ul className="business-cards-container">
        {sortedProfiles.length === 0 ? (
          <p>No matching profiles</p>
        ) : (
          sortedProfiles.map((p, i) => (
            <li key={i}>
              <BusinessCard
                name={p.name}
                email={p.email}
                tel={p.tel}
                photo={p.photo}
              />
            </li>
          ))
        )}
      </ul>
    </main>
  );
};
