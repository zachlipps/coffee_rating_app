import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CONSTANTS } from '../Utils/Constants';

const LinkContainer = styled.div`
    display: flex;
    border: 3px solid blue;
    justify-content: space-around;
`;

const StyledLink = styled(Link)`
    border-radius: 25px;
    padding: 20px;
    border: 3px solid black;
    flex-basis: 50%;

    color: black;
    display: flex;
    text-decoration: none;
    
    &:hover {
        background: skyblue;
    }
`;

const ImageContainer = styled.div`
    display: flex;

`;


const InfoContainer = styled.div`
    display: flex;
`;

class CoffeeLink extends Component {
    render() {
        let { coffee : {name='-', id="_", info: { image='-'}} = {}, match } = this.props;
        return (
            <LinkContainer>
                <StyledLink to={`${match.url}${id}`}>
                    <InfoContainer>
                        {name}
                    </InfoContainer>
                    <ImageContainer>
                        <img
                            src={ CONSTANTS['IMAGE_ENDPOINT'] + image }
                            alt=""
                        /> 
                    </ImageContainer>
                </StyledLink>
            </LinkContainer>
        )

    }
}


export default CoffeeLink;
