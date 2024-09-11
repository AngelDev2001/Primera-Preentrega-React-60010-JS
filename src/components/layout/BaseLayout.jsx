import { Layout } from "antd";
import { FooterLayout } from "./FooterLayout";
import { HeaderLayout } from "./HeaderLayout";
import styled from "styled-components";

const { Content } = Layout;

export const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <HeaderLayout />
      <Content>
        <Container>
          <div className="site-layout-background">{children}</div>
        </Container>
      </Content>
      <FooterLayout />
    </Layout>
  );
};

const Container = styled.div`
  .site-layout-background {
    min-height: 85vh;
    background-color: #fff;
  }
`;
