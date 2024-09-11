import { useState } from "react";
import { Categories } from "../../components";
import { Products } from "../../components/Products";

export const Home = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <Categories onSetCategory={setCategory} />
      <Products />
    </>
  );
};
