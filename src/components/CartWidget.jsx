import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsCart } from "../providers/ProductsCartProvider";

export const CardWidgget = ({ onSetOpenDrawer }) => {
  const { cartLength } = useProductsCart();

  return (
    <div className="icon-cart">
      <div className="icon-cart-shopping">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          onClick={() => onSetOpenDrawer(true)}
        />
      </div>
      <span>{cartLength}</span>
    </div>
  );
};
