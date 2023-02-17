import { useState } from 'react';
import coatImage from './assets/item-blue.jpg'
import './App.css';
import React from 'react';

class Shop extends React.Component{
  constructor(props){
    super(props);
    this.render()
  }

  render() {
    return (
      <div class="main-content">
      <h2>{this.props.item.brand}</h2>
      <h1>{this.props.item.title}</h1>
      <h3>{this.props.item.description}</h3>
      <div className="description">{this.props.item.descriptionFull}</div>
      <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{this.props.item.currency + (this.props.item.price).toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }
}

function App() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'>
          <img className='coat-img' src={coatImage} alt='coat' />
        </div>
      </div>
      <div className="window">
        <Shop item = {item} />
      </div>
    </div>
  )
}

export default App
