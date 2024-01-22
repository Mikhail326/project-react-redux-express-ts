import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Form, Row, Space, Typography, Card } from 'antd'
import { CustomInput } from '../../components/customInput/CustomInput'
import { PasswordInput } from '../../components/passwordInput/PasswordInput'
import { CustomButton } from '../../components/customButton/CustomButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Register = () => {
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Регистрация' style={{ width: '30rem' }}>
          <Form
            initialValues={{ remember: true }}
            onFinish={() => null}>
            <CustomInput name='name' placeholder='Имя' />
            <CustomInput type='email' name='email' placeholder='Email' />
            <PasswordInput name='password' placeholder='Введите пароль' />
            <PasswordInput name='confirmPassword' placeholder='Повторите пароль' />
            <CustomButton type='primary' htmlType='submit'>Зарегестрироваться</CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Есть аккаунт? <Link to={Paths.login}>Войти</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>

    </Layout>
  )
}

