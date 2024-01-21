import React from "react";
import { Layout, Space, Typography } from "antd";
import { CustomButton } from "../customButton/CustomButton";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";
import { LoginOutlined, UserOutlined } from "@ant-design/icons";
import style from "./Header.module.css";

export const Header = () => {
  return (
    <Layout.Header className={style.header}>
      <Space>
        <Link to={Paths.home}>
          <CustomButton type="link">
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.login}>
          <CustomButton type="link" icon={<UserOutlined />}>
            Войти
          </CustomButton>
        </Link>
        <Link to={Paths.register}>
          <CustomButton type="link" icon={<LoginOutlined />}>
            Зарегестрироваться
          </CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  );
};
