import { Hello } from './hello';
import BusinessCard from './BusinessCard';

export const Main = (props) => {
  const { name, profiles } = props;
  return (
    <main className="main">
      <Hello name={name} />
      <ul className="business-cards-container">
        {profiles.length === 0 ? (
          <p>No data</p>
        ) : (
          profiles.map((p, i) => (
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
