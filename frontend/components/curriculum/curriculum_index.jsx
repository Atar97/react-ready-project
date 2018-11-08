import React, { Component } from 'react'
import { connect } from 'react-redux'
import CurriculumIndexItem from './curriculum_index_item';

export class CurriculumIndex extends Component {

  render() {
      const { units } = this.props;
    return (
      <div>
        <ul>
            {units.map(unit => (
                <CurriculumIndexItem unit={unit} />
            ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumIndex)
