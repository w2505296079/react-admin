import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styles from './index.module.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
const Login = (props) => {
  const { login } = props
  const onFinish = (values) => {
    if (values.password === 'a' && values.username === 'a') {
      const a = async () => {
        await message.success('登陆成功！', 1)

        const user = {
          name: '张三',
          token: '#@$ASFASF^&$^DFGSDFGSXCSASFSDFSF^$%^#HDGF',
          pathList: [
            {
              id: 1,
              parentId: 0,
              path: '/',
              pathName: 'home',
              children: [],
              location: '/view/pages/home',
            },
            {
              id: 2,
              parentId: 0,
              path: '/about',
              pathName: 'about',
              children: [],
              location: '/view/pages/about',
            },
            {
              id: 3,
              parentId: 0,
              path: '/charts',
              pathName: 'charts',
              location: '/view/pages/charts',
              children: [
                {
                  id: 4,
                  parentId: 3,
                  path: '/charts/theta',
                  pathName: 'theta',
                  children: [],
                  location: '/view/pages/Charts/theta',
                },
                {
                  id: 5,
                  parentId: 3,
                  path: '/charts/area',
                  pathName: 'area',
                  children: [],
                  location: '/view/pages/Charts/area',
                },
              ],
            },
          ],
        }
        await login(user)
        // props.history.replace('/')
        window.location.reload()
      }
      a()
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
    userInfo: state.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (e) => dispatch({ type: 'login', params: { ...e } }),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
