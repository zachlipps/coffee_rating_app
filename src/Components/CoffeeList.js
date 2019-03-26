import React, { Component } from 'react';
import CoffeeLink from './CoffeeLink';
import styled from 'styled-components';

const StyledList = styled.div`
    margin: 10px;
    justify-content: center;
    flex-flow:  column;
    display: flex;
    flex: 1 100%;
    flex-grow: 1;
    overflow-y: auto;
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
