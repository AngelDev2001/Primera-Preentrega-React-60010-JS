import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Drawer, Input, Layout } from "antd";
import "../../styles/header.css";
import {
  faBarsStaggered,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const { Header } = Layout;

export const HeaderLayout = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Header>
      <div className="wrapper-content">
        <div className="icon-bars-staggered">
          <FontAwesomeIcon icon={faBarsStaggered} size="lg" />
        </div>
        <Link to="/">
          <h1>MegaMall</h1>
        </Link>
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
      <NavBar onSetOpenDrawer={setOpenDrawer} />
      <Drawer
        title="Carrito de Compras"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </Header>
  );
};
