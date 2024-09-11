import styled from "styled-components";
import { Product } from "./ui/Product";

export const Products = () => {
  return (
    <Container>
      <div className="products-section">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 2rem 3rem;
  .products-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;
