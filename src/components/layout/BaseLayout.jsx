import { Layout } from "antd";
import { FooterLayout } from "./FooterLayout";
import { HeaderLayout } from "./HeaderLayout";

const { Content } = Layout;

export const BaseLayout = ({ children }) => {
  return (
    <Layout>
      <HeaderLayout />
      <Content>
        <div className="site-layout-background">{children}</div>
      </Content>
      <FooterLayout />
    </Layout>
  );
};
