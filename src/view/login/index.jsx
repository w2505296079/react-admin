import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { connect } from 'react-redux'
const Login = (props) => {
  console.log(props)
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    if (values.password === 'a' && values.username === 'a') {
      props.history.replace('/')
    }
  }
  return (
    <div className={styles.loginDiv}>
      <h1>REACT-ADMIN</h1>
      <Form
        name="normal_login"
        className={styles.login_form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className={styles.icon} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.button}>
            登 录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    userInfo: state,
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: 'login', params: { loginState: 'sss' } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
