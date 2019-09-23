import React, { Component } from 'react';
import plant from '../utils/plant.jpg';
import beer from '../utils/beer.jpeg';
import weather from  '../utils/weather.png';
import temperature from  '../utils/temp_large_image.jpg';
import visitor from '../utils/user.jpeg'
import tt from '../utils/tt.jpeg'
import { Container,Header,Card, Icon, Image } from 'semantic-ui-react'
import './App.scss';
import Item from './Item'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data : [
          {
            name: 'water',
            imgURL: plant,
            title: 'When Plant needs Watering?',
            value: '',
            icon: 'snowflake outline'
          },          
          {
            name: 'bottle',
            imgURL: beer,
            title: 'Bottles left in the fridge?',
            value: '',
            icon: 'hourglass half'
          },
          {
            name: 'weather',
            imgURL: weather,
            title: 'Weather outside?',
            value: '',
            icon: 'cloud'
          },
          {
            name: 'temp',
            imgURL: temperature,
            title: 'Temperature of the Office',
            value: '',
            icon: 'microchip'
          },
          {
            name: 'visitors',
            imgURL: visitor,
            title: 'Concurrent visitors on the site now',
            value: '',
            icon: 'user secret'
          },
          {
            name: 'tt',
            imgURL: tt,
            title: 'Is TT table Occupied?', 
            value: '',
            icon: 'bullhorn'
          },

        ],
        isLoaded: true,
    }

}
componentDidMount() {
  fetch("https://react-gosquared.herokuapp.com/api/v1")
    .then(res => res.json())
    .then(
      (result) => {
        let newData = [...this.state.data]
        newData = newData.map((d) => {
          result.map((i) => {
            if(i.name == d.name) {
              d.value = i.value
            }
          })
          return d;
        });
        setTimeout(() => {
          this.setState({
            isLoaded: false,
            data: newData
          });
        }, 200);  
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error
        });
      }
    )
}
    render() {
      let listOfFiles = this.state.data.map(function(item, index) { 
        let img = item.imgURL;
        return (<div className="row" key={index}>
        <Item data={item} imageUri={item.imgURL}></Item>
        </div>
        );
      },this)
      return (
        <div className="full-height">
            <h2 className="title">
            <div className="sub header"></div>
        </h2>
        <div className="scroll-container full-height">
        {
          this.state.isLoaded ? <div className="ui active centered loader"></div> :
          <Container className="App container">
          {listOfFiles}
          </Container>
        }
        </div>
        </div>
      );
    }
}
