import { Button, Form } from "antd";
import React from "react";

type Props = {
  children: React.ReactNode;
  htmlType?: "button" | "submit" | "reset" | undefined;
  danger?: boolean;
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  loading?: boolean;
  icon?: React.ReactNode;
  shape?: "default" | "circle" | "round" | undefined;
};

export const CustomButton = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  icon,
  shape
}: Props) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        loading={loading}
        icon={icon}
        danger={danger}
        shape={shape}
      >
        {children}
      </Button>
    </Form.Item>
  );
};
