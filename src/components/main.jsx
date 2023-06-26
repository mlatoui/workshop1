import { Hello } from './hello';
import BusinessCard from './BusinessCard';

export const Main = (props) => {
  return (
    <main class="main">
      <Hello name={props.name} />
      <div className="business-cards-container">
        <BusinessCard
          name="Person One"
          email="person.one@mcgill.com"
          tel="438-000-0000"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Person Two"
          email="person.two@mcgill.com"
          tel="438-000-0000"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Person Three"
          email="person.three@mcgill.com"
          tel="438-000-0000"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Person Four"
          email="person.four@mcgill.com"
          tel="438-000-0000"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Person Five"
          email="person.five@mcgill.com"
          tel="438-000-0000"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
        <BusinessCard
          name="Person Six"
          email="person.six@mcgill.com"
          tel="438-000-0000"
          photo="https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png"
        />
      </div>
    </main>
  );
};
