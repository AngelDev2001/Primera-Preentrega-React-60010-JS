import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardWidgget = () => {
  return (
    <div className="icon-cart">
      <FontAwesomeIcon icon={faBagShopping} />
      <span>1</span>
    </div>
  );
};
