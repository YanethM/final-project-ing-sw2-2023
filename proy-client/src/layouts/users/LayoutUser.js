/* rafc */
import React, { useState } from "react";
import { Layout } from "antd";
import { MenuSider } from "../../components/MenuComponent/MenuSider/MenuSider";
import "./LayoutUser.scss";

export const LayoutUser = (props) => {
  const { children } = props;
  const { Content, Header, Footer } = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-general"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};
