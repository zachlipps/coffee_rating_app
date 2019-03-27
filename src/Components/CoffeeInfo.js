import React, { Component } from 'react';
import styled from 'styled-components';

import { CONSTANTS } from '../Utils/Constants';

const CoffeeInfoContainer = styled.div`
    height: 100%;
    width: 100%
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
`;

const CoffeeInfoLabel = styled.div`
    border: 1px solid black;
    margin: 10%;
    width: 15%;
    display: flex;
    flex-direction: column;
    min-width: 150px;
`;


const ImageContainer = styled.div`
    justify-content: space-around;
    align-items: center;
    align-items: center;
`;


const CoffeeIntensityInfo = styled.div`
    display: flex;
    justify-content: flex-start;
    flex: 1;
    text-orientation: upright;
    writing-mode: vertical-rl;
    align-items: center;
`;

const LabelInfoContainer = styled.div`
    display: flex;
    flex-direction: row-wrap;
    justify-content: flex-start;
    flex: 4;
    font-size: 80%;
`;

const LabelHeader = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    font-weight: bold;
    font-size: 150%;
`;

const LabelRow = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid black;
    font-size: 80%;
`;


const LabelBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`;

class CoffeeInfo extends Component {
    state = {
        coffee: {},
        placeholder_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

    renderIntensityMeter(intensity) {
        let intensityMeter = new Array(CONSTANTS.MAX_INTENSITY).fill(".");
        for(let i = 0; i < intensity ; i ++) {
            if (i < intensity) {
                intensityMeter[i] = ("*");
            }
        }
        return intensityMeter.reverse().join("");
    }

    render() {
        let { coffee: { name = "-" , info: {aromatic_profile = '-', intensity='-', image } = {} } = {}, placeholder_text = '-'} = this.state;

        return (
            <CoffeeInfoContainer>
                <CoffeeInfoLabel>
                    <LabelHeader>
                        <div>COFFEE FACTS</div>
                    </LabelHeader>
                    <LabelRow>
                        <div>{name}</div>
                        <div>{"Aromatic Profile: " + aromatic_profile}</div>
                    </LabelRow>
                    <LabelBottom>
                        <LabelInfoContainer>
                            {placeholder_text}
                        </LabelInfoContainer>
                        <CoffeeIntensityInfo>
                            <div>{ this.renderIntensityMeter(intensity) }</div>
                        </CoffeeIntensityInfo> 
                    </LabelBottom>
                </CoffeeInfoLabel>
                <ImageContainer>
                    <img
                        src={ CONSTANTS['IMAGE_ENDPOINT'] + image }
                        alt=""
                    /> 
                </ImageContainer>
            </CoffeeInfoContainer>
        )
    }
}

export default CoffeeInfo;


