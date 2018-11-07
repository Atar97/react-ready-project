import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link class="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/card/find">Find Card</Link>
                </li>
            </ul>
          </nav>;
    }
}

export default Navbar;