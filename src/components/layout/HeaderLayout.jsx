import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Drawer, Input, Layout, Row } from "antd";
import "../../styles/header.css";
import {
  faBarsStaggered,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CartProducts } from "../CartProducts";
import styled from "styled-components";
import { useProductsCart } from "../../providers/ProductsCartProvider";

const { Header } = Layout;

export const HeaderLayout = () => {
  const navigate = useNavigate();
  const { cart, totalPrice } = useProductsCart();

  const [openDrawer, setOpenDrawer] = useState(false);

  const onNavigateCart = () => navigate("/cart");

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
        />
      </div>
      <NavBar onSetOpenDrawer={setOpenDrawer} />
      <Drawer
        title="Carrito de Compras"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      >
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <CartProducts cart={cart} />
          </Col>
          <Col span={24}>
            <WrapperDescription>
              <div>
                <span>Subtotal</span>
                <span>S/ {totalPrice}</span>
              </div>
              <div>
                <span>Total</span>
                <span>S/ {totalPrice}</span>
              </div>
              <Button block onClick={() => onNavigateCart()}>
                Finalizar mi compra
              </Button>
            </WrapperDescription>
          </Col>
        </Row>
      </Drawer>
    </Header>
  );
};

const WrapperDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    font-weight: 500;
  }
`;
