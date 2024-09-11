import { Button, Space } from "antd";
import { CategoriesList } from "../data-list";
import "../styles/categories.css";

export const Categories = ({ onSetCategory }) => {
  return (
    <section className="categories-section">
      {CategoriesList.map((category, index) => (
        <Button onClick={() => onSetCategory(category.code)} key={index}>
          <Space>{category.title}</Space>
        </Button>
      ))}
    </section>
  );
};
