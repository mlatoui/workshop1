import { Hello } from './hello';

export const Main = (props) => {
  return (
    <main class="main">
      <Hello name={props.name} />
    </main>
  );
};
