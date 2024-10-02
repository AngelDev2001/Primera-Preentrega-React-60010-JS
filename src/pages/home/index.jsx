import { useState } from "react";
import { Categories } from "../../components";
import { Products } from "../../components/Products";
import { useProductsCart } from "../../providers/ProductsCartProvider";

export const Home = () => {
  const { products } = useProductsCart();

  const [category, setCategory] = useState("all");

  return (
    <>
      <Categories onSetCategory={setCategory} />
      <Products category={category} products={products} />
    </>
  );
};
