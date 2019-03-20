import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';

function Home() {
  return <h2>Home</h2>;
}



class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header/>

          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
