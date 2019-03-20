import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/coffee/">Coffee List</Link>
        </li>
    </ul>
);

export default Header;
