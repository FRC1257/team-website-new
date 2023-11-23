import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      {/* Links to home, about, contact, donate, and leadership */}
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/donate">Donate</NavLink>
        </li>
        <li>
          <NavLink to="/leadership">Leadership</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
