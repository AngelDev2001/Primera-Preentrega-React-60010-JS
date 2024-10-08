import { Button, Divider, Input } from "antd";
import { useProductsCart } from "../../providers/ProductsCartProvider";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { ModalGenerateOrder } from "../../components/ModalGenerateOrder";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import { ModalNewProduct } from "../../components/ModalNewProduct";

export const Cart = () => {
  const {
    cart,
    onDecreaseQuantity,
    onIncreaseQuantity,
    totalPrice,
    productsQuantity,
  } = useProductsCart();

  const [visibleForm, setVisibleForm] = useState(false);
  const [visibleFormProduct, setVisibleFormProduct] = useState(false);
  const [orders, setOrders] = useState([]);

  const emailUser = localStorage.getItem("emailUser");

  console.log("emailUser: ", emailUser);

  useEffect(() => {
    (async () => {
      const _orders = await getDocs(
        query(collection(db, "orders"), where("email", "==", emailUser))
      );
      setOrders(_orders.docs.map((doc) => doc.data()));
    })();
  }, [visibleForm, orders.length]);

  return (
    <WrapperContent>
      <div className="products">
        <h2>Carrito ({productsQuantity} productos)</h2>
        <div className="products-list">
          {cart.map((product) => (
            <article key={product?.id}>
              <div className="product">
                <div>
                  <img src={product?.image} alt="" />
                </div>
                <div className="product-description">
                  <span className="product-name">{product?.name}</span>
                  <span className="product-brand">{product?.brand}</span>
                </div>
                <div className="product-quantity">
                  <Input
                    value={product?.quantity}
                    addonBefore={
                      <FontAwesomeIcon
                        icon={faMinus}
                        onClick={() => onDecreaseQuantity(product?.id)}
                        style={{ cursor: "pointer" }}
                      />
                    }
                    addonAfter={
                      <FontAwesomeIcon
                        icon={faPlus}
                        onClick={() => onIncreaseQuantity(product?.id)}
                        style={{ cursor: "pointer" }}
                      />
                    }
                  />
                </div>
                <div></div>
              </div>
              <Divider style={{ margin: "1rem 0" }} />
            </article>
          ))}
        </div>
      </div>
      <div className="summary">
        <h2>Resumen de la orden</h2>
        <div className="summary-details">
          <div>
            <span>Productos ({productsQuantity})</span>
            <span>S/ {totalPrice}</span>
          </div>
          <div>
            <span>Total</span>
            <span>S/ {totalPrice}</span>
          </div>
          <Button block onClick={() => setVisibleForm(true)}>
            Generar orden
          </Button>
          <Button block onClick={() => setVisibleFormProduct(true)}>
            Agregar Producto
          </Button>
        </div>
        <div className="orders">
          <span className="orders-title">Mis ordenes</span>
          <div className="order-content">
            {orders.map((order) => (
              <div key={order.id}>
                <span>
                  Código: <strong>{order.id}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalGenerateOrder
        cart={cart}
        visibleForm={visibleForm}
        onSetVisibleForm={setVisibleForm}
      />

      <ModalNewProduct
        visibleForm={visibleFormProduct}
        onSetVisibleForm={setVisibleFormProduct}
      />
    </WrapperContent>
  );
};

const WrapperContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }

  img {
    width: 6rem;
  }

  .products-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 1px 1px #f3ecec;
  }

  .product {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    font-weight: 500;
  }

  .product-brand {
    text-transform: uppercase;
    font-size: 0.8rem;
  }

  .product-quantity {
    width: 7rem;
    margin-left: auto;
  }

  .summary {
    width: 25rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2 {
      font-weight: 500;
    }
  }

  .summary-details {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 1px 1px #f3ecec;

    & > div {
      display: flex;
      justify-content: space-between;
      font-weight: 500;
    }
  }

  .orders {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.8rem;
    box-shadow: 0 0 1px 1px #f3ecec;

    .orders-title {
      font-weight: 500;
    }

    .order-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-radius: 0.8rem;
        box-shadow: 0 0 1px 1px #f3ecec;
      }
    }
  }
`;
