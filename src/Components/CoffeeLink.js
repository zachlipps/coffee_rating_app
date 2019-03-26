import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CONSTANTS } from '../Utils/Constants';

const LinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    flex-basis: 50%;
    justify-content: space-around;
    align-items: center;

    padding: 20px;
    border-bottom: 1px solid black;
    color: black;
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
    width: 200px;
`;

class CoffeeLink extends Component {
    render() {
        let { coffee : {name='-', id="_", info: { image='-', aromatic_profile = '-'}} = {}, match } = this.props;
        return (
            <LinkContainer>
                <StyledLink to={`${match.url}${id}`}>
                    <ImageContainer>
                        <img
                            src={ CONSTANTS['IMAGE_ENDPOINT'] + image }
                            alt=""
                        /> 
                    </ImageContainer>
                    <InfoContainer>
                        {name}
                    </InfoContainer>
                    <InfoContainer>
                        {aromatic_profile}
                    </InfoContainer>
                </StyledLink>
            </LinkContainer>
        )

    }
}


export default CoffeeLink;
