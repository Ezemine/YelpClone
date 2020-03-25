import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from "../SearchBar/SearchBar.js";
import { render } from '@testing-library/react';

var business =
{
    imageSrc: 'https://s3.amazonaws.com/codecademycontent/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

var businesses = [business, business, business, business, business, business];

function App() {
  render()
  {
    return (
      <div className="App">
          <h1>Yelp Search</h1>
          <SearchBar searchBar = {this.searchBar} />
          <BusinessList businessList={this.state.businessList} businesses={this.businesses}/>
        </div>
    );
  }
}

export default App;
