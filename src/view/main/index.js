import React from 'react';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
import Pages from '@/util/router/pages';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const mapStateToProps = state => {
  return {
    userInfo: state,
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: e => dispatch({ type: 'logOut' }),
});

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    const onClick = ({ key }) => {
      console.log(key);
      if (key === '1') {
        this.props.logOut();
      }
    };
    const menu = (
      <Menu onClick={onClick}>
        <Menu.Item key="1">退出登录</Menu.Item>
        <Menu.Item key="2">2nd memu item</Menu.Item>
        <Menu.Item key="3">3rd menu item</Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo} />
          <div className={styles.title}>React Admin</div>
          <div className={styles.user}>
            <Dropdown overlay={menu}>
              <a
                className={styles.userInfo}
                onClick={e => e.preventDefault()}
                href="#/"
              >
                张三
                <CaretDownOutlined />
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider className={styles.menuLeft} collapsed={this.state.collapsed}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Option 1
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Option 2
              </Menu.Item>
              <Menu.Item key="3" icon={<ContainerOutlined />}>
                Option 3
              </Menu.Item>
              <SubMenu
                key="sub1"
                icon={<MailOutlined />}
                title="Navigation One"
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<AppstoreOutlined />}
                title="Navigation Two"
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Pages></Pages>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
