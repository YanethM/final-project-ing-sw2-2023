import React from "react";
import { Button } from "antd";
import Logo from "../../../assets/img/png/Logo.png";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import "./MenuTop.scss";
// MenuTop recibe las propiedades y se las comparte a menuSider
// Las propiedades las recibe de GeneralLayout
// Propiedad: Saber si el menu esta o no extendido
export const MenuTop = (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <img src={Logo} alt="Logo empresa" className="menu-top__left__logo" />
      </div>
    </div>
  );
};
