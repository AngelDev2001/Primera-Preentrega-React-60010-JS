import styled from "styled-components";
import { Product } from "./ui/Product";
import { products } from "../data-list/products";

export const Products = ({ category }) => {
  const productsView = products.filter((product) =>
    product.category === category ? true : category === "all" ? true : null
  );

  return (
    <Container>
      <div className="products-section">
        {productsView.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
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
