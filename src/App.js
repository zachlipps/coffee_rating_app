import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import CoffeeLinksList from './Components/CoffeeList';
import CoffeeInfo from './Components/CoffeeInfo';
import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;


function Home() {
  return <h2>Home</h2>;
}



class App extends Component {
  state = {
    coffeeList: []
  }

  componentDidMount() {
    this.getCoffee();
  }


  async getCoffee() {
    try {
      const res = await fetch("/API/coffee-sample-data.json");
      const { coffee: coffeeList = []} =  await res.json();
      this.setState({ coffeeList });      
    } catch (error) {
      console.error(error.message);
    }
  }

  render() {
    const { coffeeList } = this.state;
    return (
      <Router>
        <AppContainer>
          <Header/>
          <Route path="/" exact component={Home} />
          <Route 
            exact
            path="/coffee"
            render={({ match }) => <CoffeeLinksList match={match} coffeeList={coffeeList} />} 
          />

          <Route
            exact 
            path={`/coffee/:id`} 
            render={({ match }) => <CoffeeInfo match={match} coffeeList={coffeeList}/>}
          />
        </AppContainer>
      </Router>
    );
  }
}

export default App;
