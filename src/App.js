import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import CoffeeList from './Components/CoffeeList/CoffeeList'

function Home() {
  return <h2>Home</h2>;
}



class App extends Component {
  state = {
    coffeeList: []
  }

  componentDidMount() {
    fetch("/API/coffee-sample-data.json")
      .then(response => response.json())
      .then(({ coffee }) => this.setState({ coffeeList: coffee }));
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>

          <Route path="/" exact component={Home} />
          <Route 
            path="/coffee/"
            render={(props) => <CoffeeList coffeeList={this.state.coffeeList} />} 
          />
        </div>
      </Router>
    );
  }
}

export default App;
