import { Layout, Menu, Breadcrumb } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
} from '@ant-design/icons';
import './App.css';
import Home from './Home';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import Smile from './Smile';
import Settings from './Settings';
import RandomShow from './RandomShow';
import 'antd/dist/antd.css';
const { Component } = require("react");

const { Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    menuKey: ['1'],
  };

  componentDidMount() {
      this.props.history.listen(route => {
          const pathName = route.pathname;
          console.log(pathName)
          let key = '1';
          if (pathName.startsWith("/smile")) {
              key = '2';
          } else if (pathName.startsWith("/settings")) {
              key = '3';
          }
          this.setState({
              menuKey: [key]
          })
      })
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" selectedKeys={this.state.menuKey}>
            <Menu.Item key='1' icon={<HomeOutlined/>}>
                Home
                <Link to="/"/>
            </Menu.Item>
            <Menu.Item key='2' icon={<SmileOutlined/>}>
                Smile
                <Link to="/smile"/>
            </Menu.Item>
            <Menu.Item key='3' icon={<SettingFilled/>}>
                Settings
                <Link to="/settings"/>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/smile" exact component={Smile}/>
                <Route path="/settings" exact component={Settings}/>
                <Route path="/settings/:id" exact component={RandomShow}/>
            </Router>
        </Layout>
      </Layout>
    );
  }
}

export default App;