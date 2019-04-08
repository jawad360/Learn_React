import React from 'react';
import { Link } from 'react-router-dom';

function Headers() {
    return (
        <header>
            TODO
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </header>
    );
}

export default Headers;