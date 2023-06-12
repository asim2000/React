import React, { Component } from 'react'
import {connect} from 'react-redux'

class CategoryList extends Component {
  render() {
    return (
      <div>
        {this.props.currentCategory.categoryName}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        currentCategory:state.changeCategoryReducer
    }
}

export default connect(mapStateToProps)(CategoryList)