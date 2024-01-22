import React from 'react'
import { Layout } from '../../components/layout/Layout'
import { Form, Row, Space, Typography, Card } from 'antd'
import { CustomInput } from '../../components/customInput/CustomInput'
import { PasswordInput } from '../../components/passwordInput/PasswordInput'
import { CustomButton } from '../../components/customButton/CustomButton'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Login = () => {
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Войти' style={{ width: '30rem' }}>
          <Form 
            initialValues={{ remember: true }}
            onFinish={() => null}>
            <CustomInput type='email' name='email' placeholder='Email' />
            <PasswordInput name='password' placeholder='Password' />
            <CustomButton type='primary' htmlType='submit'>Войти</CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Регистрация</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>

    </Layout>
  )
}
