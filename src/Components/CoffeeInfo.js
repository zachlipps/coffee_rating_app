import React, { Component } from 'react';
import { CONSTANTS } from '../Utils/Constants';

class CoffeeInfo extends Component {
    render() {
        let { coffeeList, match } = this.props;
        let coffee = coffeeList.find(coffee => coffee.id.toString() === match.params.id);
        let { info } = coffee;
        return (
            <div>
                <h2>{coffee.name}</h2>
                <div>{info['aromatic-profile']}</div>
                <div>Intensity: {info.intensity}</div>
                <img
                    src={ CONSTANTS['IMAGE-ENDPOINT'] + info.image }
                    alt=""
                /> 
            </div>
        )
    }
}

export default CoffeeInfo;


