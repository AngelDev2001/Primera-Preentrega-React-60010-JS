import { CardWidgget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="./">Inicio</a>
        </li>
        <li>
          <a href="">Tienda</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
      </ul>
      <CardWidgget />
    </nav>
  );
};
