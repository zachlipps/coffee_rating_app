import React, { Component } from 'react';
import CoffeeLink from './CoffeeLink';
import styled from 'styled-components';

const StyledList = styled.div`
    border: 5px solid purple;
    padding: 0;
    justify-content: center;
    flex-flow:  column;
    display: flex;
    flex: 1 100%;
`;

class CoffeeLinksList extends Component {

  render() {
    let { coffeeList, match } = this.props;
    return (
      <StyledList>
        { coffeeList.map(coffee => (<CoffeeLink key={coffee.id} coffee={coffee} match={match} />)) }
      </StyledList>
    );
  }
}

export default CoffeeLinksList;
