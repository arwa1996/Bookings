import React, { Component } from 'react';
import './App.css';
import Tour from './components/Tours/Tour'
import { Modal } from 'antd';
import oldCairo from '../src/components/Tours/images/oldcairo.jpg';
import Egyptian from '../src/components/Tours/images/Egyption.jpg';
import pyramids from '../src/components/Tours/images/pyramids.jpg';
import tahrirSquare from '../src/components/Tours/images/tahrirSquare.jpg';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

class App extends Component {

  state = {
    tours: [
      { id: '1', name: 'OldCairo', adults: '10', children: '5', infantNumber: '55', Date: '1/1/2020', Amount: '100 LE', imgSrc: oldCairo },
      { id: '2', name: 'Egyptian Museum', adults: '30', children: '0', infantNumber: '31', Date: '1/1/2020', Amount: '150 LE', imgSrc: Egyptian },
      { id: '3', name: 'Pyramids', adults: '70', children: '3', infantNumber: '15', Date: '1/1/2020', Amount: '500 LE', imgSrc: pyramids },
      { id: '4', name: 'Tahrir Square', adults: '20', children: '6', infantNumber: '115', Date: '1/1/2020', Amount: '200 LE', imgSrc: tahrirSquare }
    ],
    showTours: false,
    visible: false,
    clickedTour: {}

  }

  showModal = (index) => {
    console.log(index)
    this.setState({
      visible: true,
      clickedTour: this.state.tours[index]
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  toursHandler = () => {
    console.log('it is clickable')
  }

  render() {

    let tours
    const name = this.state.clickedTour.name;
    const adults = this.state.clickedTour.adults;
    const children = this.state.clickedTour.children;
    const date = this.state.clickedTour.Date;
    const infantNumber = this.state.clickedTour.infantNumber;
    const amount = this.state.clickedTour.Amount;
    const imgSrc = this.state.clickedTour.imgSrc;

    tours =
      <div>
        {this.state.tours.map((tour, index) => {

          return (
            <div className="Tour" key={index} onClick={() => this.showModal(index)}>
              <p>{tour.name}</p>
            </div>
          );
        })
        }

      </div>


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

          <div className="App">
            {tours}
            <Modal
              title={name}
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Tour
                name={name}
                adults={adults}
                children={children}
                date={date}
                infantNumber={infantNumber}
                amount={amount}
              />

              <img src={imgSrc} style={{
                position: 'relative',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }} />
            </Modal>

          </div>
        </Content>
        <Footer className='Footer' >Saafirtech company ©2020</Footer>

      </Layout>
    );

  }
}

export default App;
