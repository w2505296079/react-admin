import React from 'react'
import { Layout, Menu, Button } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  PieChartOutlined,
  MailOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import styles from './index.module.scss'

const { SubMenu } = Menu
const { Sider } = Layout

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

class MenuLeft extends React.Component {
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

  render() {
    const { pathList } = this.props.userInfo
    console.log(pathList)
    const MenuList = pathList.map((item) => {
      return (
        (!item.children.length && (
          <Menu.Item key={item.path} icon={<PieChartOutlined />}>
            {item.pathName}
          </Menu.Item>
        )) || (
          <SubMenu
            key={item.path}
            icon={<MailOutlined />}
            title={item.pathName}
          >
            {item.children.map((items) => {
              return <Menu.Item key={items.path}>{items.pathName}</Menu.Item>
            })}
          </SubMenu>
        )
      )
    })
    console.log(MenuList)
    return (
      <Sider className={styles.menuLeft} collapsed={this.state.collapsed}>
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          className={styles.menuBtn}
        >
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          )}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          onSelect={this.select}
        >
          {MenuList}
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(connect(mapStateToProps)(MenuLeft))
