import React from 'react'
import { Form, Input } from 'antd'
import { NamePath } from 'antd/es/form/interface';

type Props = {
  name?: string;
  placeholder?: string;
  dependencies?: NamePath[]
}


export const PasswordInput = ({
  name,
  placeholder,
  dependencies,
}: Props) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      rules={[
        { required: true, message: 'Обязательное поле' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve()
            }
            if (name === 'confirmPassword') {
              if (!value || getFieldValue(('password')) === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('Пароли должны совпадать'))
            } else {
              if (value.length < 6) {
                return Promise.reject(new Error('пароль должен быть больше 6 символов'))
              }
              return Promise.resolve()
            }
          }
        })]}
      hasFeedback>
      <Input.Password
        size='large'
        placeholder={placeholder} />
    </Form.Item>
  )
}
