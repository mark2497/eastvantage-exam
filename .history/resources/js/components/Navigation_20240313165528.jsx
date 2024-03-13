import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    // Component implementation
    return (
        <nav>
            <ul>
                <li><Link to="/">Users</Link></li>
                <li><Link to="/new">New</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
