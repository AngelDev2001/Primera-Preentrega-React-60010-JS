import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardWidgget = ({ onSetOpenDrawer }) => {
  return (
    <div className="icon-cart">
      <div className="icon-cart-shopping">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          onClick={() => onSetOpenDrawer(true)}
        />
      </div>
      <span>1</span>
    </div>
  );
};
