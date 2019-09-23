import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import './Item.scss';

export default class Item extends Component { 

  render() {
    return (
      <div className="App">
      <Card>
      <Image src={this.props.imageUri}/>
      <Card.Content>
        <Card.Header>{this.props.data.title}</Card.Header>
       <Card.Meta>  <Icon name={this.props.data.icon} />
         {
           this.props.data.name === 'temp' ? <span> {this.props.data.value} <sup>0</sup></span>: <span> {this.props.data.value}</span>
         }  </Card.Meta>
      </Card.Content>
       </Card>    
      </div>
    );
  }
}



