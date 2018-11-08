import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CurriculumIndexItem extends Component {
  render() {
      const {unit} = this.props;
    return (
      <li>
        <Link to={`curriculum/${unit.title}`} >{unit.title}</Link>
      </li>
    )
  }
}

export default CurriculumIndexItem
