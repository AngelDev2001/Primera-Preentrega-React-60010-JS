import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Layout } from "antd";
import "../../styles/header.css";
import {
  faBarsStaggered,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const { Header } = Layout;

export const HeaderLayout = () => {
  return (
    <Header>
      <div className="wrapper-content">
        <div className="icon-bars-staggered">
          <FontAwesomeIcon icon={faBarsStaggered} size="lg" />
        </div>
        <h1>MegaMall</h1>
        <FontAwesomeIcon
          icon={faCartShopping}
          size="lg"
          className="icon-cart-shopping-top"
        />
      </div>
      <div className="search-container">
        <Input
          placeholder="Buscar productos"
          size="large"
          variant="borderless"
          prefix={
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              className="icon-magnifying-glass"
            />
          }
          // suffix={
          //   <FontAwesomeIcon icon={faList} size="lg" className="icon-list" />
          // }
        />
      </div>
      <NavBar />
    </Header>
  );
};
