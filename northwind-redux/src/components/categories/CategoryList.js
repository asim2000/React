import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as actionTypes from '../../redux/actions/actionTypes'
import {ListGroup,ListGroupItem} from 'reactstrap'
import * as productAction from '../../redux/actions/productAction'
import ProductList from '../products/ProductList'

class CategoryList extends Component {
  componentDidMount(){
    this.props.actions.getCategories()
  }
  isActive = category => {
    return category.id === this.props.currentCategory.id
  }
 onchangeCategory(category) {
    this.props.actions.changeCategory(category)
    this.props.actions.getProducts(category)
  }
  render() {
    return (

      <div>
        <ListGroup>
            {this.props.categories.map(category=>{
               return <ListGroupItem active = {this.isActive(category)} key={category.id} onClick={()=>this.onchangeCategory(category)}>{category.categoryName}</ListGroupItem>
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
      changeCategory:bindActionCreators(categoryActions.changeCategory,dispatch),
      getProducts:bindActionCreators(productAction.getProducts,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CategoryList)