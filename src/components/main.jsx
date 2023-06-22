import { Hello } from './hello';

export const Main = (props) => {
  return (
    <main>
      <Hello name={props.name} />
    </main>
  );
};
