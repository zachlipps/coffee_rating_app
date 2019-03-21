import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const StyledList = styled.div`
    justify-content: flex-end;
    background-color: salmon;
    display: flex;
    flex: 1 100%;
    flex-flow: row wrap;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    display: block;
    padding: 1em;
    color: black;
    &:hover {
        background: #555;
    }
`

const Header = () => (
    <StyledList>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/coffee/">Coffee List</StyledLink>
    </StyledList>
);

export default Header;
