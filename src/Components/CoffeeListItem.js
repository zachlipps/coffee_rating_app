import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CoffeeLink extends Component {
    render() {
        let { coffee, match } = this.props;
        return (
            <li>
                <Link to={`${match.url}${coffee.id}`}>{coffee.name}</Link>
            </li>
        )

    }
}


export default CoffeeLink;
