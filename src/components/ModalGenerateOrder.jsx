import { Button, Col, Input, Modal, Row } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const ModalGenerateOrder = ({ visibleForm, onSetVisibleForm }) => {
  return (
    <Modal
      title="Generador de orden"
      open={visibleForm}
      onCancel={() => onSetVisibleForm(false)}
      footer={false}
    >
      <GenerateOrder />
    </Modal>
  );
};

const GenerateOrder = () => {
  const schema = yup.object({
    name: yup.string().required(),
    lastName: yup.string().required(),
    phone: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    passwordConfirmation: yup.string().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Controller
            name="clientName"
            control={control}
            defaultValue=""
            render={() => <Input />}
          />
        </Col>
        <Col span={24}>
          <span>Apellido: </span>
          <Input {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </Col>
        <Col span={24}>
          <span>Teléfono: </span>
          <Input type="number" {...register("phone")} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </Col>
        <Col span={24}>
          <span>Correo: </span>
          <Input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </Col>
        <Col span={24}>
          <span>Contraseña: </span>
          <Input type="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </Col>
        <Col span={24}>
          <span>Confirmación de contraseña: </span>
          <Input
            type="password"
            {...register("passwordConfirmation", {
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.passwordConfirmation && (
            <span>{errors.passwordConfirmation.message}</span>
          )}
        </Col>
        <Col span={24}>
          <Button type="primary" block htmlType="submit">
            Enviar
          </Button>
        </Col>
      </Row>
    </form>
  );
};
