import { Button, Col, Modal, notification, Row } from "antd";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { db } from "../firebase";

export const ModalNewProduct = ({ visibleForm, onSetVisibleForm }) => {
  const [loading, setLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.success({
      message: "Se guardó correctamente el producto.",
      placement,
    });
  };

  const mapForm = (formData, id) => ({
    id,
    name: formData.name,
    description: formData.description,
    image: formData.image,
    price: formData.price,
    category: formData.category,
    brand: formData.brand,
    creatAt: new Date(),
    updateAt: new Date(),
  });

  const onSaveItem = async (formData) => {
    try {
      setLoading(true);

      const docRef = doc(collection(db, "items"));

      await setDoc(docRef, mapForm(formData, docRef.id));

      onSetVisibleForm(false);
      openNotification("bottomLeft");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title="Generador de orden"
      open={visibleForm}
      closable
      onCancel={() => onSetVisibleForm(false)}
      destroyOnClose
      footer={false}
    >
      {contextHolder}
      <NewProduct
        onSaveItem={onSaveItem}
        loading={loading}
        visibleForm={visibleForm}
      />
    </Modal>
  );
};

const NewProduct = ({ onSaveItem, loading, visibleForm }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = (formData) => onSaveItem(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapperRow gutter={[16, 16]}>
        <Col span={24}>
          <span>Nombre: </span>
          <input
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.name && <span>{errors.name.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Descripción: </span>
          <input
            type="text"
            {...register("description", {
              required: {
                value: true,
                message: "Descripción es requerido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.description && <span>{errors.description.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Imagen: </span>
          <input
            type="text"
            {...register("image", {
              required: {
                value: true,
                message: "Imagen es requerido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.image && <span>{errors.image.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Precio: </span>
          <input
            type="number"
            {...register("price", {
              required: {
                value: true,
                message: "Precio es requerido",
              },
              minLength: {
                value: 2,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.price && <span>{errors.price.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Categoría: </span>
          <input
            type="text"
            {...register("category", {
              required: {
                value: true,
                message: "Categoría es requerido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.category && <span>{errors.category.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Marca: </span>
          <input
            type="text"
            {...register("brand", {
              required: {
                value: true,
                message: "Marca es requerido.",
              },
              minLength: {
                value: 2,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.brand && <span>{errors.brand.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            block
            htmlType="submit"
            disabled={loading}
            loading={loading}
          >
            Realizar compra
          </Button>
        </Col>
      </WrapperRow>
    </form>
  );
};

const WrapperRow = styled(Row)`
  input {
    width: 100%;
    height: 2rem;
    border: 1px solid #dadada;
    border-radius: 0.3rem;
    padding: 0 0.5rem;
  }
`;

const WrapperMessage = styled.div`
  span {
    font-size: 0.7rem;
    color: red;
  }
`;
