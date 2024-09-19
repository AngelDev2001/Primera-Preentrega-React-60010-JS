import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Divider, Input } from "antd";
import { useProductsCart } from "../providers/ProductsCartProvider";

export const CartProducts = ({ cart }) => {
  const { onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    useProductsCart();

  return (
    <Container>
      {cart.length !== 0 ? (
        cart.map((product) => (
          <div key={product?.id}>
            <article>
              <div className="wrapper-image">
                <img src={product?.image} alt="" />
              </div>
              <div className="wrapper-description">
                <h3>{product?.name}</h3>
                <div>
                  <div className="product-quantity">
                    <Input
                      value={product?.quantity}
                      addonBefore={
                        <FontAwesomeIcon
                          icon={faMinus}
                          onClick={() => onDecreaseQuantity(product?.id)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                      addonAfter={
                        <FontAwesomeIcon
                          icon={faPlus}
                          onClick={() => onIncreaseQuantity(product?.id)}
                          style={{ cursor: "pointer" }}
                        />
                      }
                    />
                  </div>
                  <span>S/ {product?.price}</span>
                </div>
              </div>
              <div className="icon-delete">
                <FontAwesomeIcon
                  icon={faTrash}
                  size="lg"
                  style={{ cursor: "pointer" }}
                  onClick={() => onDeleteProduct(product?.id)}
                />
              </div>
            </article>
            <Divider style={{ margin: "1rem 0" }} />
          </div>
        ))
      ) : (
        <div>No hay productos</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 35rem;
  overflow-y: auto;
  article {
    height: 8rem;
    display: flex;
    gap: 1rem;

    .wrapper-image {
      min-width: 6rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .wrapper-description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        font-size: 0.8rem;
        font-weight: 500;
      }

      & > div {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .product-quantity {
        width: 7rem;
      }

      span {
        font-weight: 500;
      }
    }

    .icon-delete {
      margin-left: auto;
      align-self: center;
    }
  }
`;
