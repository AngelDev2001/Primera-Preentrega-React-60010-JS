import { Button, Divider, Space } from "antd";
import { Celular1 } from "../../images";
import styled from "styled-components";

export const Product = () => {
  return (
    <Container>
      <div className="image-container">
        <img src={Celular1} alt="" />
      </div>
      <div className="description">
        <span className="description__name">Galaxy S22 Ultra</span>
        <Space>
          <span className="description__price">S/ 32999</span>
          <span className="description__price-old">S/ 74999</span>
        </Space>
        <Divider />
        <Button type="link" block>
          Comprar
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
  background-color: #f5f5f5;
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
    padding: 0.8rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    background-color: #fff;
    &__name {
      font-size: 1.2rem;
      font-weight: 500;
    }
    &__price {
      font-size: 1.1rem;
      font-weight: 500;
    }
    &__price-old {
      font-size: 1.1rem;
      font-weight: lighter;
      text-decoration: line-through;
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
    padding: 1rem;
    background-color: #008ecc;
    color: #fff;
    font-weight: 500;
    border-radius: 0 1rem 0 1rem;
  }
`;
