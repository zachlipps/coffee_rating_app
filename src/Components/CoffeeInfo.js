import React, { Component } from 'react';

import { CONSTANTS } from '../Utils/Constants';

class CoffeeInfo extends Component {
    state = {
        coffee: {}
    }

    componentDidMount(){
        this.setCoffee();
    }

    componentDidUpdate(oldProps) {
        if(oldProps.coffeeList !== this.props.coffeeList)  {
            this.setCoffee();
        }
    }

    setCoffee(){
        let { coffeeList, match } = this.props;
        let coffee = coffeeList.find(coffee => coffee.id.toString() === match.params.id);
        this.setState({coffee});

    }

    render() {
        let { coffee: { name , info: {aromatic_profile = '-', intensity='-', image } = {} } = {}} = this.state;
        return (
            <div>
                <h2>{name}</h2>
                <div>{aromatic_profile}</div>
                <div>Intensity: {intensity}</div>
                <img
                    src={ CONSTANTS['IMAGE_ENDPOINT'] + image }
                    alt=""
                /> 
            </div>
        )
    }
}

export default CoffeeInfo;


