import React from "react";
import { Layout as AntdLayout } from "antd";
import style from "./Layout.module.css";
import { Header } from "../header/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={style.container}>
      <Header />
      <AntdLayout.Content style={{height: '100%' }}>
        {children}
      </AntdLayout.Content>
    </div>
  );
};
