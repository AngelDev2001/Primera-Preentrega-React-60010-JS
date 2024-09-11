import { useParams } from "react-router-dom";
import { products } from "../../data-list";
import styled from "styled-components";
import { Button } from "antd";

export const Details = () => {
  const { productId } = useParams();

  const product = products.find((_product) => _product.id === productId);

  return (
    <Container>
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="details">
        <h2>{product.name}</h2>
        <span>S/ {product.price}</span>
        <h3>Descripción:</h3>
        <p>{product.description}</p>
        <Button>Agregar al carrito</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2.5rem;

    @media screen and (min-width: 1024px) {
      flex: 1 1 0;
    }

    img {
      width: 100%;
      max-width: 30rem;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2.5rem;

    @media screen and (min-width: 1024px) {
      flex: 1 1 0;
    }

    h2,
    h3 {
      font-weight: 500;
    }

    button {
      border: 1px solid #249b3e;

      &:hover {
        background-color: #249b3e !important;
        color: #fff !important;
      }
    }
  }
`;
