import { Hello } from './hello';
import BusinessCard from './BusinessCard';

export const Main = (props) => {
  const { name, profiles } = props;
  return (
    <main className="main">
      <Hello name={name} />
      <div className="business-cards-container">
        {profiles.map((p, i) => (
          <BusinessCard
            key={i}
            name={p.name}
            email={p.email}
            tel={p.tel}
            photo={p.photo}
          />
        ))}
      </div>
    </main>
  );
};
