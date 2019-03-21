import React, { Component } from 'react';
import CoffeeListItem from './CoffeeListItem';


class CoffeeLinkList extends Component {

  render() {
    let { coffeeList, match } = this.props;
    return (
      <div>
        { coffeeList.map(coffee => (<CoffeeListItem key={coffee.id} coffee={coffee} match={match} />)) }
      </div>
    );
  }
}

export default CoffeeLinkList;
