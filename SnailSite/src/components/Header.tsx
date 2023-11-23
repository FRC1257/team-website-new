import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1 className="text-red-500 text-4xl bold">Header</h1>
      {/* Links to home, about, contact, donate, and leadership */}
      <ul className="text-2xl mt-4">
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
