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
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
