import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import Booking from './components/Booking/Booking'
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends Component {

  render() {

    return (

      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">My Bookings</Menu.Item>

          </Menu>
        </Header>

        <Content className='Content' style={{ padding: '0 50px', backgroundColor: '#fff' }}>
          <Booking />

        </Content>
        <Footer className='Footer' >Saafirtech company ©2020</Footer>

      </Layout>
    );
  }
}

export default App;
