import { Link } from "react-router-dom";
import { CardWidgget } from "../CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Nosotros</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
      <CardWidgget />
    </nav>
  );
};
