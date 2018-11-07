import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {

    render() {
        return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">
              Home
            </a>
          </nav>;
    }
}

export default Navbar;