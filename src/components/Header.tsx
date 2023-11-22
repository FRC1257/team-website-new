const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      {/* Links to home, about, contact, donate, and leadership */}
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/donate">Donate</a>
        </li>
        <li>
          <a href="/leadership">Leadership</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
