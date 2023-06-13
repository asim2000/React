import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as actionTypes from '../../redux/actions/actionTypes'
import {ListGroup,ListGroupItem} from 'reactstrap'

class CategoryList extends Component {
  componentDidMount(){
    this.props.actions.getCategories()
  }
  isActive = category => {
    return category.id === this.props.currentCategory.id
  }
  render() {
    return (

      <div>
        <ListGroup>
            {this.props.categories.map(category=>{
               return <ListGroupItem active = {this.isActive(category)} key={category.id} onClick={()=>this.props.actions.changeCategory(category)}>{category.categoryName}</ListGroupItem>
            })}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory:state.changeCategoryReducer,
    categories:state.getCategoriesReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions:{
      getCategories:bindActionCreators(categoryActions.getCategories,dispatch),
      changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)