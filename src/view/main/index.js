import React from 'react'
<<<<<<< HEAD
import { Layout, Menu, Dropdown, message } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { CaretDownOutlined } from '@ant-design/icons'
=======
import { Layout, Menu, Breadcrumb, Dropdown, message, Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  CaretDownOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
import styles from './index.module.scss'
import Pages from '@/util/router/pages'
import MenuLeft from './menu'

<<<<<<< HEAD
const { Header, Content } = Layout
=======
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71

const mapStateToProps = (state) => {
  console.log(state)
  return {
<<<<<<< HEAD
    userInfo: state.user,
=======
    userInfo: state,
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOut: (e) => dispatch({ type: 'logOut' }),
})

class Main extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  state = {
    collapsed: false,
  }
  select = (e) => {
    this.props.history.replace(e.key)
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  onClick = async ({ key }) => {
<<<<<<< HEAD
    if (key === '1') {
      await message.success('登出成功！', 1)
      await this.props.logOut()
      this.props.history.replace('/login')
      // window.location.reload()
=======
    console.log(key)
    if (key === '1') {
      await message.success('登出成功！', 1)
      await this.props.logOut()
      // this.props.history.replace('/login')
      window.location.reload()
>>>>>>> 46307c121e4f888d2739e52a6f70c94470799f71
    }
  }
  render() {
    const userAction = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="1">退出登录</Menu.Item>
      </Menu>
    )
    return (
      <Layout className={styles.page}>
        <Header className={styles.header}>
          <div className={styles.logo} />
          <div className={styles.title}>React Admin</div>
          <div className={styles.user}>
            <Dropdown overlay={userAction}>
              <a
                className={styles.userInfo}
                onClick={(e) => e.preventDefault()}
                href="#/"
              >
                {this.props.userInfo.name}
                <CaretDownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <MenuLeft />
          <Content className={styles.content}>
            <Pages></Pages>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
