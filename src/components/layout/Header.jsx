import { NavBar } from "../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <FontAwesomeIcon icon={faGooglePlay} />
      </div>
      <NavBar />
    </header>
  );
};
