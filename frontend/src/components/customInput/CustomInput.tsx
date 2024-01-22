import { Input, Form } from "antd";
import React from "react";

type Props = {
    name?: string;
    type?: string;
    placeholder?: string;
};

export const CustomInput = ({
    name,
    type = 'text',
    placeholder
}: Props) => {
    return (
        <Form.Item name={name} shouldUpdate={true} rules={[{required: true, message:'Обязательное поле'}]}>
            <Input
                type={type}
                placeholder={placeholder}
                size="large"
            />
        </Form.Item>
    );
};
