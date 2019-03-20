import React, { Component } from 'react';
import CoffeeListItem from '../CoffeeListItem/CoffeeListItem';

class CoffeeList extends Component {

  render() {
    let { coffeeList } = this.props;
    return (
      <div>
        { coffeeList.map(coffee => (<CoffeeListItem key={coffee.name} coffee={coffee} />)) }
      </div>
    );
  }
}

export default CoffeeList;
