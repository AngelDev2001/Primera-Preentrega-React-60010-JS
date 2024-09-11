import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

export const FooterLayout = () => {
  return (
    <Container>
      <Footer>
        <p>&copy;2024 Desarrollado por Angel Gala</p>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  footer {
    width: 100%;
    background-color: #008ecc !important;
    color: #fff;
    display: flex;
    justify-content: center;
  }
`;
