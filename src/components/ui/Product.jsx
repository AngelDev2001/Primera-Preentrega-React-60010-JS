import { Button, Divider, Space } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useProductsCart } from "../../providers/ProductsCart";

export const Product = ({ id, image, name, price }) => {
  const navigate = useNavigate();
  const { onAddProductCart } = useProductsCart();

  const onNavigateProductDetails = () => navigate(`/products/${id}`);

  return (
    <Container>
      <div className="image-container" onClick={onNavigateProductDetails}>
        <img src={image} alt="" />
      </div>
      <div className="description">
        <Space direction="vertical">
          <span
            className="description__name"
            onClick={onNavigateProductDetails}
          >
            {name}
          </span>
          <span className="description__price">S/ {price}</span>
        </Space>
        <Divider style={{ margin: "1rem 0" }} />
        <Button type="link" block onClick={() => onAddProductCart(id)}>
          Agregar al carrito
        </Button>
      </div>
      <div className="discount">
        <span>56%</span>
        <span>OFF</span>
      </div>
    </Container>
  );
};

const Container = styled.article`
  position: relative;
  border-radius: 1rem;
  border: 1px solid #ededed;
  overflow: hidden;
  transition: 0.3s border ease-in-out;

  &:hover {
    border: 1px solid #008ecc;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.1rem;
    cursor: pointer;

    img {
      width: 100%;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    background-color: #fff;
    &__name {
      font-weight: 500;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    &__price {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }

  button {
    color: #249b3e;
    font-weight: 500;
  }

  .discount {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    font-size: 0.7rem;
    background-color: #008ecc;
    color: #fff;
    font-weight: 500;
    border-radius: 0 1rem 0 1rem;
  }
`;
