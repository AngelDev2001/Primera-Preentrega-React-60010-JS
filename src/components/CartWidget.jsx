import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardWidgget = () => {
  return (
    <div className="icon-cart">
      <div className="icon-cart-shopping">
        <FontAwesomeIcon icon={faCartShopping} size="lg" />
      </div>
      <span>1</span>
    </div>
  );
};
