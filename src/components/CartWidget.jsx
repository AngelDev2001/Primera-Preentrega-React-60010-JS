import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useProductsCart } from "../providers/ProductsCartProvider";
import styled from "styled-components";

export const CardWidgget = ({ onSetOpenDrawer }) => {
  const { cartLength } = useProductsCart();

  return (
    <Container>
      <div className="icon-cart-shopping">
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          onClick={() => onSetOpenDrawer(true)}
        />
      </div>
      <span>{cartLength}</span>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  .icon-cart-shopping {
    order: 3;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #008ecc;
    cursor: pointer;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;
    font-size: 0.7rem;
    background-color: #000;
    color: #fff;
  }
`;
