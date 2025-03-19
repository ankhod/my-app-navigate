import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Главная</Link> | <Link to="/profile">Профиль</Link> | <Link to="/about">О нас</Link>
    </nav>
  );
}

export default Navbar;
