import { Link } from 'react-router-dom';

export const Home = () => <h1>Home</h1>;
export const About = () => <h1>About</h1>;
export const Contact = () => <h1>Contact</h1>;
export const Nav = () => {
  const menuItems = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'About', url: '/about' },
    { id: 4, title: 'Contact', url: '/contact' },
  ];

  return (
    <nav className="nav">
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
