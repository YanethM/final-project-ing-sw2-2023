import React from "react";
import "./MenuSider.scss";
import { useLocation, useNavigate } from "react-router-dom";

import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";

export const MenuSider = (props) => {
  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "/admin/users",
      icon: <UserOutlined />,
      label: <span className="navbar-text">Users</span>,
    },
    {
      key: "/admin/products",
      icon: <AppstoreOutlined />,
      label: <span className="navbar-text">Products</span>,
    },
    {
      key: "/admin",
      icon: <AppstoreOutlined />,
      label: <span className="navbar-text">Configuración</span>,
    },
  ];

  const menuClick = (e) => {
    const path = e.key;
    console.log("Di clic en el item del menú " + path);
    navigate(path);
  };

  return (
    <Sider className="menu-sider" collapsed={props.menuCollapsed}>
      <Menu
        className="menu-sider"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={menuClick}
        items={menuItems}
      />
    </Sider>
  );
};
