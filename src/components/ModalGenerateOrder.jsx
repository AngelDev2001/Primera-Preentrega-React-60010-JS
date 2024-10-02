import { Button, Col, Modal, notification, Row } from "antd";
import { collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { db } from "../firebase";

export const ModalGenerateOrder = ({ cart, visibleForm, onSetVisibleForm }) => {
  const [loading, setLoading] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (placement) => {
    api.success({
      message: "Se creó correctamente la orden.",
      placement,
    });
  };

  const mapForm = (formData, id) => ({
    id,
    clientName: formData.clientName,
    clientLastname: formData.clientLastname,
    phone: formData.phone,
    email: formData.email,
    emailConfirmation: formData.emailConfirmation,
    products: cart,
    creatAt: new Date(),
  });

  const onSaveOrder = async (formData) => {
    try {
      setLoading(true);

      const docRef = doc(collection(db, "orders"));

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
      <GenerateOrder
        onSaveOrder={onSaveOrder}
        loading={loading}
        visibleForm={visibleForm}
      />
    </Modal>
  );
};

const GenerateOrder = ({ onSaveOrder, loading, visibleForm }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm();

  const onSubmit = (formData) => onSaveOrder(formData);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <WrapperRow gutter={[16, 16]}>
        <Col span={24}>
          <span>Nombre: </span>
          <input
            type="text"
            {...register("clientName", {
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
            {errors.clientName && <span>{errors.clientName.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Apellido: </span>
          <input
            type="text"
            {...register("clientLastname", {
              required: {
                value: true,
                message: "Apellido es requerido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.clientLastname && (
              <span>{errors.clientLastname.message}</span>
            )}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Teléfono: </span>
          <input
            type="number"
            {...register("phone", {
              required: {
                value: true,
                message: "Teléfono es requerido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.phone && <span>{errors.phone.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Correo: </span>
          <input
            type="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$/,
                message: "Correo ingresado no es válido",
              },
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.email && <span>{errors.email.message}</span>}
          </WrapperMessage>
        </Col>
        <Col span={24}>
          <span>Confirmación de correo: </span>
          <input
            type="email"
            {...register("emailConfirmation", {
              required: {
                value: true,
                message: "Debe confirmar el correo",
              },
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$/,
                message: "Correo ingresado no es válido",
              },
              validate: (value) =>
                value === watch("email") || "No coincide el correo ingresado.",
              minLength: {
                value: 5,
                message: "",
              },
            })}
          />
          <WrapperMessage>
            {errors.emailConfirmation && (
              <span>{errors.emailConfirmation.message}</span>
            )}
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
